// API URLs
export const API_URL = "htts://example.com/api";

// Config
export const DEFAULT_TIMEOUT = 5000;

// UI Text
export const UI_TEXT = {
  BUTTON_SUBMIT: "Submit",
  BUTTON_CANCEL: "Cancel",
  CARD_NO_IMAGE: "No image available",
};

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: "https://example.com/image1.jpg",
    discount: "",
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA",
    },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image: "https://example.com/image2.jpg",
    discount: "",
  },
];
