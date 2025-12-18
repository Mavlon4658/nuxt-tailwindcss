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

const rightSideOpen = ref<boolean>(false);

</script>

<template>
    <NuxtLayout
        name="lesson"
        title="Урок 1.6. Визуальный код"
    >
        <Button @click="rightSideOpen = true" severity="info" variant="text"  class="w-full sm:w-auto !border !border-[#E0E0EB] !bg-white mb-4 px-6 rounded-xl">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 7C5.71667 7 5.47933 6.904 5.288 6.712C5.09667 6.52 5.00067 6.28267 5 6C4.99934 5.71733 5.09534 5.48 5.288 5.288C5.48067 5.096 5.718 5 6 5H18C18.2833 5 18.521 5.096 18.713 5.288C18.905 5.48 19.0007 5.71733 19 6C18.9993 6.28267 18.9033 6.52033 18.712 6.713C18.5207 6.90566 18.2833 7.00133 18 7H6ZM6 11C5.71667 11 5.47933 10.904 5.288 10.712C5.09667 10.52 5.00067 10.2827 5 9.99999C4.99934 9.71733 5.09534 9.47999 5.288 9.28799C5.48067 9.09599 5.718 8.99999 6 8.99999H18C18.2833 8.99999 18.521 9.09599 18.713 9.28799C18.905 9.47999 19.0007 9.71733 19 9.99999C18.9993 10.2827 18.9033 10.5203 18.712 10.713C18.5207 10.9057 18.2833 11.0013 18 11H6ZM6 15C5.71667 15 5.47933 14.904 5.288 14.712C5.09667 14.52 5.00067 14.2827 5 14C4.99934 13.7173 5.09534 13.48 5.288 13.288C5.48067 13.096 5.718 13 6 13H18C18.2833 13 18.521 13.096 18.713 13.288C18.905 13.48 19.0007 13.7173 19 14C18.9993 14.2827 18.9033 14.5203 18.712 14.713C18.5207 14.9057 18.2833 15.0013 18 15H6ZM2 7C1.71667 7 1.47934 6.904 1.288 6.712C1.09667 6.52 1.00067 6.28267 1 6C0.999337 5.71733 1.09534 5.48 1.288 5.288C1.48067 5.096 1.718 5 2 5C2.282 5 2.51967 5.096 2.713 5.288C2.90634 5.48 3.002 5.71733 3 6C2.998 6.28267 2.902 6.52033 2.712 6.713C2.522 6.90566 2.28467 7.00133 2 7ZM2 11C1.71667 11 1.47934 10.904 1.288 10.712C1.09667 10.52 1.00067 10.2827 1 9.99999C0.999337 9.71733 1.09534 9.47999 1.288 9.28799C1.48067 9.09599 1.718 8.99999 2 8.99999C2.282 8.99999 2.51967 9.09599 2.713 9.28799C2.90634 9.47999 3.002 9.71733 3 9.99999C2.998 10.2827 2.902 10.5203 2.712 10.713C2.522 10.9057 2.28467 11.0013 2 11ZM2 15C1.71667 15 1.47934 14.904 1.288 14.712C1.09667 14.52 1.00067 14.2827 1 14C0.999337 13.7173 1.09534 13.48 1.288 13.288C1.48067 13.096 1.718 13 2 13C2.282 13 2.51967 13.096 2.713 13.288C2.90634 13.48 3.002 13.7173 3 14C2.998 14.2827 2.902 14.5203 2.712 14.713C2.522 14.9057 2.28467 15.0013 2 15Z" fill="#3333E8" />
            </svg>
            <span class="text-[#3333E8]">Словарь к уроку</span>
        </Button>

        <div class="flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-6">

            <!-- Left side -->
            <div class="w-full lg:w-[302px] shrink-0 flex flex-col gap-4">
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
                <div class="flex items-center gap-2 md:gap-3">
                    <Button
                        variant="outlined"
                        class="bg-white border-[#e0e0eb] w-full h-12 md:h-14 p-0 flex items-center gap-2 md:gap-3"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.707 5.29295C11.3165 4.90243 10.6835 4.90243 10.293 5.29296L4.29297 11.293C3.90245 11.6835 3.90245 12.3165 4.29297 12.707L10.293 18.707C10.6835 19.0975 11.3165 19.0975 11.707 18.707C12.0976 18.3165 12.0976 17.6835 11.707 17.293L7.41406 13L19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11L7.41406 11L11.707 6.70702C12.0976 6.31649 12.0976 5.68348 11.707 5.29295Z" fill="#8F8FA3" />
                        </svg>
                        <span class="text-base leading-[130%] text-black">Предыдущий урок</span>
                    </Button>
                    <Button
                        severity="info"
                        class="bg-[#3333e8] border-[#3333e8] w-full h-12 md:h-14 p-0 flex items-center gap-2 md:gap-3"
                    >
                        <span class="text-base leading-[130%] text-white">Следующий урок</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.293 18.707C12.6835 19.0976 13.3165 19.0976 13.707 18.707L19.707 12.707C20.0976 12.3165 20.0976 11.6835 19.707 11.293L13.707 5.29298C13.3165 4.90246 12.6835 4.90246 12.293 5.29298C11.9024 5.68351 11.9024 6.31652 12.293 6.70705L16.5859 11L5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13L16.5859 13L12.293 17.293C11.9024 17.6835 11.9024 18.3165 12.293 18.707Z" fill="white" />
                        </svg>
                    </Button>
                </div>
            </div>

            <!-- Right side -->
            <div
                class="w-full xl:w-[336px] h-full shrink-0 hidden xl:block items-center justify-center fixed xl:static z-[5] start-0 top-0 bg-black/60 xl:bg-transparent"
                :class="{
                    '!flex': rightSideOpen
                }"
            >
                <div class="max-w-[343px] xl:max-w-full w-[calc(100%_-_32px)] xl:w-full border bg-white border-[#e0e0eb] rounded-2xl p-6 flex flex-col gap-6">
                    <div>
                        <div class="flex items-center justify-between mb-3">
                            <h3 class="text-xl leading-[120%]">Словарь</h3>
                            <button @click="rightSideOpen = false" class="w-8 h-8 rounded-full flex items-center justify-center bg-[#EFEFF5]">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.9987 11.1654L5.91536 15.2487C5.76259 15.4015 5.56814 15.4779 5.33203 15.4779C5.09592 15.4779 4.90148 15.4015 4.7487 15.2487C4.59592 15.0959 4.51953 14.9015 4.51953 14.6654C4.51953 14.4293 4.59592 14.2348 4.7487 14.082L8.83203 9.9987L4.7487 5.91536C4.59592 5.76259 4.51953 5.56814 4.51953 5.33203C4.51953 5.09592 4.59592 4.90148 4.7487 4.7487C4.90148 4.59592 5.09592 4.51953 5.33203 4.51953C5.56814 4.51953 5.76259 4.59592 5.91536 4.7487L9.9987 8.83203L14.082 4.7487C14.2348 4.59592 14.4293 4.51953 14.6654 4.51953C14.9015 4.51953 15.0959 4.59592 15.2487 4.7487C15.4015 4.90148 15.4779 5.09592 15.4779 5.33203C15.4779 5.56814 15.4015 5.76259 15.2487 5.91536L11.1654 9.9987L15.2487 14.082C15.4015 14.2348 15.4779 14.4293 15.4779 14.6654C15.4779 14.9015 15.4015 15.0959 15.2487 15.2487C15.0959 15.4015 14.9015 15.4779 14.6654 15.4779C14.4293 15.4779 14.2348 15.4015 14.082 15.2487L9.9987 11.1654Z" fill="#8F8FA3" />
                                </svg>
                            </button>
                        </div>
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

        </div>
    </NuxtLayout>
</template>