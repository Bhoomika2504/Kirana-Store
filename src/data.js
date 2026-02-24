// src/data.js
export const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Aashirvaad Shuddh Chakki Atta",
    category: "Staples",
    price: 450,
    image: "https://www.bigbasket.com/media/uploads/p/l/126906_8-aashirvaad-atta-whole-wheat.jpg",
    inStock: true,
  },
  {
    id: 2,
    name: "Amul Taaza Milk (1L)",
    category: "Dairy",
    price: 72,
    image: "https://www.bbassets.com/media/uploads/p/l/40114416_8-amul-taaza-milk.jpg",
    inStock: true,
  },
  {
    id: 3,
    name: "Maggi 2-Minute Noodles",
    category: "Snacks",
    price: 140,
    image: "https://www.bbassets.com/media/uploads/p/l/40125873_17-maggi-2-minute-noodles-masala.jpg",
    inStock: false, // This will trigger the "Request Item" button
  },
];

export const MOCK_REQUESTS = [];

// This simulates a database save
export const saveRequest = (request) => {
  MOCK_REQUESTS.push({ ...request, id: Date.now(), status: 'Pending' });
  console.log("Request saved to local memory:", MOCK_REQUESTS);
  return true;
};