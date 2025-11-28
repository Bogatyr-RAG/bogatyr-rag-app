<template>
    <div class="page__container">
        <h1 class="page__title">
            <slot name="title"></slot>
        </h1>
        <div class="page__content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
.page {
    &__container {
        gap: 30px;
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    &__title {
        font-weight: 1000;
    }

    &__content {
        display: flex;
        align-items: start;
        justify-content: center;
        flex: 1;
        width: 100%;
        overflow-x: hidden;
    }
}
</style>