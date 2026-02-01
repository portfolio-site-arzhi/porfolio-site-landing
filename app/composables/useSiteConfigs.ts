import type { SiteConfigsData, SiteConfigsResponse } from '../models/SiteConfig'
import { ensureSiteConfigsData } from '../utils/siteConfig'

const fetchSiteConfigs = async (backendUrl: string | undefined): Promise<SiteConfigsResponse | null> => {
  if (!backendUrl) return null
  try {
    const url = new URL('/site-configs', backendUrl).toString()
    return await $fetch<SiteConfigsResponse>(url)
  } catch {
    return null
  }
}

export const useSiteConfigs = () => {
  const runtimeConfig = useRuntimeConfig()
  const backendUrl = runtimeConfig.public.backendUrl as string | undefined

  const { data, pending, error, refresh } = useAsyncData<SiteConfigsResponse | null>(
    'site-configs',
    async () => await fetchSiteConfigs(backendUrl),
    {
      server: true,
      default: () => null
    }
  )

  const siteConfigs = computed<SiteConfigsData>(() => ensureSiteConfigsData(data.value?.data))

  return {
    siteConfigs,
    pending,
    error,
    refresh
  }
}

export const useSiteConfigsReady = async () => {
  const runtimeConfig = useRuntimeConfig()
  const backendUrl = runtimeConfig.public.backendUrl as string | undefined

  const { data, pending, error, refresh } = await useAsyncData<SiteConfigsResponse | null>(
    'site-configs',
    async () => await fetchSiteConfigs(backendUrl),
    {
      server: true,
      default: () => null
    }
  )

  const siteConfigs = computed<SiteConfigsData>(() => ensureSiteConfigsData(data.value?.data))

  return {
    siteConfigs,
    pending,
    error,
    refresh
  }
}
