<template>
  <div>
    <NuxtPage v-if="isDetail" />

    <v-container v-else>
      <h1 class="text-h3 font-weight-bold mb-8 text-center">Portfolio</h1>
      <p class="text-body-2 text-medium-emphasis mb-6 text-center">
        Buka halaman detail untuk melihat peran, kontribusi, dan stack tiap project.
      </p>

      <v-row>
        <v-col
          v-for="(project, index) in projects"
          :key="project.id"
          cols="12"
          md="4"
          class="motion-in"
          :style="{ '--enter-delay': `${index * 40}ms` }"
        >
          <v-card
            elevation="2"
            class="h-100 transition-swing motion-lift"
            role="link"
            tabindex="0"
            @click="navigateTo(`/portfolio/${project.slug}`)"
            @keydown.enter.prevent="navigateTo(`/portfolio/${project.slug}`)"
            @keydown.space.prevent="navigateTo(`/portfolio/${project.slug}`)"
          >
            <img
              :src="project.image"
              :alt="project.title"
              :loading="index < 3 ? 'eager' : 'lazy'"
              :fetchpriority="index === 0 ? 'high' : 'auto'"
              decoding="async"
              style="width: 100%; height: 200px; object-fit: cover; display: block;"
            >

              <v-card-title>{{ project.title }}</v-card-title>

              <v-card-text>
                <p class="mb-4">{{ project.description }}</p>
                <div>
                  <v-chip
                    v-for="tag in project.tags"
                    :key="tag"
                    size="x-small"
                    class="mr-1 mb-1"
                  >
                    {{ tag }}
                  </v-chip>
                </div>
                <div class="mt-4">
                  <v-chip
                    v-if="!project.link"
                    size="x-small"
                    class="mr-2 mb-1"
                    color="secondary"
                    variant="tonal"
                  >
                    API-only / No UI
                  </v-chip>
                  <v-chip
                    v-if="!project.github"
                    size="x-small"
                    class="mr-2 mb-1"
                    color="grey"
                    variant="tonal"
                  >
                    Private repo
                  </v-chip>
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="primary"
                  variant="tonal"
                  @click.stop="navigateTo(`/portfolio/${project.slug}`)"
                >
                  Details
                </v-btn>
                <v-spacer/>
                <v-btn
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  icon="mdi-github"
                  variant="text"
                  @click.stop
                />
                <v-btn
                  v-if="project.link"
                  :href="project.link"
                  target="_blank"
                  color="primary"
                  variant="text"
                  @click.stop
                >
                  Visit
                </v-btn>
              </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const { projects } = useLandingData()
const route = useRoute()
const isDetail = computed(() => {
  const slug = route.params.slug
  if (Array.isArray(slug)) return Boolean(slug[0])
  return typeof slug === 'string' && slug.length > 0
})

useHead(() => {
  if (isDetail.value) return {}

  return {
    title: 'Portfolio',
    meta: [
      { name: 'description', content: 'Check out my latest projects and work.' }
    ]
  }
})
</script>
