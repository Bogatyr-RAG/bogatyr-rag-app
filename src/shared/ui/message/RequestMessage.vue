<template>
    <div class="message__layout">
        <q-chat-message 
            :name="userName" 
            :text="[message]" 
            bg-color="blue-grey-10"
            text-color="white"
            sent
        />
    </div>
</template>

<script setup lang="ts">
interface Props {
    message?: string
    userName?: string
}

withDefaults(defineProps<Props>(), {
    message: '',
    userName: 'вы'
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

</style>