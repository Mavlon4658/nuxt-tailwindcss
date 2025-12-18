<script setup lang="ts">
import PLine from '@/components/ui/PLine.vue'
import { Prop } from 'vue'

interface Lesson {
    id: number
    title: string
    progress: number
    text: string
    completed: boolean
    pin: boolean
}

interface Props {
    data: Lesson
}

defineProps<Props>()
</script>

<template>
    <div class="bg-white border border-solid border-[rgba(24,24,27,0.1)] rounded-2xl p-4 flex flex-col gap-3">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
                <img v-if="data.pin" src="~/assets/images/pin-icon.svg" alt="" class="shrink-0">
                <h3 class="font-medium text-lg leading-[130%] text-black">{{ data.title }}</h3>
            </div>
            <img v-if="data.completed" src="~/assets/images/check-circle.svg" alt="" class="shrink-0">
        </div>
        <div class="flex flex-col gap-2">
            <p class="font-normal text-sm leading-[120%] text-[#8f8fa3]">{{ data.text }}</p>
            <PLine :value="data.progress"/>
        </div>
    </div>
</template>