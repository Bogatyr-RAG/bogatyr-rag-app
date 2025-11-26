<template>
  <div>
    <input
      :id="id"
      v-model="model"
      class="input"
      :class="{ error: !!errorMessage, disabled }"
      :placeholder="placeholder"
      :disabled="disabled"
      :name="name"
    />
  </div>
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
})

const model = defineModel<string>()
</script>