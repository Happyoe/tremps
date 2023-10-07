// composables/use-http.js

const fields = ["phone", "שם מלא", "מקומות ברכב", "נקודת יציאה"];
const queryString = fields.map(field => `fields${encodeURIComponent('[]')}=${encodeURIComponent(field)}`).join('&');


const opts = {
  async onRequest({ request, options }) {
    // Add your specific data here

    options.query = options.query || {};
    options.query.t = new Date();
    console.log('The Request', request)
    // options.query = { view: 'cars' }
  }
}

export default () => $fetch.create(opts)