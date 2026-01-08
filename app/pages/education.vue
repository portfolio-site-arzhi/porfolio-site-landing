<template>
  <v-container>
    <h1 class="text-h3 font-weight-bold mb-8 text-center">Education</h1>

    <v-row justify="center">
      <v-col cols="12" md="10">
        <CvEducation :items="educations" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const { educations } = useLandingData()

useHead({
  title: 'Education',
  meta: [{ name: 'description', content: 'My education background.' }]
})
</script>

