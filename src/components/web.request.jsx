import axios from "axios";

export const post = async (email,password,userName) => {
    return await axios
      .post(email,password,userName)
      .then((res) => {
        if (res) {
          return res;
        } else {
          return [];
        }
      })
      .catch((err) => {
        return err.response.data;
      });
  };