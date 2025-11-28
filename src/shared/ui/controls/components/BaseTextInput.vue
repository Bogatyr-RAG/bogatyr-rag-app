<template>
    <input
      :id="id"
      v-model="model"
      class="input"
      :class="{ error: !!errorMessage, disabled }"
      :placeholder="placeholder"
      :disabled="disabled"
      :name="name"
    />
</template>

<script setup lang="ts">

interface SInputPasswordProps {
	id?: string
	placeholder: string
	disabled?: boolean
	errorMessage?: string
	name: string;
}

withDefaults(defineProps<SInputPasswordProps>(), {
	id: String(Date.now()),
	errorMessage: '',
  disabled: false
})

const model = defineModel<string>()
</script>