<template>
  <v-container>
    <h1 class="text-h3 font-weight-bold mb-8 text-center">{{ t('nav.education') }}</h1>

    <v-row justify="center">
      <v-col cols="12" md="10">
        <CvEducation :items="educations" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const { educations } = useLandingData()
const { t, locale } = useI18n()

useHead({
  title: t('nav.education'),
  htmlAttrs: {
    lang: locale.value,
    dir: 'ltr'
  },
  meta: [{ name: 'description', content: 'My education background.' }]
})
</script>

