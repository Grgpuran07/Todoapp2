import React, { Component } from "react";
import "../Personalinfo/personalinfo.css";
import { setEditUserfromclass, deleteUser } from "../../redux/actions";
import { connect } from "react-redux";
import Button from "../Button";

class Personalinfoclass extends Component {
  constructor(props) {
    super(props);
  }
  handleDelete = (id) => {
    this.props.deleteUser(id);
  };

  handleEdit = (id) => {
    this.props.editUser(id);
  };

  render() {
    return (
      <div className="personalinfo">
        <p>Name: {this.props.name}</p>
        <p>Address: {this.props.address}</p>
        <p>Contact: {this.props.contactno}</p>
        <Button name="Edit" onClick={() => this.handleEdit(this.props.id)} />
        <Button
          name="Delete"
          onClick={() => this.handleDelete(this.props.id)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: (id) => dispatch(setEditUserfromclass(id)),
    deleteUser: (id) => dispatch(deleteUser(id)),
  };
};

export default connect(null, mapDispatchToProps)(Personalinfoclass);
