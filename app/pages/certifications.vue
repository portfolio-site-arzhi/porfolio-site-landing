<template>
  <v-container>
    <h1 class="text-h3 font-weight-bold mb-8 text-center">Certifications</h1>

    <v-row justify="center">
      <v-col cols="12" md="10">
        <CvCertifications :items="certifications" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const { certifications } = useLandingData()

useHead({
  title: 'Certifications',
  meta: [{ name: 'description', content: 'Courses and certifications.' }]
})
</script>

