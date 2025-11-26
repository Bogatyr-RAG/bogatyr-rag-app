<template>
  <div class="mode-chooser">
    <BaseButton class="mode-chooser__btn">
      Админ-панель
    </BaseButton>

    <BaseButton class="mode-chooser__btn">
      <CrosswordIcon class="mode-chooser__icon" />
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { BaseButton } from 'src/shared/ui'
import { CrosswordIcon } from 'src/shared/ui/assets/icons'

</script>

<style scoped lang="scss">
.mode-chooser {
    display: flex;
    gap: 1rem;

    .mode-chooser__btn {
        background-color: var(--dark);
        height: 60px;
        border-radius: 20px;
        font-size: 20px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__icon {
      width: 40px;
      height: 40px;
      padding: 0;

      fill: var(--light);
    }
}
</style>