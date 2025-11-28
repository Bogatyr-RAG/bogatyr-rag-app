<template>
    <button class="btn__round" :disabled="disabled">
        <slot />
    </button>
</template>
<script setup lang="ts">

interface Props {
    disabled?: boolean
}

defineProps<Props>()

</script>
<style scoped lang="scss">
.btn__round {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--dark);
    border-radius: 100px;
    height: 60px;
    width: 60px;
    border: none;
}
</style>