<template>
    <div style="width: 100%; max-width: 500px">
      <q-chat-message
        :name="userName"
        :text="[message]"
        color="white"
        sent
        bg-color="blue-grey-9"
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

</style>
