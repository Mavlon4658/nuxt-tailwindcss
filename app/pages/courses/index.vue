<script setup lang="ts">
import CourseCard from '@/components/CourseCard.vue';
</script>

<template>
  <div>
    <NuxtLayout
      name="courses"
      title="Курсы"
    >
      <div class="grid grid-cols-3 gap-6">
        <CourseCard v-for="i in 3" :key="i" />
      </div>
    </NuxtLayout>
  </div>
</template>