import React from "react";
import moment from 'moment';

const TimeAgo = (props) => (
    <span style={props.style} className="time">{moment().startOf(props.created_at).fromNow()}</span>
);

export default TimeAgo;
