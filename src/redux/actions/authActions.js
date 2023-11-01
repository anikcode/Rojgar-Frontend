import { SET_AUTH_TOKEN } from "./cakeTypes";

export const authToken = (authToken) => {
  return {
    type: SET_AUTH_TOKEN,
    payload: {
      authToken: authToken,
    },
  };
};
