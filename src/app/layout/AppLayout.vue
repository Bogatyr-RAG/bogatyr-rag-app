<template>
  <AppSidebar :navigation-config="navigationConfig" />

  <div class="page">
    <AppHeader />

    <div class="page__content">      
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppHeader } from 'src/widgets/layout/header'
import { AppSidebar } from 'src/widgets/layout/sidebar'
import type { NavigationLinkConfig } from 'src/widgets/layout/sidebar'

interface AppLayoutProps {
	navigationConfig: NavigationLinkConfig[]
}

defineProps<AppLayoutProps>()

</script>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__content {
    display: flex;
    flex-direction: column;

    padding: 3rem;
  }
}

</style>