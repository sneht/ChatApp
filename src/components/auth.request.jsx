import { ENDPOINT } from "../helper";
import { post, patch, put } from "./web.request";

// Login Api
export const loginhandle = (body) => {
  return post(`${ENDPOINT}api/v1/user/signin`, body);
};
// Register Api
export const registerHandle = (body) => {
  return post(`${ENDPOINT}api/v1/user/signup`, body);
};
// Show User List
export const getUsersList = (body) => {
  return post(`${ENDPOINT}api/v1/user/list`, body);
};
// Show Group List
export const groupList = (body) => {
  return post(`${ENDPOINT}api/v1/group/list`, body);
};
// Check Password
export const checkPassword = (body, id) => {
  return post(`${ENDPOINT}api/v1/user/checkPassword/${id}`, body);
};
// Change Password
export const changePassword = (body, id) => {
  return post(`${ENDPOINT}api/v1/user/changePassword/${id}`, body);
};
// Search Api in Message Pane
export const searchUser = (body) => {
  return post(`${ENDPOINT}api/v1/user/search`, body);
};
// Update User without Image Api on setting button
export const updateUser = (body, id) => {
  return patch(`${ENDPOINT}api/v1/user/${id}`, body);
};
// Update user with Img
export const updateUserImg = (body, id) => {
  return put(`${ENDPOINT}api/v1/user/${id}`, body);
};
// Create Group Api
export const createGroup = (body) => {
  return post(`${ENDPOINT}api/v1/group/create`, body);
};
// Update Group without Image
export const editGroupdetails = (body, currentGroupId) => {
  return patch(`${ENDPOINT}api/v1/group/${currentGroupId}`, body);
};
// Update group with image
export const editGroupdetailsImage = (body, currentGroupId) => {
  return put(`${ENDPOINT}api/v1/group/${currentGroupId}`, body);
};
