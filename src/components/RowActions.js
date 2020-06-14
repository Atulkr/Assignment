import React from "react";

const RowActions = (props) => (
    <span style={props.style} className="actionType" onClick= {() => props.onHideClick(props.hitId)}>  [ hide ]</span>
);

export default RowActions;
