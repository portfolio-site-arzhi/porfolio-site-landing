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
  const fallbackExperiences = useState<Experience[]>('experiences', () => [])

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

