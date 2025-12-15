<script setup lang="ts">
interface Props {
    value?: boolean,
    text?: string
}

const props = withDefaults(defineProps<Props>(), {
    value: false,
    text: '',
})

const emit = defineEmits<{
    (e: 'update:value', value: boolean): void
}>()
</script>

<template>
    <div class="flex items-center gap-3">
        <p
            v-if="props.text != ''"
            class="text-lg leading-[130%] font-medium"
        >{{ props.text }}</p>
        <button
            @click="emit('update:value', !value)"
            class="w-[52px] h-8 rounded-full bg-[#bababa] relative transition-[0.2s] duration-[ease-in-out] ease-[all]"
            :class="{
                '!bg-[#7575f0]': props.value
            }"
        >
            <span
                class="w-6 h-6 rounded-full bg-white absolute top-1 start-1 transition-[0.2s] duration-[ease-in-out] ease-[all]"
                :class="{
                    '!start-6': props.value
                }"
            ></span>
        </button>
    </div>
</template>