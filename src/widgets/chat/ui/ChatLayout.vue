<template>
     <div class="chat-page__layout">
                <div class="chat-page__messages">
                    <div class="message-wrapper message-wrapper--request">
                        <RequestMessage>
                            Какую подпись выбрать для...
                        </RequestMessage>
                    </div>
                    <div class="message-wrapper message-wrapper--response">
                        <ResponceMessage>
                            Вам подойдет одна из следующих подписей:
                            - ...
                        </ResponceMessage>
                    </div>
                </div>
                <div class="chat-page__input">
                    <InputWithButton v-model="message" />
                </div>
            </div>
</template>
<script setup lang="ts">
import { InputWithButton, RequestMessage, ResponceMessage } from 'src/shared/ui'
import { ref } from 'vue';

const message = ref<string>('')
</script>
<style scoped lang="scss">
.chat-page {
    &__layout {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 77vh;
        position: relative;
        overflow-x: hidden;
    }

    &__messages {
        flex: 1;
        overflow-y: auto;
        padding: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &__input {
        position: sticky;
        bottom: 0;
        z-index: 10;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.message-wrapper {
    width: 100%;
    display: flex;
    
    &--request {
        justify-content: flex-end;
    }
    
    &--response {
        justify-content: flex-start;
    }
}
</style>
