import axios from "axios";
import config from "../config";
export function getDetails() {
  return axios
    .get(`${config.apiBaseUrl}/opt-in/`)
    .then((response) => {
      // Handle successful response
      const responseBody = response.message;
      if (responseBody.message === "success") {
        return responseBody;
      }
      const err = new Error("Invalid response");
      err.data = responseBody;
      throw err;
    })
    .catch((error) => {
      if (error?.response?.status === 404) {
        // Handle 404 error
        console.error("Resource not found:", error);
      } else {
        // Handle other errors
        console.error("An error occurred:", error);
      }
    });
}
