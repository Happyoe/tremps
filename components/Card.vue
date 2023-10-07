<script setup>

const { person } = defineProps(['person'])

const full_name = 'שם מלא'
const start_point = 'נקודת יציאה'
const free_seats = 'מקומות ברכב'

const whatsappUrl = "https://api.whatsapp.com/send?phone=972";


</script>

<template>
  {{ person.fields[hasCar] }}
  <!-- Card -->
  <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
    <div class="p-4 md:p-5 flex justify-between gap-x-3 max-w-sm ">
      <div>
        <p class="text-xs uppercase tracking-wide text-gray-500">
          {{ person.fields[full_name] }}
        </p>
        <div class="mt-1 flex items-center gap-x-1">

          <div class="flex max-w-small">
            <span class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </span>
            <h3
              class="truncate whitespace-normal	text-sm sm:text-md max-w-[14rem] font-medium text-gray-800 dark:text-gray-200">
              {{ person.fields[start_point] }}
            </h3>
          </div>
        </div>

        <div>
          <span class="flex items-center text-green-600">
            <!-- <svg class="inline-block w-7 h-7 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
            </svg> -->
            <span>{{ person.fields['hasCar'] === 'yes' ? 'מקומות ברכב: ' : '' }}</span>
            <span class="inline-block text-lg">
              {{ person.fields[free_seats] }}
            </span>
          </span>
        </div>
      </div>
      <div class="flex-grow"></div>
      <a :href="`${whatsappUrl}${person.fields['phone']}`" class="">
        <div
          class="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-primary-600 text-white rounded-full dark:bg-primary-900 dark:text-primary-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clip-rule="evenodd" />
          </svg>
        </div>
      </a>
    </div>

    <div
      class="py-3 px-4 md:px-5 inline-flex justify-between gap-1 items-center text-sm text-gray-600 border-t border-gray-200 hover:bg-gray-50 rounded-b-xl dark:border-gray-700 dark:text-gray-400 dark:hover:bg-slate-800">
      <div class="inline-flex gap-1">
        <UBadge :variant="person.fields['hasCar'] === 'yes' ? 'outline' : 'solid'">

          {{ person.fields['hasCar'] == 'yes' ? 'בעל רכב' : 'טרמפיסט' }}

        </UBadge>
        <!-- <UBadge variant="solid" color="cyan">טרמפיסט</UBadge> -->
        <!-- <UBadge variant="outline" color="purple">מקום אחרון</UBadge> -->
      </div>
    </div>
  </div>
  <!-- End Card -->
</template>


