<template>
  <q-btn
    v-bind="$attrs"
    :class="customClass"
    :style="customStyle"
  >
    <slot></slot>
  </q-btn>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
	variant?: 'primary' | 'secondary' | 'info'
	size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
	variant: 'info',
	size: 'md'
})

const customClass = computed(() =>
	[
		'custom-btn',
		`custom-btn--${props.variant}`,
		`custom-btn--${props.size}`
	])

const customStyle = computed(() => {
	const styles: Record<string, string> = {}

	return styles
})
</script>

<style scoped lang="scss">
.custom-btn {
  border-radius: 30px;
  font-weight: 700;
  text-transform: none;
  transition: all 0.3s ease;

  &:hover {
      transform: translateY(-1px);
    }

  &--primary {
    background: var(--light);
    color: var(--secondary);
    border: none;
  }

  &--confirm {
    background: var(--confirm);
    color: var(--secondary);
    border: none;
  }

  &--info {
    background: var(--info);
    color: var(--light);
    border: none;
}

  &--sm {
    padding: 8px 16px;
    font-size: 14px;
  }

  &--md {
    padding: 12px 24px;
    font-size: 16px;
  }

  &--lg {
    padding: 16px 32px;
    font-size: 18px;
  }
}
</style>