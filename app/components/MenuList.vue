<script setup lang="ts">

interface List {
    title: string,
    to: string,
    icon: string,
    selected: boolean,
}

interface Props {
    list: List[]
}

defineProps<Props>()

</script>

<template>
    <div class="bg-white border border-[#e0e0eb] rounded-2xl p-2 flex flex-col gap-1">
        <nuxt-link
            v-for="(link, i) in list"
            :key="i"
            :to="link.to"
            class="w-full flex items-center justify-between gap-2 p-4 rounded-2xl hover:bg-[#efeff5] transition-[0.2s] duration-[ease-in-out] ease-[all]"
            :class="{
                'bg-[#efeff5]': link.selected
            }"
        >
            <span> {{ i + 1 }}. {{ link.title }}</span>
            <i :class="link.icon"></i>
        </nuxt-link>
    </div>
</template>
