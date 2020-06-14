import React from "react";

const Author = (props) => (
    <React.Fragment>
        <span style={props.siteStyle} className="sourceSite">{`(${props.url}) by `}</span>
        <span style={props.nameStyle} className="sourceName">{props.author}</span>
    </React.Fragment>
);

export default Author;
