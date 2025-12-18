<script setup lang="ts">
import PHeader from '@/components/PHeader.vue'
import PContainer from '@/components/ui/PContainer.vue'
import { useAttrs } from 'vue';

const layoutCustomProps = useAttrs()
</script>

<template>
    <PContainer>
        <PHeader
            prevLink="#"
            :title="layoutCustomProps.title"
            class="mb-6 md:mb-12"
        />

        <slot />
    </PContainer>
</template>