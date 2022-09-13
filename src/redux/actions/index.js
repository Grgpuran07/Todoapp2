export const addPersonalInfo = (datas) => {
  return {
    type: "ADDPERSONALINFO",
    payload: datas,
  };
};

export const deleteUser = (id) => {
  return {
    type: "DELETEUSER",
    payload: id,
  };
};

export const setEditUser = (editUser) => {
  return {
    type: "SETEDITUSER",
    payload: editUser,
  };
};

export const setEditUserfromclass = (id) => {
  return {
    type: "SETEDITUSERFROMCLASS",
    payload: id,
  };
};

export const updatePersonalinfo = (editedUser) => {
  return {
    type: "UPDATEUSER",
    payload: editedUser,
  };
};

export const editToggle = () => {
  return {
    type: "EDITTOGGLE",
  };
};

export const editTogglefromclass = () => {
  return {
    type: "EDITTOGGLEFROMCLASS",
  };
};

export const filterItems = (filtercriteria) => {
  return {
    type: "FILTERITEMS",
    payload: filtercriteria,
  };
};
