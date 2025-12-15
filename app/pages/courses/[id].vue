<script setup lang="ts">
import LessonCard from '@/components/LessonCard.vue'
import { ref } from 'vue'

interface LessonList {
    id: number,
    title: string,
    progress: number,
    text: string,
    completed: boolean,
    pin: boolean,
}

const lessonList = ref<LessonList []>([
    {
        id: 1,
        title: '1.0 Заголовок урока',
        progress: 100,
        text: 'Описание темы урока',
        completed: true,
        pin: true,
    },
    {
        id: 2,
        title: '1.1 Заголовок урока',
        progress: 0,
        text: 'Описание темы урока',
        completed: false,
        pin: false,
    },
    {
        id: 3,
        title: '1.2 Заголовок урока',
        progress: 70,
        text: 'Описание темы урока',
        completed: false,
        pin: false,
    },
    {
        id: 4,
        title: '1.3 Заголовок урока',
        progress: 100,
        text: 'Описание темы урока',
        completed: true,
        pin: true,
    },
    {
        id: 5,
        title: '1.4 Заголовок урока',
        progress: 0,
        text: 'Описание темы урока',
        completed: false,
        pin: false,
    },
    {
        id: 6,
        title: '1.5 Заголовок урока',
        progress: 70,
        text: 'Описание темы урока',
        completed: false,
        pin: false,
    },
])
</script>

<template>
    <NuxtLayout
        name="course-detail"
        title="Курс для взрослых"
    >

        <div class="grid grid-cols-3 gap-4">
            <LessonCard
                v-for="(data, i) in lessonList"
                :key="i"
                :data="data"
            />
        </div>
    </NuxtLayout>
</template>