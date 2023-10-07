<script setup>
//const fakeData = useFakeData()

const { data: people } = await useFetch('/api/all').catch(console.error)

// const has_cars_count = people.records.length


// definePageMeta({
//   colorMode: 'light'
// })



</script>

<template>
  <!-- Headline -->
  <Headline subtitle headline />
  <!-- Filter Links-->
  <!-- <FIlterButtons /> -->


  <!-- <Stats :totalDrivers="people.records.length" /> -->

  <!-- <UAlert icon="i-heroicons-bell" title="טיפ! ניתן לפנות ישירות בווטסאפ למציע טרמפ במקום לטלפן" color="violet"
    class="mb-4 opacity-75" variant="subtle" /> -->

  <!-- <Locations /> -->

  <!-- Main List -->
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 xl:grid-cols-4 xl:gap-4 mb-4">
    <div v-for="p in people.records">
      <Card :person="p" :key="p.phone" />
      <!-- <PersonCard :person="p" :key="p.name" /> -->
    </div>
  </div>
</template>
