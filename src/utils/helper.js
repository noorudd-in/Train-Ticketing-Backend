const axios = require("axios");
const {
  SEARCH_SERVICE_URL,
  AUTH_SERVICE_URL,
  BOOK_SERVICE_URL,
} = require("../config/constants");

const checkAuthStatus = async () => {
  try {
    const authService = await axios.get(`${AUTH_SERVICE_URL}/ping`);
    if (authService?.data?.status == "up") {
      return {
        status: authService.status,
        message: "✔️ Auth service is running",
      };
    }
  } catch (error) {
    return { status: 500, message: "❌ Auth service is not running!" };
  }
};

const checkSearchStatus = async () => {
  try {
    const searchService = await axios.get(`${SEARCH_SERVICE_URL}/ping`);
    if (searchService?.data?.status == "up") {
      return {
        status: searchService.status,
        message: "✔️ Search service is running",
      };
    }
  } catch (error) {
    return { status: 500, message: "❌ Search service is not running!" };
  }
};

const checkBookStatus = async () => {
  try {
    const bookingService = await axios.get(`${BOOK_SERVICE_URL}/ping`);
    if (bookingService?.data?.status == "up") {
      return {
        status: bookingService.status,
        message: "✔️ Booking service is running",
      };
    }
  } catch (error) {
    return { status: 500, message: "❌ Booking service is not running!" };
  }
};

const checkAllServices = async () => {
  const results = await Promise.all([
    checkAuthStatus(),
    checkSearchStatus(),
    checkBookStatus(),
  ]);

  results.forEach((result) => console.log(result.message));

  if (results.every((service) => service.status === 200)) {
    console.log("✅ Great! All services are up and running.");
  } else {
    console.log("❌ One or more services are not running.");
  }
};

module.exports = checkAllServices
