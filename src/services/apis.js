import axios from "axios";
import config from "../config";
import { useDispatch, useSelector } from "react-redux";
import ErrorModal from "../components/ErrorModal";
import showError from "../components/showError";
export function GetDetails() {
  return axios
    .get(`${config.apiBaseUrl}/opt-in/`)
    .then((response) => {
      // Handle successful response
      const responseBody = response.data;
      console.log("till here", responseBody);
      if (responseBody.message === "success") {
        return responseBody;
      }
      const err = responseBody.errorMessage;
      throw err;
    })
    .catch((error) => {
      console.log("catch error", error);
      showError(error);
      if (error?.response?.status === 404) {
        // Handle 404 error

        console.error("Resource not found h bhaii:", error);
      } else {
        // Handle other errors
        console.error("An error occurred:", error);
      }
    });
}
