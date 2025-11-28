<script setup lang="ts">
interface IconProps {
	iconColor?: string;
}

withDefaults(defineProps<IconProps>(), {
	iconColor: 'var(--light)'
})
</script>
<template>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
<path d="M0 25V5C0 3.625 0.489583 2.44792 1.46875 1.46875C2.44792 0.489583 3.625 0 5 0H25C26.375 0 27.5521 0.489583 28.5312 1.46875C29.5104 2.44792 30 3.625 30 5V25C30 26.375 29.5104 27.5521 28.5312 28.5312C27.5521 29.5104 26.375 30 25 30H5C3.625 30 2.44792 29.5104 1.46875 28.5312C0.489583 27.5521 0 26.375 0 25Z" fill="#E3E3E3"/>
</svg>
</template>