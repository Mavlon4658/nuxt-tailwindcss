<script setup lang="ts">
import PHeader from '@/components/PHeader.vue'
import PContainer from '@/components/ui/PContainer.vue'
import ToggleCompleted from '@/components/ui/ToggleCompleted.vue'
import { ref, useAttrs } from 'vue'

const layoutCustomProps = useAttrs();

const completed = ref<boolean>(false);
</script>

<template>
    <PContainer>
        <div class="flex flex-col md:flex-row flex-wrap md:items-center justify-between gap-4 mb-4 md:mb-12">
            <PHeader
                prevLink="#"
                :title="layoutCustomProps.title"
            />
            <ToggleCompleted text="Показывать только выполненные" v-model:value="completed"/>
        </div>

        <slot />
    </PContainer>
</template>