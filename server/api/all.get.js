export default defineEventHandler(async (event) => {

  const fields = ["phone", "שם מלא", "מקומות ברכב", "נקודת יציאה", "hasCar"];
  const queryString = fields.map(field => `fields${encodeURIComponent('[]')}=${encodeURIComponent(field)}`).join('&');

  /*
  1. fields [] needs to encoded
  2. options contains function and other properties
  */

  const options = {
    headers: {
      'Authorization': 'Bearer ' + process.env.AIRTABLE_TOKEN,
    },
    query: {
      view: 'all_people',
    }
  }

  try {
    const data = await $fetch(`https://api.airtable.com/v0/${process.env.TABLE_ID}/status?${queryString}&sort%5B0%5D%5Bfield%5D=hasCar&sort%5B0%5D%5Bdirection%5D=desc`, options)

    return data

  }
  catch (error) {
    console.log(error.message)

  }


  // const records = data.records.map(record => {
  //   return {
  //     id: record.id

  //   }
  // })


  // Error Object will be null
  //console.log(error.value.name, error.value.message, error.value.statusCode);


})


// const data = await $fetch(`https://api.airtable.com/v0/${process.env.TABLE_ID}/status?${queryString}`, {
//   async onRequest({ options, request, error }) {

//     // Log request
//     console.log("[***************]", request);

//   },
//   headers: {
//     'Authorization': 'Bearer ' + process.env.AIRTABLE_TOKEN,
//   },
//   query: {
//     view: 'cars',
//   }
// });