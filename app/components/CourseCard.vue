<script setup lang="ts">

import PLine from '@/components/ui/PLine.vue'

</script>

<template>
    <div class="flex flex-col gap-3">
        <div class="h-[300px] w-full rounded-2xl overflow-hidden relative z-[1] flex items-end border border-solid border-[rgba(24,24,27,0.05)]">
            <img src="~/assets/images/course-card-1.png" alt="" class="absolute z-[-1] left-0 top-0 w-full h-full object-contain">
            <div class="w-full backdrop-blur-sm bg-gr pt-5 px-6 pb-6 text-[28px] font-semibold leading-[130%] text-white">Разговорный тренажёр</div>
        </div>
        <NuxtLink to="/courses/1" class="flex items-start gap-4 p-5 bg-white border border-[#18181b]/10 rounded-[20px]">
            <div class="shrink-0 w-16 h-16 flex items-center justify-center rounded-[10px] bg-[#ffe5f7] border border-[18181b]/[0.5]">
                <img src="~/assets/images/bag-card.svg" alt="" class="mix-blend-luminosity">
            </div>
            <div class="w-full flex flex-col gap-[3px]">
                <div class="flex items-center">
                    <span class="font-bold text-lg leading-[130%] text-[#2c2c2c] uppercase">Школьный курс</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.52686 4.53165C6.32957 4.28341 6.23399 3.96946 6.25949 3.65339C6.28499 3.33732 6.42965 3.04275 6.66419 2.82935C6.89873 2.61595 7.20561 2.49965 7.52268 2.50403C7.83974 2.5084 8.1433 2.63311 8.37186 2.8529L8.47811 2.96915L13.4781 9.21915C13.6384 9.41976 13.7331 9.66489 13.7492 9.92119C13.7653 10.1775 13.7021 10.4325 13.5681 10.6516L13.4781 10.7816L8.47811 17.0316C8.27978 17.2809 7.99378 17.445 7.67852 17.4905C7.36327 17.536 7.04253 17.4594 6.78183 17.2764C6.52113 17.0934 6.34012 16.8178 6.27578 16.5058C6.21143 16.1939 6.2686 15.8691 6.43561 15.5979L6.52561 15.4691L10.9019 10.0004L6.52686 4.53165Z" fill="#C4C4D4" />
                    </svg>
                </div>
                <div class="font-medium text-sm leading-[130%] text-[#778]">Грамматика</div>
                <p class="font-normal text-xs leading-[130%] text-[#8f8fa3]">42 урока</p>
            </div>
        </NuxtLink>
        <NuxtLink to="/courses/2" class="flex items-start gap-4 p-5 bg-white border border-[#18181b]/10 rounded-[20px]">
            <div class="shrink-0 w-16 h-16 flex items-center justify-center rounded-[10px] bg-[#ffe5f7] border border-[18181b]/[0.5]">
                <img src="~/assets/images/air-card.svg" alt="" class="mix-blend-luminosity">
            </div>
            <div class="w-full flex flex-col gap-[3px]">
                <div class="flex items-center">
                    <span class="font-bold text-lg leading-[130%] text-[#2c2c2c] uppercase">ВЗРОСЛЫЙ КУРС</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.52686 4.53165C6.32957 4.28341 6.23399 3.96946 6.25949 3.65339C6.28499 3.33732 6.42965 3.04275 6.66419 2.82935C6.89873 2.61595 7.20561 2.49965 7.52268 2.50403C7.83974 2.5084 8.1433 2.63311 8.37186 2.8529L8.47811 2.96915L13.4781 9.21915C13.6384 9.41976 13.7331 9.66489 13.7492 9.92119C13.7653 10.1775 13.7021 10.4325 13.5681 10.6516L13.4781 10.7816L8.47811 17.0316C8.27978 17.2809 7.99378 17.445 7.67852 17.4905C7.36327 17.536 7.04253 17.4594 6.78183 17.2764C6.52113 17.0934 6.34012 16.8178 6.27578 16.5058C6.21143 16.1939 6.2686 15.8691 6.43561 15.5979L6.52561 15.4691L10.9019 10.0004L6.52686 4.53165Z" fill="#C4C4D4" />
                    </svg>
                </div>
                <div class="font-medium text-sm leading-[130%] text-[#778]">Грамматика</div>
                <PLine :value="30" class="my-[5px]"/>
                <p class="font-normal text-xs leading-[130%] text-[#8f8fa3]">2 из 37 уроков пройдено</p>
            </div>
        </NuxtLink>
    </div>
</template>