import React, { Component } from "react";
import {
  addPersonalInfo,
  updatePersonalinfo,
  editTogglefromclass,
} from "../../redux/actions";
import { connect } from "react-redux";
import Button from "../Button";
import Singelinput from "../Inputform/Singelinput";

class Inputformclass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      contactno: "",
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log(prevProps);
    const { name, address, contactno } = this.props.editUser;
    if (prevProps.editUser !== this.props.editUser) {
      this.setState({
        name,
        address,
        contactno,
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAdd = () => {
    if (!this.state.name || !this.state.address || !this.state.contactno) {
      alert("Please enter all fields.");
      return;
    }
    this.props.addPersonalInfo({
      name: this.state.name,
      address: this.state.address,
      contactno: this.state.contactno,
    });
    this.setState({
      name: "",
      address: "",
      contactno: "",
    });
  };

  handleEdit = () => {
    if (!this.state.name || !this.state.address || !this.state.contactno) {
      alert("Please add all fields.");
      return;
    }
    const { id } = this.props.editUser;
    this.props.updatePersonalinfo({
      ...this.state,
      id,
    });
    this.setState({
      name: "",
      address: "",
      contactno: "",
    });
    this.props.editTogglefromclass();
  };

  render() {
    return (
      <div>
        <label htmlFor="name">Name:</label>
        <Singelinput
          value={this.state.name}
          handlechange={this.handleChange}
          name="name"
        />
        <label htmlFor="address">Address:</label>
        <Singelinput
          value={this.state.address}
          handlechange={this.handleChange}
          name="address"
        />
        <label htmlFor="contact">Contact:</label>
        <Singelinput
          value={this.state.contactno}
          handlechange={this.handleChange}
          name="contactno"
        />
        {this.props.edit ? (
          <Button onClick={this.handleEdit} name="Edit" />
        ) : (
          <Button onClick={this.handleAdd} name="Add" />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = {
  addPersonalInfo,
  updatePersonalinfo,
  editTogglefromclass,
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addp:
//     addPost: (datas) => dispatch(addPersonalInfo(datas)),
//     updatePersonalinfo: (datas) => dispatch(updatePersonalinfo(datas)),
//     editToggle: () => dispatch(editTogglefromclass()),
//   };
// };

const mapStateToProps = (props) => {
  return {
    editUser: props.data.toEditfromclass,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inputformclass);
