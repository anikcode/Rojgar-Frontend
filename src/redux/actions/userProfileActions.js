import { USER_PROFILE } from "./cakeTypes";

export const userProfile = (editUser) => {
  return {
    type: USER_PROFILE,
    payload: {
      editUser: editUser,
    },
  };
};
