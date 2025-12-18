<script setup lang="ts">
import PHeader from '@/components/PHeader.vue';
import PContainer from '@/components/ui/PContainer.vue'
import { useAttrs } from 'vue';

const layoutCustomProps = useAttrs()

</script>

<template>
    <PContainer>
        <div class="mb-12 flex items-center justify-between">
            <PHeader
                prevLink="#"
                :title="layoutCustomProps.title"
                subtitle="3"
            />

            <NuxtLink to="#" class="text-lg font-medium text-[#3333e8] hidden sm:flex items-center gap-3">
                <span>Продолжить с последнего места</span>
                <span class="flex items-center justify-center bg-[#3333e8]/10 w-9 h-9 rounded-[10px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.6 5.2C9.45143 5.08857 9.27477 5.02072 9.08981 5.00404C8.90484 4.98736 8.71889 5.02252 8.55279 5.10557C8.38668 5.18863 8.24698 5.31629 8.14935 5.47427C8.05171 5.63225 8 5.81429 8 6V18C8 18.1857 8.05171 18.3678 8.14935 18.5257C8.24698 18.6837 8.38668 18.8114 8.55279 18.8944C8.71889 18.9775 8.90484 19.0126 9.08981 18.996C9.27477 18.9793 9.45143 18.9114 9.6 18.8L17.6 12.8C17.7242 12.7069 17.825 12.5861 17.8944 12.4472C17.9639 12.3084 18 12.1552 18 12C18 11.8448 17.9639 11.6916 17.8944 11.5528C17.825 11.4139 17.7242 11.2931 17.6 11.2L9.6 5.2Z" fill="#3333E8" />
                    </svg>
                </span>
            </NuxtLink>
        </div>

        <slot />
    </PContainer>
</template>