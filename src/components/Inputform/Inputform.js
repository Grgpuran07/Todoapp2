import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPersonalInfo,
  updatePersonalinfo,
  editToggle,
} from "../../redux/actions";
import Button from "../Button";
import Singelinput from "./Singelinput";

const initialState = {
  name: "",
  address: "",
  contactno: "",
};

const Inputform = () => {
  const [userinfo, setUserinfo] = useState(initialState);
  const dispatch = useDispatch();
  const toEditUser = useSelector((state) => state.data.toEdit);
  const edit = useSelector((state) => state.data.edit);
  console.log(edit);
  // console.log(toEditUser);
  // console.log(Object.entries(toEditUser).length);

  useEffect(() => {
    setUserinfo({
      name: toEditUser.name,
      address: toEditUser.address,
      contactno: toEditUser.contactno,
    });
  }, [toEditUser]);

  const handleSubmit = () => {
    if (!userinfo.name || !userinfo.address || !userinfo.contactno) {
      alert("Please enter all.");
      return;
    }
    setUserinfo({ name: "", address: "", contactno: "" });
    dispatch(addPersonalInfo(userinfo));
  };

  const handleEdit = () => {
    dispatch(updatePersonalinfo({ ...userinfo, id: toEditUser.id }));
    dispatch(editToggle());
    setUserinfo({
      name: "",
      address: "",
      contactno: "",
    });
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setUserinfo((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <Singelinput
        handlechange={handlechange}
        id="name"
        name="name"
        value={userinfo.name}
      />
      <label htmlFor="address">Address:</label>
      <Singelinput
        handlechange={handlechange}
        id="address"
        name="address"
        value={userinfo.address}
      />
      <label htmlFor="contact">Contact:</label>
      <Singelinput
        handlechange={handlechange}
        id="contactno"
        name="contactno"
        value={userinfo.contactno}
      />
      {edit ? (
        <Button name="Edit" onClick={handleEdit} />
      ) : (
        <Button name="Add" onClick={handleSubmit} />
      )}
    </div>
  );
};

export default Inputform;
