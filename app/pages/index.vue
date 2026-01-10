<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" class="text-center text-md-left">
        <v-fade-transition appear>
          <div>
            <h1 class="text-h2 font-weight-bold mb-4">
              Hello, I'm <span class="text-primary">{{ profile.name }}</span>
            </h1>
            <h2 class="text-h4 text-grey-darken-1 mb-6">
              {{ profile.role }}
            </h2>
            <p class="text-body-1 mb-8">
              {{ profile.bio }}
            </p>
            <div class="d-flex flex-column flex-sm-row justify-center justify-md-start ga-4">
              <v-btn
                color="primary"
                size="large"
                to="/portfolio"
                prepend-icon="mdi-briefcase-outline"
              >
                View Work
              </v-btn>
              <v-btn
                variant="outlined"
                size="large"
                to="/experience"
                prepend-icon="mdi-briefcase-account-outline"
              >
                View Experience
              </v-btn>
            </div>
          </div>
        </v-fade-transition>
      </v-col>
      
      <v-col cols="12" md="6" class="text-center">
        <v-scale-transition appear>
          <v-avatar size="300" class="elevation-10">
            <img
              :src="profile.avatar"
              alt="Profile Avatar"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              style="width: 100%; height: 100%; object-fit: cover; display: block;"
            >
          </v-avatar>
        </v-scale-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const { profile } = useLandingData()

useHead({
  title: 'Home',
  titleTemplate: (title) => `${title} - ${profile.value.name}`,
  meta: [
    { name: 'description', content: profile.value.bio }
  ]
})
</script>
