<template>
    <div class="input-btn__layout">
        <div class="input-btn__input-container">
            <BaseInput 
                placeholder="Введите запрос" 
                name="input-request" 
                v-model="message" 
                :disabled="inputDisable"
            />
        </div>
        <RoundButton @click="sendRequest" :disabled="sendDisable">
            <RoundSpiner v-if="loading"/>
            <StopIcon v-else-if="generating"/>
            <SendIcon v-else/>
        </RoundButton>
    </div>
</template>

<script setup lang="ts">
import { BaseInput, RoundButton, RoundSpiner } from 'src/shared/ui';
import { SendIcon } from 'src/shared/icons';
import { computed, toRefs } from 'vue';
import { StopIcon } from 'src/shared/icons';

const message = defineModel<string>('')

interface Emits {
    (event: 'send'): void
}

interface Props {
    sendDisabled?: boolean
    inputDisabled?: boolean
    generating?: boolean
    loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    sendDisabled: false,
    inputDisabled: false,
    generating: false,
    loading: false
})

const { sendDisabled, inputDisabled, generating, loading } = toRefs(props)

const emit = defineEmits<Emits>()

const sendRequest = (): void => {
    console.log('32423')
    emit('send')
}

const sendDisable = computed(() => 
    sendDisabled.value || !message.value?.trim()
)

const inputDisable = computed(() => 
    generating.value || loading.value || inputDisabled.value
)

defineExpose({
    sendRequest
})
</script>

<style scoped lang="scss">
.input-btn {
    &__layout {
        display: flex;
        width: 100%;
        align-items: center;
        gap: 10px;
        padding: 10px;
    }

    &__input-container {
        width: 100%;
    }
}
</style>