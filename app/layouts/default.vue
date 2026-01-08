<template>
  <v-app>
    <v-app-bar elevation="1">
      <template #prepend>
        <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />
      </template>

      <v-app-bar-title class="font-weight-bold" @click="$router.push('/')">Ardi.</v-app-bar-title>

      <template #append>
        <div class="d-none d-md-flex">
          <v-btn to="/" variant="text" class="text-capitalize">Home</v-btn>
          <v-btn to="/about" variant="text" class="text-capitalize">About</v-btn>
          <v-btn to="/experience" variant="text" class="text-capitalize">Experience</v-btn>
          <v-btn to="/education" variant="text" class="text-capitalize">Education</v-btn>
          <v-btn to="/certifications" variant="text" class="text-capitalize">Certifications</v-btn>
          <v-btn to="/portfolio" variant="text" class="text-capitalize">Portfolio</v-btn>
        </div>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      class="d-md-none"
    >
      <v-list nav>
        <v-list-item to="/" title="Home" prepend-icon="mdi-home-outline" />
        <v-list-item to="/about" title="About" prepend-icon="mdi-account-outline" />
        <v-list-item to="/experience" title="Experience" prepend-icon="mdi-briefcase-outline" />
        <v-list-item to="/education" title="Education" prepend-icon="mdi-school-outline" />
        <v-list-item to="/certifications" title="Certifications" prepend-icon="mdi-certificate-outline" />
        <v-list-item to="/portfolio" title="Portfolio" prepend-icon="mdi-briefcase-variant-outline" />
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-4">
      <slot />
    </v-main>

    <v-footer class="bg-grey-lighten-3 text-center d-flex flex-column">
      <div class="pt-4">
        <v-btn icon="mdi-github" variant="text" href="https://github.com" target="_blank"/>
        <v-btn icon="mdi-linkedin" variant="text" href="https://linkedin.com" target="_blank"/>
        <v-btn icon="mdi-instagram" variant="text" href="https://instagram.com" target="_blank"/>
      </div>

      <v-divider/>

      <div class="text-caption text-medium-emphasis mb-4">
        {{ new Date().getFullYear() }} — <strong>Ardi Portfolio</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
const drawer = ref(false)
const route = useRoute()

watch(
  () => route.fullPath,
  () => {
    drawer.value = false
  }
)
</script>
