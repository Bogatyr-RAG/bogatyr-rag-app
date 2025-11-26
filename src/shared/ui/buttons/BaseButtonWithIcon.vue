<template>
    <q-btn v-bind="$attrs" :class="customClass" :style="customStyle">
        <div class="custom-btn__content">
            <slot name="text"></slot>
            <div class="custom-btn__icon">
                <slot name="icon"></slot>
            </div>
        </div>
    </q-btn>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    variant?: 'primary' | 'secondary' | 'info'
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'primary'
})

const customClass = computed(() =>
    [
        'custom-btn',
        `custom-btn--${props.variant}`,
    ])

const customStyle = computed(() => {
    const styles: Record<string, string> = {}

    return styles
})
</script>

<style scoped lang="scss">
.custom-btn {
    border-radius: 100px;
    font-weight: 700;
    padding: 0 25px;
    text-transform: none;
    transition: all 0.3s ease;
    height: 120px;
    width: 100%;
    font-size: 1.3rem;

    text-overflow:ellipsis;
    text-decoration: dotted;

    &:hover {
        transform: translateY(-1px);
    }

    &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    &__icon {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &--primary {
        background: var(--main);
        color: var(--light);
        border: none;

        .custom-btn__icon {
            background-color: var(--black-400);
        }

        .custom-btn__text {
            width: 100%;
            
        }
    }

    &--secondary {
        background: var(--confirm);
        color: var(--secondary);
        border: none;

        .custom-btn__icon {
            background-color: var(--secondary);
        }

        .custom-btn__text {
            width: 100%;
        }
    }

    &--info {
        background: var(--light);
        color: var(--secondary);
        border: none;

        .custom-btn__icon {
            background-color: var(--info);
        }
    }
}
</style>