import React, { Component } from "react";
import RuleGroup from "./components/RuleGroup";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { query } = this.props;
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "650px" }}>
          <button style={{ display: "block", marginBottom: "1rem" }}>
            Clear Query
          </button>

          <RuleGroup />
        </div>

        <div style={{ width: "500px", overflow: "auto" }}>
          <h3>Query</h3>

          {/* {query.rules} */}
        </div>
      </div>
    );
  }
}

export default connect((state) => ({ query: state.query }))(App);
