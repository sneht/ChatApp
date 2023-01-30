export const ENDPOINT = "http://localhost:8080/"
// "https://chatappbackend.cyclic.app/";
export const emailRegex = /\S+@\S+\.\S+/;
export const unameRegex = /^[a-z ,.'-]+$/i;

export const userBody = (data) => {
  return {
    where: data.where ? data.where : { isActive: true },
    pagination: {
      sortBy: data.sortBy ? data.sortBy : "createdAt",
      descending: true,
      rowsPerPage: data.rowsPerPage ? data.rowsPerPage : 10,
      page: data.page ? data.page : 1,
    },
  }
};

export const groupBody = (data) => {
  return {
    where: data.where ? data.where : { isActive: true },
    pagination: {
      sortBy: data.sortBy ? data.sortBy : "createdAt",
      descending: true,
      rowsPerPage: data.rowsPerPage ? data.rowsPerPage : 10,
      page: data.page ? data.page : 1,
    },
  }
};

export const contactUserBody = (data) => {
  return {
    where: data.where ? data.where : { isActive: true },
    pagination: {
      sortBy: data.sortBy ? data.sortBy : "createdAt",
      descending: true,
      rowsPerPage: data.rowsPerPage ? data.rowsPerPage : 10,
      page: data.page ? data.page : 1,
    },
  }
};