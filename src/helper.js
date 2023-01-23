export const ENDPOINT = "https://chatappbackend.cyclic.app/";
export const emailRegex = /\S+@\S+\.\S+/;
export const unameRegex = /^[a-z ,.'-]+$/i;
export const data = {
  where: {
    isActive: true,
  },
  pagination: {
    sortBy: "createdAt",
    descending: true,
    rowsPerPage: 10,
    page: 1,
  },
};
