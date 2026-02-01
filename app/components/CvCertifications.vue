<template>
  <v-card class="pa-6 motion-lift" elevation="2">
    <v-card-title class="text-h5 font-weight-bold mb-4">{{ t('nav.certifications') }}</v-card-title>

    <v-list lines="three">
      <v-list-item
        v-for="(item, index) in items"
        :key="item.id"
        class="motion-in"
        :style="{ '--enter-delay': `${index * 36}ms` }"
      >
        <template #title>
          <div class="d-flex flex-wrap align-center justify-space-between gap-2">
            <div class="text-subtitle-1 font-weight-medium">{{ item.title }}</div>
            <div class="text-caption text-medium-emphasis">{{ item.issuedAt }}</div>
          </div>
        </template>

        <template #subtitle>
          <div class="d-flex flex-wrap align-center gap-2">
            <div class="text-body-2">{{ item.issuer }}</div>
            <v-spacer />
            <v-btn
              v-if="item.credentialUrl"
              :href="item.credentialUrl"
              target="_blank"
              size="small"
              variant="text"
              color="primary"
              append-icon="mdi-open-in-new"
            >
              Credential
            </v-btn>
          </div>
          <v-expand-transition>
            <ul v-if="item.highlights?.length" class="mt-2 pl-4">
              <li v-for="h in item.highlights" :key="h" class="text-body-2">
                {{ h }}
              </li>
            </ul>
          </v-expand-transition>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import type { Certification } from '../models/Certification'

const { t } = useI18n()

defineProps<{
  items: Certification[]
}>()
</script>
