import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

// ✅ Get menu items
export const getMenuItems = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/menu`);
    return response.data;
  } catch (error) {
    console.error("Error fetching menu items:", error);
    return [];
  }
};

// ✅ Place order
export const placeOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/order`, orderData);
    return response.data;
  } catch (error) {
    console.error("Error placing order:", error);
    return null;
  }
};
