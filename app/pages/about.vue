<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-6 motion-lift motion-in" elevation="2">
          <v-card-title class="text-h4 font-weight-bold mb-4">
            About Me
          </v-card-title>
          <v-card-text class="text-body-1">
            <p class="mb-4">
              {{ profile.bio }}
            </p>
            <p>
              I specialize in building modern web applications using the latest technologies.
              My focus is on performance, accessibility, and user experience.
            </p>
            
            <v-divider class="my-6"/>

            <CvSkills :groups="skillGroups" />

            <v-divider class="my-6"/>
            
            <h3 class="text-h5 mb-4">Connect with me</h3>
            <div class="d-flex flex-wrap ga-2">
              <v-btn
                v-for="social in profile.socials"
                :key="social.platform"
                :href="social.url"
                target="_blank"
                :prepend-icon="social.icon"
                variant="outlined"
                class="mb-2"
              >
                {{ social.platform }}
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const { profile, skillGroups } = useLandingData()

useHead({
  title: 'About',
  meta: [
    { name: 'description', content: `About ${profile.value.name} - ${profile.value.role}` }
  ]
})
</script>
