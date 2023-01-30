import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import Avatar from "react-avatar";
import {
  createGroup,
  editGroupdetails,
  editGroupdetailsImage,
} from "../../service/auth.request";
import { useContext } from "react";
import { GroupList } from "../../pages/Home";
import { GroupDetails } from "../../App";

const CreateGroupModal = () => {
  const details = useContext(GroupList);
  const name = useContext(GroupDetails);
  const [loader, setLoader] = useState(false);
  const [groupNameError, setGroupNameError] = useState("");
  const [groupImg, setGroupImg] = useState();
  const [groupImgError, setGroupImgError] = useState("");
  const [checkedUserError, setCheckedUserError] = useState("");
  const [imageSizeError, setImageSizeError] = useState("");
  const [groupDescError, setGroupDescError] = useState();
  let admin = JSON.parse(localStorage.getItem("userData"));

  const validation = () => {
    let isValid = true;
    let imageSize = 5242880;
    if (!name.groupName) {
      setGroupNameError("Please enter Group Name");
      isValid = false;
    } else {
      setGroupNameError("");
    }
    if (!name.groupImage) {
      setGroupImgError("Please select Image");
      isValid = false;
    } else if (groupImg) {
      if (groupImg.size > imageSize) {
        setImageSizeError("Please Select Image Under 5 MB");
        isValid = false;
      }
    } else {
      setImageSizeError("");
      setGroupImgError("");
    }
    if (name.checkedUser.length < 1) {
      setCheckedUserError("Please select Users");
      isValid = false;
    } else {
      setCheckedUserError("");
    }
    if (!name.groupDesc) {
      setGroupDescError("Please enter Description");
      isValid = false;
    } else {
      setGroupDescError("");
    }
    return isValid;
  };

  const groupCreateButton = async () => {
    try {
      if (validation()) {
        setLoader(true);
        let formData = new FormData();
        formData.append("groupName", name.groupName);
        formData.append("groupAdmin", admin.id);
        formData.append(
          "groupUser",
          JSON.stringify(
            name.checkedUser.map((item, index) => {
              return {
                userId: item,
              };
            })
          )
        );
        formData.append("groupImg", groupImg);
        formData.append("groupDescription", name.groupDesc);
        const response = await createGroup(formData);
        if (response) {
          setLoader(false);
          if (response.success) {
            closeHandle();
            details.getGroupList();
            name.setCheckedUser([]);
          } else {
            console.log(response);
          }
        } else {
          setLoader(false);
        }
      }
    } catch {
      console.error("Somthing went wrong");
    }
  };

  const closeHandle = () => {
    name.setCloseModal(false);
    name.setGroupName("");
    name.setCheckedUser([]);
    name.setGroupDesc("");
    name.setGroupImage("");
    name.setButtonCheck("");
  };

  const groupUserHandle = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      name.setCheckedUser([...name.checkedUser, value]);
    } else {
      name.setCheckedUser(name.checkedUser.filter((e) => e !== value));
    }
  };

  const EditGroupdetailsHandle = async () => {
    try {
      if (validation()) {
        if (groupImg) {
          setLoader(true);
          let formData = new FormData();
          formData.append("groupImg", groupImg);
          formData.append("groupName", name.groupName);
          formData.append(
            "groupUser",
            JSON.stringify(
              name.checkedUser.map((item, index) => {
                return {
                  userId: item,
                };
              })
            )
          );
          formData.append("groupDescription", name.groupDesc);
          const response = await editGroupdetailsImage(
            formData,
            name.currentGroupDetails._id
          );
          if (response.success) {
            setLoader(false);
            name.setCurrentGroupDetails(response.data);
            name.setGroupImage("");
            closeHandle();
            details.getGroupList();
          } else {
            setLoader(false);
            console.log(response);
          }
        } else {
          setLoader(true);
          let body = {
            groupUser: name.checkedUser.map((item, index) => {
              return {
                userId: item,
              };
            }),

            groupDescription: name.groupDesc,
            groupAdmin: admin.id,
            groupName: name.groupName,
            isActive: true,
          };
          const response = await editGroupdetails(
            body,
            name.currentGroupDetails._id
          );
          if (response.success) {
            name.setCurrentGroupDetails(response.data);
            name.setGroupName("");
            setLoader(false);
            closeHandle();
            details.getGroupList();
            setGroupImg();
            name.setGroupDesc("");
          } else {
            setLoader(false);
            console.log(response.message);
          }
        }
      }
    } catch {
      console.error("Somthing went wrong");
    }
  };

  return (
    <div
      className="modal fade d-block"
      id="addgroup-exampleModal"
      tabIndex={-1}
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content modal-header-colored border-0">
          <div className="modal-header">
            <h5
              className="modal-title text-white fs-16"
              id="addgroup-exampleModalLabel"
            >
              {name.buttonCheck ? "Create New Group" : "Edit Group"}
            </h5>
          </div>

          <div className="modal-body p-4">
            <div className="hiddenFileInputContainter">
              <label className="form-label">
                Group Image:
                <div className="hover-container">
                  <img
                    className="fileDownload"
                    src={
                      name.groupImage
                        ? name.groupImage
                        : "/images/Default-Image-removebg-preview.png"
                    }
                    alt=""
                  />
                  <input
                    type="file"
                    name="fileUp"
                    className="hidden"
                    accept="image/jpg/png"
                    onChange={(e) => [
                      setGroupImg(e.target.files[0]),
                      name.setGroupImage(
                        URL.createObjectURL(e.target.files[0])
                      ),
                      setGroupImgError(""),
                      setImageSizeError(""),
                    ]}
                  />
                </div>
              </label>
            </div>
            {imageSizeError ? (
              <div className="imgerror">{imageSizeError}</div>
            ) : (
              ""
            )}
            {groupImgError ? <div className="error">{groupImgError}</div> : ""}
            <form>
              <div className="mb-4">
                <label htmlFor="addgroupname-input" className="form-label">
                  Group Name
                </label>
                <input
                  id="addgroupname-input"
                  type="text"
                  className="form-control"
                  placeholder="Enter Group Name"
                  defaultValue={name.groupName}
                  value={name.groupName}
                  onChange={(e) => [
                    name.setGroupName(e.target.value),
                    setGroupNameError(""),
                  ]}
                />
                {groupNameError ? (
                  <div className="error">{groupNameError}</div>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-4">
                <label className="form-label">Group Members</label>
                <div className="userListDiv" data-simplebar>
                  <ul className="list-unstyled  contact-list">
                    {name.users.map((item, index) => {
                      return (
                        <div key={index}>
                          <label
                            className={
                              name.checkedUser.includes(item._id)
                                ? "active"
                                : ""
                            }
                          >
                            <li id="UserList" data-name="favorite">
                              <div className="d-flex align-items-center">
                                <div className="chat-user-img online align-self-center gap-3 me-2 ms-0 d-flex">
                                  <input
                                    type="checkbox"
                                    className="userCheckBox"
                                    value={item._id}
                                    defaultChecked={name.checkedUser.includes(
                                      item._id
                                    )}
                                    onChange={(e) => [
                                      groupUserHandle(e),
                                      setCheckedUserError(""),
                                    ]}
                                  />
                                  <div>
                                    {item.userImg.length > 1 ? (
                                      <img
                                        src={item.userImg}
                                        className="rounded-circle avatar-xs"
                                        alt=""
                                      />
                                    ) : (
                                      <Avatar
                                        name={item.username[0]}
                                        size="30"
                                        textSizeRatio={1.75}
                                        round="20px"
                                      />
                                    )}
                                  </div>
                                </div>
                                <div className="overflow-hidden me-2">
                                  <p className="text-truncate chat-username mb-0">
                                    {item.username}
                                  </p>
                                </div>
                              </div>
                            </li>
                          </label>
                        </div>
                      );
                    })}
                  </ul>
                </div>
                {checkedUserError ? (
                  <div className="error">{checkedUserError}</div>
                ) : (
                  ""
                )}
              </div>

              <div className="mb-3">
                <label
                  htmlFor="addgroupdescription-input"
                  className="form-label"
                >
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="addgroupdescription-input"
                  placeholder="Enter Description"
                  defaultValue={name.groupDesc}
                  onChange={(e) => [
                    name.setGroupDesc(e.target.value),
                    setGroupDescError(""),
                  ]}
                  value={name.groupDesc}
                />
                {groupDescError ? (
                  <div className="error">{groupDescError}</div>
                ) : (
                  ""
                )}
              </div>
            </form>
          </div>
          <div className="modal-footer border-top-dashed">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => closeHandle()}
            >
              <RiCloseLine /> Close
            </button>
            {name.buttonCheck ? (
              <button
                type="button"
                className="btn btn-primary groupCreateButton"
                onClick={() => groupCreateButton()}
              >
                {loader ? (
                  <div className="spinner-border-button" role="status"></div>
                ) : (
                  "Create Group"
                )}
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary groupCreateButton"
                onClick={() => EditGroupdetailsHandle()}
              >
                {loader ? (
                  <div className="spinner-border-button" role="status"></div>
                ) : (
                  "Update Group"
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupModal;
