<template>
    <div class="message__layout">
        <q-chat-message 
            name="Рагослав" 
            bg-color="blue-grey-9" 
            text-color="white"
        >
            <template #default>
                <div class="message-content">
                    <slot />
                </div>
            </template>
        </q-chat-message>
    </div>
</template>

<script setup lang="ts">
interface Props {

}

withDefaults(defineProps<Props>(), {

})
</script>

<style scoped lang="scss">
.message {
    &__layout {
        width: 100%;
        max-width: 500px;
        font-size: 1.3rem;
    }
}

.message-content {
    color: white;
    padding: 8px 12px;
}
</style>