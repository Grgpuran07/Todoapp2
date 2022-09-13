import React, { Component } from "react";
import Singelinput from "../Inputform/Singelinput";

class Filterformclass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.search !== this.state.search) {
      const filteredUsers = [...this.props.allUsers].filter((item) =>
        `${item.name}${item.address}${item.contactno}`
          .toLowerCase()
          .includes(this.state.search.toLowerCase())
      );
      this.props.filterItems(filteredUsers);
    }

    if (prevProps.allUsers !== this.props.allUsers) {
      this.props.filterItems(this.props.allUsers);
    }
  };

  setSearch = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    return (
      <Singelinput value={this.state.search} handlechange={this.setSearch} />
    );
  }
}

export default Filterformclass;
