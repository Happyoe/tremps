export default defineEventHandler(async (event) => {

  const fields = ["totalFreeSeats", "totalDrivers", "totalTremps", "totalPeople"]
  const queryString = fields.map(field => `fields${encodeURIComponent('[]')}=${encodeURIComponent(field)}`).join('&');

  const options = {
    headers: {
      'Authorization': 'Bearer ' + process.env.AIRTABLE_TOKEN,
    },
  }

  try {
    const data = await $fetch(`https://api.airtable.com/v0/${process.env.TABLE_ID}/totals?${queryString}`, options)

    return data

  } catch (error) {
    console.log(error.message)

  }

})

