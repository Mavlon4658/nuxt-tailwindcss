<script setup lang="ts">
import MenuList from '@/components/MenuList.vue'
import { ref } from "vue";

interface MenuList {
    title: string
    to: string
    icon: string
    selected: boolean
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

interface TaskList {
    id: number
    title: string
    to: string
    favorite: boolean
}

const taskList = ref<TaskList[]>([
    {
        id: 1,
        title: 'English Version of text', 
        to: '#',
        favorite: true,
    },
    {
        id: 1,
        title: 'English Version of text', 
        to: '#',
        favorite: false,
    },
])

interface RightSideTask {
    id: number
    title: string
    to: string
    favorite: boolean
    selected: boolean
}

const rightSideTask = ref<RightSideTask[]>([
    {
        id: 1,
        title: 'English Version of text', 
        to: '#',
        favorite: true,
        selected: true,
    },
    {
        id: 1,
        title: 'English Version of text', 
        to: '#',
        favorite: false,
        selected: false,
    },
])

</script>

<template>
    <NuxtLayout
        name="lesson"
        title="Урок 1.6. Визуальный код"
    >
        <div class="flex items-start justify-between gap-6">

            <!-- Left side -->
            <div class="w-[302px] shrink-0 flex flex-col gap-4">
                <menu-list :list="menuList" />
                <nuxt-link to="#" class="group flex items-center gap-3 bg-white hover:bg-[#efeff5] border border-[#e0e0eb] rounded-2xl p-3 transition-[0.2s] duration-[ease-in-out] ease-[all]">
                    <span class="w-10 h-10 rounded-full group-hover:bg-white bg-[#efeff5] flex items-center justify-center transition-[0.2s] duration-[ease-in-out] ease-[all]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.86172 5.2C9.71315 5.08857 9.53649 5.02072 9.35152 5.00404C9.16656 4.98736 8.98061 5.02252 8.81451 5.10557C8.6484 5.18863 8.5087 5.31629 8.41107 5.47427C8.31343 5.63225 8.26172 5.81429 8.26172 6V18C8.26172 18.1857 8.31343 18.3678 8.41107 18.5257C8.5087 18.6837 8.6484 18.8114 8.81451 18.8944C8.98061 18.9775 9.16656 19.0126 9.35152 18.996C9.53649 18.9793 9.71315 18.9114 9.86172 18.8L17.8617 12.8C17.9859 12.7069 18.0867 12.5861 18.1561 12.4472C18.2256 12.3084 18.2617 12.1552 18.2617 12C18.2617 11.8448 18.2256 11.6916 18.1561 11.5528C18.0867 11.4139 17.9859 11.2931 17.8617 11.2L9.86172 5.2Z" fill="#7575F0" />
                        </svg>
                    </span>
                    <span class="text-lg leading-[130%]">Аудиоурок (отдельно)</span>
                </nuxt-link>
            </div>

            <!-- Center block -->
            <div class="w-full flex flex-col gap-6">
                <task-card
                    title="2.1 Заголовок задания"
                    content="Тестовое поле для урока (вставляется произвольный HTML код)"
                    :taskList="taskList"
                />
                <div class="flex items-center gap-3">
                    <Button
                        variant="outlined"
                        class="bg-white border-[#e0e0eb] w-full h-14 p-0 flex items-center gap-3"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.707 5.29295C11.3165 4.90243 10.6835 4.90243 10.293 5.29296L4.29297 11.293C3.90245 11.6835 3.90245 12.3165 4.29297 12.707L10.293 18.707C10.6835 19.0975 11.3165 19.0975 11.707 18.707C12.0976 18.3165 12.0976 17.6835 11.707 17.293L7.41406 13L19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11L7.41406 11L11.707 6.70702C12.0976 6.31649 12.0976 5.68348 11.707 5.29295Z" fill="#8F8FA3" />
                        </svg>
                        <span class="text-base leading-[130%] text-black">Предыдущий урок</span>
                    </Button>
                    <Button
                        severity="info"
                        class="bg-[#3333e8] border-[#3333e8] w-full h-14 p-0 flex items-center gap-3"
                    >
                        <span class="text-base leading-[130%] text-white">Следующий урок</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.293 18.707C12.6835 19.0976 13.3165 19.0976 13.707 18.707L19.707 12.707C20.0976 12.3165 20.0976 11.6835 19.707 11.293L13.707 5.29298C13.3165 4.90246 12.6835 4.90246 12.293 5.29298C11.9024 5.68351 11.9024 6.31652 12.293 6.70705L16.5859 11L5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13L16.5859 13L12.293 17.293C11.9024 17.6835 11.9024 18.3165 12.293 18.707Z" fill="white" />
                        </svg>
                    </Button>
                </div>
            </div>

            <!-- Right side -->
            <div class="w-[336px] shrink-0 border bg-white border-[#e0e0eb] rounded-2xl p-6 flex flex-col gap-6">
                <div>
                    <h3 class="text-xl leading-[120%] mb-3">Словарь</h3>
                    <Button
                        variant="outlined"
                        class="bg-white border-[#e0e0eb] w-full h-11 p-0 flex items-center gap-3"
                    >
                        <span class="text-base leading-[130%] text-black">Русский</span>
                        <svg width="63" height="28" viewBox="0 0 63 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="63" height="28" rx="14" fill="#EFEFF5"/>
                            <path d="M24 11.917H39L34 6.91699M39.3329 16.0837H24.3329L29.3329 21.0837" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span class="text-base leading-[130%] text-black">Английский</span>
                    </Button>
                </div>
                <div class="flex items-start flex-col gap-2">
                    <div
                        v-for="(data, i) in rightSideTask"
                        :key="i"
                        class="flex items-start"
                    >
                        <div class="p-2 shrink-0">
                            <Checkbox
                                v-model="data.selected"
                                name="size"
                                value="true"
                                size="large"
                                class="bg-white"
                            />
                        </div>
                        <task-item
                            :data="data"
                            openText="Открытое слово"
                            closeText="Закрытое слово"
                        />
                    </div>
                </div>
            </div>

        </div>
    </NuxtLayout>
</template>