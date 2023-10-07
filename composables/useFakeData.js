export const useFakeData = () => {
  return useState('fakeData', () => [
    {
      name: "יוסי לוי",
      start_point: "תל אביב",
      available_seats: 2,
      type: "נהג",
      phone: "123-456-7890",
      whatsapp: "https://wa.me/1234567890",
    },
    {
      name: "שירה כהן",
      start_point: "חיפה",
      available_seats: 3,
      type: "נוסע",
      phone: "987-654-3210",
      whatsapp: "https://wa.me/9876543210",
    },
    {
      name: "אלון כהן",
      start_point: "ירושלים",
      available_seats: 1,
      type: "נהג",
      phone: "555-123-4567",
      whatsapp: "https://wa.me/5551234567",
    },
    {
      name: "דנה לוי",
      start_point: "נתניה",
      available_seats: 4,
      type: "נוסע",
      phone: "777-888-9999",
      whatsapp: "https://wa.me/7778889999",
    },
    {
      name: "אהרון כהן",
      start_point: "אשדוד",
      available_seats: 2,
      type: "נהג",
      phone: "111-222-3333",
      whatsapp: "https://wa.me/1112223333",
    },
    {
      name: "רחל לוי",
      start_point: "באר שבע",
      available_seats: 3,
      type: "נוסע",
      phone: "444-555-6666",
      whatsapp: "https://wa.me/4445556666",
    },
  ])





}
