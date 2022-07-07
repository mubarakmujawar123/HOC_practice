import React from "react";
import UpdatedComp from "./HOC";
class File2 extends React.Component {
  render() {
    return (
      <>
        <h1 onMouseDown={this.props.onIncreament}>File 2</h1>
        <h2>{this.props.count}</h2>
      </>
    );
  }
}

export default UpdatedComp(File2);
