<script setup>
const selected = ref(true)

function handleChange(e) {
  confirm('yes or now')
}

</script>

<template>
  <div class="flex mb-2 py-2	">
    <div class="flex gap-1">
      <UBadge size="md" variant="subtle">ראשון לציון</UBadge>
      <UBadge size="md" variant="subtle">חולון</UBadge>
      <UBadge size="md" variant="subtle">תל אביב</UBadge>
      <UBadge size="md" variant="subtle">ירושלים</UBadge>
      <UBadge size="md" variant="subtle">נתניה</UBadge>
    </div>
    <!-- <div class="flex-grow">

    </div> -->
  </div>
  <div class="flex justify-between py-1 mb-1">
    <p class="text-xs text-semibold self-center">בעלי רכבים</p>
    <UToggle class="self-center" on-icon="i-heroicons-check-20-solid" off-icon="i-heroicons-x-mark-20-solid"
      v-model="selected" @click="handleChange" />
  </div>
</template>