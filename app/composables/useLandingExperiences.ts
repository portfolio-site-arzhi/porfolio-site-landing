import type { Experience } from '../models/Experience'
import type { LandingExperiencesResponse } from '../models/LandingExperience'
import { sanitizeExperienceHtmlServer } from '../utils/experienceHtml'
import { mapLandingExperiencesToViewModel } from '../utils/landingExperiencesMapper'

const fetchLandingExperiences = async (backendUrl: string | undefined): Promise<LandingExperiencesResponse | null> => {
  if (!backendUrl) return null
  try {
    const url = new URL('/landing/experiences', backendUrl).toString()
    const res = await $fetch<LandingExperiencesResponse>(url)
    if (!res?.data?.length) return res ?? null

    if (import.meta.client) return res

    const sanitized = await Promise.all(
      res.data.map(async (dto) => {
        const desc = dto.description
        if (!desc) return dto
        return {
          ...dto,
          description: {
            id: await sanitizeExperienceHtmlServer(desc.id ?? ''),
            en: await sanitizeExperienceHtmlServer(desc.en ?? '')
          }
        }
      })
    )

    return { data: sanitized }
  } catch {
    return null
  }
}

export const useLandingExperiences = () => {
  const runtimeConfig = useRuntimeConfig()
  const backendUrl = String(runtimeConfig.public.backendUrl || '').trim() || undefined
  const { locale } = useI18n()
  const fallbackExperiences = useState<Experience[]>('experiences', () => [
    {
      id: 1,
      role: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Sekarang',
      description: 'Memimpin migrasi arsitektur frontend ke Nuxt 3. Mentoring developer junior dan menetapkan standar kualitas kode.',
      skills: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Vitest']
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'Digital Creative Agency',
      period: '2021 - 2023',
      description: 'Mengembangkan landing page yang performan tinggi dan platform e-commerce untuk berbagai klien.',
      skills: ['Vue 2', 'SASS', 'JavaScript', 'Animation']
    }
  ])

  const { data, pending, error, refresh } = useAsyncData<LandingExperiencesResponse | null>(
    'landing-experiences',
    async () => await fetchLandingExperiences(backendUrl),
    {
      server: true,
      default: () => null
    }
  )

  const experiences = computed<Experience[]>(() => {
    const fromApi = data.value?.data
    if (Array.isArray(fromApi) && fromApi.length) {
      const mapped = mapLandingExperiencesToViewModel(fromApi, locale.value)
      if (mapped.length) return mapped
    }
    return fallbackExperiences.value
  })

  return {
    experiences,
    pending,
    error,
    refresh
  }
}

