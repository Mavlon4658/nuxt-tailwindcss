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
</script>

<template>
    <NuxtLayout
        name="lesson"
        title="Профиль"
    >
        <div class="flex items-start gap-6">
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

            <div class="w-full border border-solid border-[rgba(24,24,27,0.1)] bg-white p-8 rounded-[20px] flex flex-col items-start gap-8">
                <h2 class="text-[28px] font-semibold leading-[120%] text-black">Ваш профиль</h2>
                <div>
                    <div class="text-xl font-semibold leading-[130%] text-black mb-3">Фото профиля</div>
                    <div class="flex items-center gap-3">
                        <div class="w-14 h-14 bg-orange-gr shrink-0 flex items-center justify-center rounded-2xl overflow-hidden font-semibold text-2xl leading-[120%] tracking-[-0.01em] text-center text-white">Д</div>
                        <Button severity="secondary" variant="outlined" class="h-14 px-4 flex items-center gap-2 rounded-2xl">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 12.998H13V17.998C13 18.2632 12.8946 18.5176 12.7071 18.7051C12.5196 18.8926 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8926 11.2929 18.7051C11.1054 18.5176 11 18.2632 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8926 5.29289 12.7051C5.10536 12.5176 5 12.2632 5 11.998C5 11.7328 5.10536 11.4784 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.998C11 5.73278 11.1054 5.47843 11.2929 5.29089C11.4804 5.10336 11.7348 4.998 12 4.998C12.2652 4.998 12.5196 5.10336 12.7071 5.29089C12.8946 5.47843 13 5.73278 13 5.998V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4784 19 11.7328 19 11.998C19 12.2632 18.8946 12.5176 18.7071 12.7051C18.5196 12.8926 18.2652 12.998 18 12.998Z" fill="black" />
                            </svg>
                            <span class="!text-black text-base font-medium">Добавить</span>
                        </Button>
                    </div>
                </div>
                <div class="flex flex-col gap-4 w-full max-w-[334px]">
                    <IftaLabel class="w-full">
                        <InputText
                            id="username"
                            variant="filled"
                            placeholder="Плейсхолдер"
                            class="w-full !bg-[#f6f6f9] border-[0.87px] border-[#e0e0eb] text-black text-base font-medium"
                        />
                        <label for="username" class="block !text-[#8f8fa3] text-xs leading-[130%] !font-medium">Форма для ввода</label>
                    </IftaLabel>
                    <IftaLabel class="w-full">
                        <InputText
                            id="username2"
                            variant="filled"
                            placeholder="Плейсхолдер"
                            class="w-full !bg-[#f6f6f9] border-[0.87px] border-[#e0e0eb] text-black text-base font-medium"
                        />
                        <label for="username2" class="block !text-[#8f8fa3] text-xs leading-[130%] !font-medium">Форма для ввода</label>
                    </IftaLabel>
                </div>
                <div class="flex items-center justify-between w-full">
                    <div class="flex flex-col gap-2">
                        <div class="text-xl font-semibold leading-[130%] text-black">Название параметра</div>
                        <p class="text-base font-normal leading-[130%] text-black">Значение параметра</p>
                    </div>
                    <Button label="Кнопка обычная" severity="secondary" variant="outlined" class="h-14 rounded-2xl px-6 border-[#d1d1e0] !text-black"/>
                </div>
                <div class="flex items-center justify-between w-full">
                    <div class="flex flex-col gap-2">
                        <div class="text-xl font-semibold leading-[130%] text-black">Название параметра</div>
                        <p class="text-base font-normal leading-[130%] text-black">Значение параметра</p>
                    </div>
                    <Button label="Кнопка красная" severity="danger" variant="outlined" class="h-14 rounded-2xl px-6 border-[#d1d1e0]"/>
                </div>
                <Button label="Зеленая кнопка" class="h-14 rounded-2xl px-6 text-base text-white" />
            </div>
        </div>
    </NuxtLayout>
</template>