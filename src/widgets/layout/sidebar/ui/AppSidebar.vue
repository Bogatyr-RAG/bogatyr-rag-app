<template>
  <div>
    <q-layout  >
      <q-header elevated class="bg-primary" >
          <RoundButton @click="leftDrawerOpen = !leftDrawerOpen">
            <SideBar />
          </RoundButton>
      </q-header>

      <q-drawer v-model="leftDrawerOpen" side="left" :width="300" show-if-above>
        <div class="app-sidebar">
          <div class="app-sidebar__navigation__container">
            
          </div>

          <button class="app-sidebar__bug-report btn">
            <LogoRag/>
          </button>
        </div>
      </q-drawer>

    </q-layout>
  </div>
</template>

<script setup lang="ts">
import { LogoRag } from 'src/shared/icons'
import { SideBar } from 'src/shared/icons'
import { ref } from 'vue'
import { RoundButton } from 'src/shared/ui'

import type { NavigationLinkConfig } from '../types/navigationConfig'

interface AppSidebarProps {
  navigationConfig: NavigationLinkConfig[]
}

defineProps<AppSidebarProps>()

const leftDrawerOpen = ref(false)
</script>

<style scoped lang="scss">
.app-sidebar {
  display: flex;
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

    &.active {
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
    margin: 25px;
  }
}
</style>