<template>
    <PageWrapper>
        <template #content>
            <div class="chat-page__layout">
                <div class="chat-page__messages">
                    <RequestMessage />
                </div>
                <div class="chat-page__input">
                    <InputWithButton v-model="message" />
                </div>
            </div>
        </template>
    </PageWrapper>
</template>

<script setup lang="ts">
import { InputWithButton, PageWrapper, RequestMessage } from 'src/shared/ui'
import { ref } from 'vue';

const message = ref<string>('')
</script>

<style scoped lang="scss">
.chat-page {
    &__layout {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 75vh;
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
        align-items: end;
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
</style>