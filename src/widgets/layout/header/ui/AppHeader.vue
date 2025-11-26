<template>
  <div class="app-header">
    <ModeChooser />
    <UserProfile />
  </div>
</template>

<script setup lang="ts">
import ModeChooser from './ModeChooser.vue'
import UserProfile from './UserProfile.vue'
</script>

<style scoped lang="scss">
.app-header {
    display: flex;
    width: 100%;
    height: 100px;
    padding: 15px;

    justify-content: flex-end;
    gap: 1rem;
}
</style>