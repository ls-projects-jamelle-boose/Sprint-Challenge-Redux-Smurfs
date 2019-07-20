import React, { Component } from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";
import { getSmurfs, addSmurf, deleteSmurf } from "../actions/index";

class SmurfForm extends Component {
  state = {
    newSmurf: {
      name: "",
      age: "",
      height: ""
    }
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  changeHandler = e => {
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        [e.target.name]: e.target.value
      }
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.newSmurf);
    this.setState({
      newSmurf: {
        name: "",
        age: "",
        height: ""
      }
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.deleteSmurf}
              />
            );
          })}
        </div>
        <form onSubmit={this.submitHandler}>
          <h2>Add Smurfs!</h2>
          <input
            onchange={this.changehandler}
            type="text"
            placeholder="name"
            value={this.state.newsmurf.name}
            name="name"
          />
          <input
            onchange={this.changehandler}
            type="text"
            placeholder="Age"
            value={this.state.newsmurf.age}
            name="age"
          />
          <input
            onchange={this.changehandler}
            type="text"
            placeholder="Height"
            value={this.state.newsmurf.height}
            name="height"
          />
          <button className="md-button" type="submit">
            Add Smurf
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, deleteSmurf }
)(SmurfForm);
