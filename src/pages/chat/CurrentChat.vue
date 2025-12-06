<template>
    <PageWrapper>
        <template #content>
            <ChatLayout />
        </template>
    </PageWrapper>
</template>

<script setup lang="ts">
import { PageWrapper } from 'src/shared/ui';
import { ChatLayout } from 'src/widgets/chat';
</script>