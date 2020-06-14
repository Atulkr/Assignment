import React from "react";
import { connect } from "react-redux";
import { increaseUpvote } from "../actions";

import { CaretUpOutlined } from '@ant-design/icons'

const Upvote = (props) => {
    return (
        <span className="actionType" onClick={() => props.onUpvoteClick(props.hitId)}><CaretUpOutlined /></span>
    )
};

const mapStateToProps = ( state ) => ( {
    feeds: state.newsFeed.data,
});

const mapDispatchToProps = {
    increaseUpvote,
};

export default connect(mapStateToProps, mapDispatchToProps)(Upvote);
