<template>
  <v-container>
    <div class="d-flex align-center justify-space-between flex-wrap gap-2 mb-6">
      <v-btn :to="localePath('/portfolio')" variant="text" prepend-icon="mdi-arrow-left">
        {{ t('nav.portfolio') }}
      </v-btn>
      <div class="d-flex align-center gap-2">
        <v-btn
          v-if="project.github"
          :href="project.github"
          target="_blank"
          variant="text"
          prepend-icon="mdi-github"
        >
          {{ t('project.github') }}
        </v-btn>
        <v-btn
          v-if="project.link"
          :href="project.link"
          target="_blank"
          color="primary"
          variant="tonal"
          append-icon="mdi-open-in-new"
        >
          {{ t('project.live') }}
        </v-btn>
      </div>
    </div>

    <v-fade-transition appear>
      <div>
        <h1 class="text-h3 font-weight-bold mb-2">{{ project.title }}</h1>
        <p class="text-body-1 text-grey-darken-1 mb-6">
          {{ project.description }}
        </p>
      </div>
    </v-fade-transition>

    <v-row>
      <v-col cols="12" md="7">
        <v-card elevation="2" class="mb-6">
          <img
            :src="project.image"
            :alt="project.title"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            style="width: 100%; height: 320px; object-fit: cover; display: block;"
          >
        </v-card>

        <v-card elevation="2" class="pa-6 mb-6">
          <div class="text-h6 font-weight-bold mb-3">{{ t('project.contributions') }}</div>
          <ul class="pl-4">
            <li v-for="item in project.contributions" :key="item" class="mb-2">
              {{ item }}
            </li>
          </ul>
        </v-card>

        <v-card v-if="project.outcomes?.length" elevation="2" class="pa-6">
          <div class="text-h6 font-weight-bold mb-3">{{ t('project.outcomes') }}</div>
          <ul class="pl-4">
            <li v-for="item in project.outcomes" :key="item" class="mb-2">
              {{ item }}
            </li>
          </ul>
        </v-card>
      </v-col>

      <v-col cols="12" md="5">
        <v-card elevation="2" class="pa-6 mb-6">
          <div class="text-h6 font-weight-bold mb-3">{{ t('project.role') }}</div>
          <div class="text-body-1">{{ project.role || '-' }}</div>

          <v-divider class="my-4" />

          <div class="text-h6 font-weight-bold mb-3">{{ t('project.stack') }}</div>
          <div>
            <v-chip
              v-for="tech in project.stack"
              :key="tech"
              size="small"
              class="mr-2 mb-2"
              color="primary"
              variant="tonal"
            >
              {{ tech }}
            </v-chip>
          </div>

          <v-divider class="my-4" />

          <div class="text-h6 font-weight-bold mb-3">{{ t('project.tags') }}</div>
          <div>
            <v-chip
              v-for="tag in project.tags"
              :key="tag"
              size="small"
              class="mr-2 mb-2"
              variant="outlined"
            >
              {{ tag }}
            </v-chip>
          </div>
        </v-card>

        <v-card v-if="project.notes" elevation="2" class="pa-6">
          <div class="text-h6 font-weight-bold mb-3">{{ t('project.notes') }}</div>
          <div class="text-body-2 text-medium-emphasis">{{ project.notes }}</div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { getProjectBySlug } from '../../utils/projects'

const { projects } = useLandingData()
const route = useRoute()
const { t, locale } = useI18n()
const localePath = useLocalePath()

const slug = computed(() => String(route.params.slug || ''))

const project = computed(() => {
  const p = getProjectBySlug(projects.value, slug.value)
  if (!p) {
    throw createError({ statusCode: 404, statusMessage: 'Project not found' })
  }
  return p
})

useHead(() => ({
  title: project.value.title,
  htmlAttrs: {
    lang: locale.value,
    dir: 'ltr'
  },
  meta: [
    { name: 'description', content: project.value.description },
    { property: 'og:title', content: project.value.title },
    { property: 'og:description', content: project.value.description },
    { property: 'og:image', content: project.value.image }
  ]
}))
</script>
