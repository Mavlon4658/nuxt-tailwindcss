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
        <div class="flex items-center justify-between mb-12">
            <PHeader
                prevLink="#"
                :title="layoutCustomProps.title"
            />
            <ToggleCompleted text="Скрывать выполненные" v-model:value="completed"/>
        </div>

        <slot />
    </PContainer>
</template>