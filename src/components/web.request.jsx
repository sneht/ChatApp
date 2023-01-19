import axios from "axios";

export const post = async (url, body) => {
  return await axios
    .post(url, body)
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      } else {
        return [];
      }
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const get = async (url) => {
  return await axios
    .get(url)
    .then((res) => {
      if (res) {
        return res;
      } else {
        return [];
      }
    })
    .catch((err) => {
      return err.response;
    });
};

export const put = async (url, body) => {
  return await axios
    .put(url, body)
    .then((res) => {
      if (res) {
        return res.data;
      } else {
        return [];
      }
    })
    .catch((err) => {
      return err.response;
    });
};

export const patch = async (url, body) => {
  return await axios
    .patch(url, body)
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      } else {
        return [];
      }
    })
    .catch((err) => {
      return err.response;
    });
};
