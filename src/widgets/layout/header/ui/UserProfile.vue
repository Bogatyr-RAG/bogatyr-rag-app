<template>
  <BaseButton
    v-if="authenticatedUser"
    class="user-profile"
  >
    {{ `${capitalizeString(authenticatedUser.lastName.charAt(0))}${capitalizeString(authenticatedUser.firstName.charAt(0))}` }}
  </BaseButton>
  <BaseButton v-else class="user-profile"> 
    User
  </BaseButton>
</template>

<script setup lang="ts">
import { useAuthenticatedUserStore } from 'src/feature/users/authorization'
import { capitalizeString } from 'src/shared/lib/string'
import { BaseButton } from 'src/shared/ui'

const { authenticatedUser } = useAuthenticatedUserStore()

</script>

<style scoped lang="scss">
.user-profile {
  border-radius: 100%;
  height: 60px;
  width: 60px;

  background-color: var(--light);

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--dark);
  font-size: 24px;
  font-weight: 500;

  border: none;
}
</style>