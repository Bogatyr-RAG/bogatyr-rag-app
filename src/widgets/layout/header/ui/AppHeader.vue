<template>
  <div class="app-header">
    <AppSidebar :navigation-config="navigationConfig" />

    <div class="app-header__right">
      <!-- <ModeChooser /> -->
      <UserProfile />
    </div>

  </div>
</template>

<script setup lang="ts">
import ModeChooser from './ModeChooser.vue'
import UserProfile from './UserProfile.vue'
import AppSidebar from '../../sidebar/ui/AppSidebar.vue';

import type { NavigationLinkConfig } from 'src/widgets/layout/sidebar'

interface AppLayoutProps {
  navigationConfig: NavigationLinkConfig[]
}

defineProps<AppLayoutProps>()
</script>

<style scoped lang="scss">
.app-header {
  display: flex;
  height: 100px;
  padding: 15px;
  justify-content: space-between;

  &__right {
     display: flex;
     align-items: center;
     gap: 1rem;
  }
}
</style>