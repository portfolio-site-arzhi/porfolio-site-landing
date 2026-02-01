<template>
  <v-container>
    <h1 class="text-h3 font-weight-bold mb-8 text-center">{{ t('experience.heading') }}</h1>

    <v-row justify="center">
      <v-col cols="12" md="10">
        <div class="d-sm-none">
          <div class="d-flex flex-column ga-4">
            <v-card
              v-for="(exp, index) in experiences"
              :key="exp.id"
              class="elevation-2 motion-lift motion-in"
              :style="{ '--enter-delay': `${index * 40}ms` }"
            >
              <v-card-title>
                <div class="text-caption text-primary mb-1">{{ exp.period }}</div>
                <div class="text-h6">{{ exp.role }}</div>
                <div class="text-subtitle-1 text-grey-darken-1">{{ exp.company }}</div>
              </v-card-title>
              <v-card-text>
                <p class="mb-3">{{ exp.description }}</p>
                <div class="d-flex flex-wrap ga-2">
                  <v-chip
                    v-for="skill in exp.skills"
                    :key="skill"
                    size="small"
                    color="secondary"
                    variant="tonal"
                  >
                    {{ skill }}
                  </v-chip>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </div>

        <div class="d-none d-sm-block">
          <v-timeline align="start" side="end">
            <v-timeline-item
              v-for="(exp, index) in experiences"
              :key="exp.id"
              dot-color="primary"
              size="small"
              class="motion-in"
              :style="{ '--enter-delay': `${index * 40}ms` }"
            >
              <template #opposite>
                <div class="pt-1 headline font-weight-bold text-primary">
                  {{ exp.period }}
                </div>
              </template>

              <v-card class="elevation-2 motion-lift">
                <v-card-title class="text-h6">
                  {{ exp.role }}
                  <div class="text-subtitle-1 text-grey-darken-1">
                    {{ exp.company }}
                  </div>
                </v-card-title>
                <v-card-text>
                  <p class="mb-2">{{ exp.description }}</p>
                  <div class="mt-2">
                    <v-chip
                      v-for="skill in exp.skills"
                      :key="skill"
                      size="small"
                      class="mr-2 mb-1"
                      color="secondary"
                      variant="tonal"
                    >
                      {{ skill }}
                    </v-chip>
                  </div>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const { experiences } = useLandingData()
const { t, locale } = useI18n()

useHead({
  title: t('nav.experience'),
  htmlAttrs: {
    lang: locale.value,
    dir: 'ltr'
  },
  meta: [{ name: 'description', content: 'My professional experience and responsibilities.' }]
})
</script>
