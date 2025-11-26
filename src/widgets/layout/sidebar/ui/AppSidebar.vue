<template>
  <div class="app-sidebar">
    <div class="app-sidebar__navigation__container">
      <AppLogo class="app-sidebar__logo" />

      <div class="app-sidebar__navigation">
        <RouterLink
          v-for="linkConfig of navigationConfig"

          :key="linkConfig.to"
          v-slot="{ isActive }"
          :to="linkConfig.to"
        >
          <component
            :is="linkConfig.icon"
            class="app-sidebar__icon"
            :class="{'active': isActive}"
          />
        </RouterLink>
      </div>
    </div>

    <button class="app-sidebar__bug-report btn">
      <BugReportIcon class="app-sidebar__icon" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { AppLogo, BugReportIcon } from 'src/shared/ui/assets/icons'
import { RouterLink } from 'vue-router'

import type { NavigationLinkConfig } from '../types/navigationConfig'

interface AppSidebarProps {
	navigationConfig: NavigationLinkConfig[]
}

defineProps<AppSidebarProps>()

</script>

<style scoped lang="scss">

.app-sidebar {
    display: flex;
    width: 100px;
    height: 100%;

    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background-color: var(--main);

    &__logo {
      height: 56px;
      width: 56px;

      margin: 22px;
    }

    &__icon {
      width: 40px;
      height: 40px;

      fill: var(--light);

      &:hover {
        fill: var(--light-gray);
      }

      &.active{
        fill: var(--accent);
      }
    }

    &__navigation {
      display: flex;
      flex-direction: column;
      gap: 40px;

      &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    &__bug-report {
      background: none;
      border: none;

      margin: 25px;
    }
}
</style>