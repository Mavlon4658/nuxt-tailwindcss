<script setup lang="ts">
import MenuList from '@/components/MenuList.vue';
import ExerciseCard from '@/components/ExerciseCard.vue'
import { ref } from 'vue';

interface MenuList {
    title: string,
    to: string,
    icon: string,
    selected: boolean,
}

const menuList = ref<MenuList[]>([
    {
        title: 'Пункт меню',
        to: '#',
        icon: '',
        selected: false,
    },
    {
        title: 'Выбранный пункт',
        to: '#',
        icon: 'pi pi-flag-fill text-[#c4c4d4]',
        selected: true,
    },
    {
        title: 'Пройденный пункт',
        to: '#',
        icon: 'pi pi-check-circle text-[#1ab266]',
        selected: false,
    },
])

interface Exercise {
    id: number
    title: string
    done: boolean
    words: string[]
    wordInp: string
}

const exerciseList = ref<Exercise[]>([
    {
        id: 1,
        title: 'Фраза для перевода в статусе заполенния',
        done: true,
        words: ['Ivan', 'love', 'to', 'play', 'football'],
        wordInp: ''
    },
    {
        id: 2,
        title: 'Переведенная фраза с показанным верным вариантом',
        done: false,
        words: ['Ivan', 'love', 'to', 'play', 'football'],
        wordInp: ''
    },
])

</script>

<template>
    <NuxtLayout
        name="lesson"
        title="Урок 1.6. Визуальный код"
    >
        <div class="flex items-start gap-6">
            <!-- Left side -->
            <div class="w-[302px] shrink-0 hidden lg:flex flex-col gap-4">
                <MenuList :list="menuList" />
                <NuxtLink to="#" class="group flex items-center gap-3 bg-white hover:bg-[#efeff5] border border-[#e0e0eb] rounded-2xl p-3 transition-[0.2s] duration-[ease-in-out] ease-[all]">
                    <span class="w-10 h-10 rounded-full group-hover:bg-white bg-[#efeff5] flex items-center justify-center transition-[0.2s] duration-[ease-in-out] ease-[all]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.86172 5.2C9.71315 5.08857 9.53649 5.02072 9.35152 5.00404C9.16656 4.98736 8.98061 5.02252 8.81451 5.10557C8.6484 5.18863 8.5087 5.31629 8.41107 5.47427C8.31343 5.63225 8.26172 5.81429 8.26172 6V18C8.26172 18.1857 8.31343 18.3678 8.41107 18.5257C8.5087 18.6837 8.6484 18.8114 8.81451 18.8944C8.98061 18.9775 9.16656 19.0126 9.35152 18.996C9.53649 18.9793 9.71315 18.9114 9.86172 18.8L17.8617 12.8C17.9859 12.7069 18.0867 12.5861 18.1561 12.4472C18.2256 12.3084 18.2617 12.1552 18.2617 12C18.2617 11.8448 18.2256 11.6916 18.1561 11.5528C18.0867 11.4139 17.9859 11.2931 17.8617 11.2L9.86172 5.2Z" fill="#7575F0" />
                        </svg>
                    </span>
                    <span class="text-lg leading-[130%]">Аудиоурок (отдельно)</span>
                </NuxtLink>
            </div>

            <div class="w-full bg-white rounded-2xl border border-solid border-[rgba(24,24,27,0.1)] p-5 mt-6 md:p-8">
                <h2 class="font-semibold text-2xl md:text-[28px] leading-[120%] text-black mb-6 md:mb-8">2.1 Заголовок задания</h2>
                <div class="flex flex-col gap-6">
                    <div class="font-normal text-base leading-[150%] text-black">Тестовое поле для урока (вставляется произвольный HTML код</div>
                    <ExerciseCard
                        v-for="(data, i) in exerciseList"
                        :key="i"
                        :data="data"
                    />
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>