import React, { Component } from "react";
import "./Pageone.css";
import { connect } from "react-redux";
import Inputformclass from "../../components/inputformclass/Inputformclass";
import Personalinfoclass from "../../components/personalinfoclass/Personalinfoclass";
import Filterformclass from "../../components/filterform/Filterformclass";

const mapStateToProps = (props) => {
  return {
    allUsers: props.data.totalUsers,
    edit: props.data.editfromclass,
  };
};

class Pageone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterUsers: this.props.allUsers,
    };
  }

  filterItems = (filteredUsers) => {
    this.setState({
      filterUsers: filteredUsers,
    });
  };

  render = () => (
    <div className="Pageone">
      <h3>Using Class Component.</h3>
      <Inputformclass edit={this.props.edit} />
      <Filterformclass
        allUsers={this.props.allUsers}
        filterItems={this.filterItems}
      />
      {this.state.filterUsers.length === 0 ? (
        <h3>Add users..</h3>
      ) : (
        this.state.filterUsers.map((item) => {
          return <Personalinfoclass {...item} key={item.id} />;
        })
      )}
    </div>
  );
}

export default connect(mapStateToProps)(Pageone);
