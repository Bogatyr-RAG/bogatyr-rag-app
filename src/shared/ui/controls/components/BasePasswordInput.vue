<template>
  <div
    class="input"
    :class="{ error: !!errorMessage, disabled }"
  >
    <input
      :id="id"
      v-model="model"
      :type="showPassword ? 'text' : 'password'"
      class="input__field"
      :placeholder="placeholder"
      :disabled="disabled"
      :name="name"
    />
    <button
      type="button"
      class="input__eye"
      :aria-label="showPassword ? 'Скрыть' : 'Показать'"
      @click="togglePassword"
    >
      <VisibleOff v-if="!showPassword" />
      <VisibleOn v-else />
    </button>
  </div>
</template>

<script setup lang="ts">
import { VisibleOff, VisibleOn } from 'src/shared/icons'
import { ref } from 'vue'

interface InputPasswordProps {
	id?: string
	placeholder: string
	disabled?: boolean
	errorMessage?: string
	name: string
}

defineProps<InputPasswordProps>()

const model = defineModel<string>({ default: '' })

const showPassword = ref<boolean>(false)

const togglePassword = (): void => {
	showPassword.value = !showPassword.value
}
</script>

<style scoped lang="scss">
.input--password {
    display: flex;
    align-items: center;
    height: 45px;
    border: 3px solid transparent;
    border-radius: 30px;
    background-color: var(--secondary);
    color: var(--light);
    font-weight: 500;
    transition: border-color 200ms ease;

    &.error {
        border-color: var(--danger);
    }
}

.input__eye {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  border: none;
  background: none;
  color: var(--light);
  cursor: pointer;
}
</style>