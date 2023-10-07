<script setup>

const { data: people } = useFetch('/api/tremps')

</script>

<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 xl:grid-cols-4 xl:gap-4 mb-4">
    <div v-for="p in people.records">
      <Card :person="p" :key="p.phone" />
      <!-- <PersonCard :person="p" :key="p.name" /> -->
    </div>
  </div>
</template>