import React from "react";
import { connect } from "react-redux";
import HelpMenu from "../components/HelpMenu";
import { showToast } from "../actions/toastAction";

const HelpMenuContainer = props => <HelpMenu {...props} />;

export default connect(
  null,
  {
    showToast
  }
)(HelpMenuContainer);
