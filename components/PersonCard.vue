<script setup>

const { person } = defineProps(['person'])

</script>

<template>
  <UCard>
    <template #header>
      <div class="">
        <h2 class="title">{{ person.name }}</h2>
        <p>{{ person.start_point }}</p>
        <p>Aviliable Seats: {{ person.available_seats }}</p>
        <p>Tags: <UBadge variant="outline">{{ person.type }}</UBadge>
        </p>
        <UButton icon="i-heroicons-phone" to="/" target="_blank"></UButton>
      </div>
    </template>
    <UButton icon="i-heroicons-book-open" to="/" target="_blank">Open Nuxt UI Documentation</UButton>
  </UCard>
</template>




