import React from "react";
import UpdatedComp from "./HOC";
class File1 extends React.Component {
  render() {
    return (
      <>
        <h1 onMouseEnter={this.props.onIncreament}>File 1</h1>
        <h2>{this.props.count}</h2>
      </>
    );
  }
}

export default UpdatedComp(File1);
