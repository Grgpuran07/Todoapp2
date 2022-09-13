import React from "react";
import "./personalinfo.css";
import { deleteUser, setEditUser } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";

const Personalinfo = ({ name, address, contactno, id }) => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.data.totalUsers);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = (id) => {
    const toEditUser = allUsers.find(
      (item) => item.id.toString() === id.toString()
    );
    dispatch(setEditUser(toEditUser));
  };

  return (
    <div className="personalinfo">
      <p>Name: {name}</p>
      <p>Address: {address}</p>
      <p>Contact: {contactno}</p>
      <Button name="Edit" onClick={() => handleEdit(id)} />
      <Button name="Delete" onClick={() => handleDelete(id)} />
    </div>
  );
};

export default Personalinfo;
