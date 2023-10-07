<script setup>

// const headline = 'קדימה צא! חפשו את הטרמפ שלכם וסייעו לחברים למצוא את הטרמפ המתאים להם'
const headline = 'חפש את הנסיעה שלך או, סייע לחבר למצוא את הטרמפ שלו'
// const headline = 'מצא את הנסיעה שלך או, סייע לחבר למצוא את הטרמפ שלו'
const { subtitle } = defineProps(['subtitle'])

</script>

<template>
  <div class="text-right mt-5">
    <h1
      class="mb-4 md:w-[70%] text-right md:text-center md:m-auto text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl  dark:text-white">
      {{ headline }}
    </h1>
    <p class="text-balance mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
      {{ subtitle }}
    </p>

  </div>
</template>