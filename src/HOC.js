import React from "react";

const UpdatedComp = (OriginalComp) => {
  class NewComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
    increamentCount = () => {
      this.setState((prev) => {
        return { count: prev.count + 1 };
      });
    };
    render() {
      return (
        <OriginalComp
          count={this.state.count}
          onIncreament={this.increamentCount}
        />
      );
    }
  }
  return NewComp;
};

export default UpdatedComp;
