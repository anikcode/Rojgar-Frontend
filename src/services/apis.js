import axios from "axios";
import config from "../config";
import showError from "../components/showError";
export function GetDetails() {
  return axios
    .get(`${config.apiBaseUrl}/opt-in/`)
    .then((response) => {
      const responseBody = response.data;
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
        console.error("Resource not found h bhaii:", error);
      } else {
        console.error("An error occurred:", error);
      }
    });
}

export function submitDetails(name, email, phone, password, confirmPassword) {
  const body = {
    name,
    email,
    phone,
    password,
    confirmPassword,
  };
  return axios
    .post(`${config.apiBaseUrl}/opt-in/register`, body)
    .then((response) => {
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
        console.error("Resource not found h bhaii:", error);
      } else {
        console.error("An error occurred:", error);
      }
    });
}

export async function loginUser(email, password) {
  const body = {
    email,
    password,
  };

  try {
    const response = await axios.post(
      `${config.apiBaseUrl}/opt-in/login`,
      body
    );

    if (response.data.message === "success") {
      return response;
    }

    const err = response.data.errorMessage;
    console.log(response.data.errorMessage, "errrrrrr");
    throw err;
  } catch (err) {
    showError(err);
    throw err;
  }
}

export async function saveProfileDetails(
  dob,
  name,
  gender,
  careerBreak,
  address,
  isEdit = "",
  userId
) {
  const body = { dob, name, gender, careerBreak, address, isEdit, userId };
  try {
    const response = await axios.post(
      `${config.apiBaseUrl}/opt-in/save-profile-details`,
      body
    );
    if (response.data.message == "success") {
      return response;
    }
    const err = response.data.errorMessage;
    throw err;
  } catch (err) {
    showError(err);
    throw err;
  }
}

export async function getProfileDetails(authToken) {
  const headers = {
    authorization: authToken,
  };
  try {
    const response = await axios.get(
      `${config.apiBaseUrl}/opt-in/get-profile-details`,
      {
        headers,
      }
    );
    if (response.data.message == "success") {
      // console.log(response.data.response, "response.data");
      return response.data.response;
    }
    const err = response.data.errorMessage;
    throw err;
  } catch (err) {
    showError(err);
    throw err;
  }
}

export async function saveEmploymentDetails(
  id,
  company,
  employmentType,
  totalExperience,
  name,
  designation,
  joiningDate,
  workedTill,
  jobDescription,
  isEdit
) {
  const body = {
    id,
    company,
    employmentType,
    totalExperience,
    name,
    designation,
    joiningDate,
    workedTill,
    jobDescription,
    isEdit,
  };
  try {
    const response = await axios.post(
      `${config.apiBaseUrl}/opt-in/save-career-details`,
      body
    );
    if (response.data.message == "success") {
      return response;
    }
    const err = response.data.errorMessage;
    throw err;
  } catch (err) {
    showError(err);
    throw err;
  }
}

export async function getCareerDetails(authToken) {
  const headers = {
    authorization: authToken,
  };
  try {
    const response = await axios.get(
      `${config.apiBaseUrl}/opt-in/get-career-details`,
      {
        headers,
      }
    );
    if (response.data.message == "success") {
      return response.data.response;
    }
    const err = response.data.errorMessage;
    throw err;
  } catch (err) {
    showError(err);
    throw err;
  }
}

export async function deleteEmploymentDetails(id) {
  const body = { id };
  try {
    const response = await axios.post(
      `${config.apiBaseUrl}/opt-in/delete-career-details`,
      body
    );
    if (response.data.message == "success") {
      return response;
    }
    const err = response.data.errorMessage;
    throw err;
  } catch (err) {
    showError(err);
    throw err;
  }
}

export async function deleteProjectDetails(id) {
  const body = { id };
  try {
    const response = await axios.post(
      `${config.apiBaseUrl}/opt-in/delete-project-details`,
      body
    );
    if (response.data.message == "success") {
      return response;
    }
    const err = response.data.errorMessage;
    throw err;
  } catch (err) {
    showError(err);
    throw err;
  }
}

export async function getProjectDetails(authToken) {
  const headers = {
    authorization: authToken,
  };
  try {
    const response = await axios.get(
      `${config.apiBaseUrl}/opt-in/get-project-details`,
      {
        headers,
      }
    );
    if (response.data.message == "success") {
      return response.data.response;
    }
    const err = response.data.errorMessage;
    throw err;
  } catch (err) {
    showError(err);
    throw err;
  }
}

export async function saveProjectDetails(
  id,
  title,
  description,
  joiningDate,
  workedTill,
  isEdit
) {
  const body = {
    id,
    title,
    description,
    joiningDate,
    workedTill,
    isEdit,
  };
  try {
    const response = await axios.post(
      `${config.apiBaseUrl}/opt-in/save-project-details`,
      body
    );
    if (response.data.message == "success") {
      return response;
    }
    const err = response.data.errorMessage;
    throw err;
  } catch (err) {
    showError(err);
    throw err;
  }
}

export async function saveEducationDetails(
  id,
  schoolName,
  degreeName,
  joiningDate,
  workedTill,
  grade,
  description,
  isEdit
) {
  const body = {
    id,
    schoolName,
    degreeName,
    joiningDate,
    workedTill,
    grade,
    description,
    isEdit,
  };
  try {
    const response = await axios.post(
      `${config.apiBaseUrl}/opt-in/save-education-details`,
      body
    );
    if (response.data.message == "success") {
      return response;
    }
    const err = response.data.errorMessage;
    throw err;
  } catch (err) {
    showError(err);
    throw err;
  }
}

export async function getEducationDetails(authToken) {
  const headers = {
    authorization: authToken,
  };
  try {
    const response = await axios.get(
      `${config.apiBaseUrl}/opt-in/get-education-details`,
      {
        headers,
      }
    );
    if (response.data.message == "success") {
      return response.data.response;
    }
    const err = response.data.errorMessage;
    throw err;
  } catch (err) {
    showError(err);
    throw err;
  }
}

export async function deleteEducationDetails(id) {
  const body = { id };
  try {
    const response = await axios.post(
      `${config.apiBaseUrl}/opt-in/delete-education-details`,
      body
    );
    if (response.data.message == "success") {
      return response;
    }
    const err = response.data.errorMessage;
    throw err;
  } catch (err) {
    showError(err);
    throw err;
  }
}
