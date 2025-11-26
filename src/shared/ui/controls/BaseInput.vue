<script setup lang="ts">
import BasePasswordInput from './components/BasePasswordInput.vue'
import BaseTextInput from './components/BaseTextInput.vue'

type InputTypes = 'text' | 'password'

const enum Types {
	TEXT = 'text',
	PASSWORD = 'password'
}

interface InputProps {
	placeholder: string
	disabled: boolean
	label?: string
	errorMessage?: string
	type?: InputTypes
	name : string
}

withDefaults(defineProps<InputProps>(), {
	label: '',
	type: 'text',
  errorMessage: ''
})

const model = defineModel<string | undefined>()
</script>

<template>
  <div class="input__wrapper">
    <label
      v-if="label"
      :for="label"
      class="input__label"
      :title="label"
    >{{ label }}</label>

    <div
      v-if="type === Types.PASSWORD"
    >
      <BasePasswordInput
        :id="label"
        v-model="model"
        :placeholder="placeholder"
        :disabled="disabled"
        :error-message="errorMessage"
        :name="name"
      />
    </div>

    <div v-else>
      <BaseTextInput
        :id="label"
        v-model="model"
        :placeholder="placeholder"
        :disabled="disabled"
        :error-message="errorMessage"
        :name="name"
      />
    </div>
  </div>

  <div
    v-if="!!errorMessage"
    class="error__message"
  >
    {{ errorMessage }}
  </div>
</template>

<style lang="scss">
@import './index.scss';

.error__message {
  margin-top: 8px;
  color: var(--danger);
}
</style>