<script setup lang="ts">
import Button from 'primevue/button'
import PCheckbox from './ui/PCheckbox.vue'
import { ref } from "vue"

interface Task {
    id: number
    title: string
    done: boolean
}

interface Props {
    title?: string
    content?: string
    taskList?: Task[]
}

const props = withDefaults(defineProps<Props>(), {
    title: '',
    content: '',
    taskList: () => [],
})

const completed = ref<boolean>(false)
const isPlay = ref<boolean>(false)
</script>

<template>
    <div class="bg-white border border-[#e0e0eb] rounded-2xl">
        <div class="flex flex-col gap-8 p-8 border-b border-[#e0e0eb]">
            <h3 class="text-[28px] font-semibold leading-[120%]">
                {{ props.title }}
            </h3>
            <div class="text-base leading-[150%] font-normal">
                {{ props.content }}
            </div>
            <div class="flex flex-col gap-2">
                <div
                    v-for="(data, i) in props.taskList"
                    :key="i"
                    class="flex items-start justify-start gap-2"
                >
                    <Button severity="contrast" class="bg-[#efeff5] !w-10 !h-10 rounded-full shrink-0 p-0 flex items-center justify-center">
                        <svg v-if="isPlay" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 18.4V5.6C6 5.44087 6.06321 5.28826 6.17574 5.17574C6.28826 5.06321 6.44087 5 6.6 5H9.4C9.55913 5 9.71174 5.06321 9.82426 5.17574C9.93679 5.28826 10 5.44087 10 5.6V18.4C10 18.5591 9.93679 18.7117 9.82426 18.8243C9.71174 18.9368 9.55913 19 9.4 19H6.6C6.44087 19 6.28826 18.9368 6.17574 18.8243C6.06321 18.7117 6 18.5591 6 18.4ZM14 18.4V5.6C14 5.44087 14.0632 5.28826 14.1757 5.17574C14.2883 5.06321 14.4409 5 14.6 5H17.4C17.5591 5 17.7117 5.06321 17.8243 5.17574C17.9368 5.28826 18 5.44087 18 5.6V18.4C18 18.5591 17.9368 18.7117 17.8243 18.8243C17.7117 18.9368 17.5591 19 17.4 19H14.6C14.4409 19 14.2883 18.9368 14.1757 18.8243C14.0632 18.7117 14 18.5591 14 18.4Z" fill="#3333E8" stroke="#3333E8" stroke-width="1.5" />
                        </svg>
                        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.86172 5.2C9.71315 5.08857 9.53649 5.02072 9.35152 5.00404C9.16656 4.98736 8.98061 5.02252 8.81451 5.10557C8.6484 5.18863 8.5087 5.31629 8.41107 5.47427C8.31343 5.63225 8.26172 5.81429 8.26172 6V18C8.26172 18.1857 8.31343 18.3678 8.41107 18.5257C8.5087 18.6837 8.6484 18.8114 8.81451 18.8944C8.98061 18.9775 9.16656 19.0126 9.35152 18.996C9.53649 18.9793 9.71315 18.9114 9.86172 18.8L17.8617 12.8C17.9859 12.7069 18.0867 12.5861 18.1561 12.4472C18.2256 12.3084 18.2617 12.1552 18.2617 12C18.2617 11.8448 18.2256 11.6916 18.1561 11.5528C18.0867 11.4139 17.9859 11.2931 17.8617 11.2L9.86172 5.2Z" fill="#3333E8" />
                        </svg>
                    </Button>
                    <task-item
                        :data="data"
                        openText="Открытая плашка с избранным"
                        closeText="Закрытая плашка"
                    />
                </div>
            </div>
        </div>
        <div class="p-8">
            <p-checkbox v-model:value="completed">Выполнено</p-checkbox>
        </div>
    </div>
</template>