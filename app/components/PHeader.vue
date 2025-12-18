<script setup lang="ts">
import Button from 'primevue/button'

interface Props {
    prevLink?: string
    title?: string
    subtitle?: string
}

const props = withDefaults(defineProps<Props>(), {
    prevLink: '#',
    title: '',
    subtitle: '',
})

</script>

<template>
    <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <nuxt-link to="/">
            <Button
                variant="outlined"
                class="shrink-0 bg-white border-[#e0e0eb] w-auto sm:w-14 h-10 sm:h-14 px-[10px] sm:p-0"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.29302C11.3165 4.90249 10.6835 4.90249 10.293 5.29302L4.29297 11.293C3.90244 11.6835 3.90244 12.3166 4.29297 12.7071L10.293 18.7071C10.6835 19.0976 11.3165 19.0976 11.707 18.7071C12.0976 18.3166 12.0976 17.6835 11.707 17.293L7.41406 13H19C19.5523 13 20 12.5523 20 12C20 11.4478 19.5523 11 19 11H7.41406L11.707 6.70708C12.0976 6.31655 12.0976 5.68354 11.707 5.29302Z" fill="#8F8FA3" />
                </svg>
                <span class="font-medium text-sm leading-[130%] text-[#8F8FA3] sm:hidden">Назад</span>
            </Button>
        </nuxt-link>
        <div class="flex items-center gap-3">
            <h2 class="text-[32px] sm:text-5xl leading-[110%] tracking-[-0.03em] font-semibold">{{ props.title }}</h2>
            <div v-if="subtitle" class="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center border border-[#d1d1e0] rounded-md sm:rounded-[10px] text-[#778] text-base sm:text-2xl leading-[110%] font-normal">{{ props.subtitle }}</div>
        </div>
    </div>
</template>