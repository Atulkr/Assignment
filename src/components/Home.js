import React from "react";
import { connect } from "react-redux";
import 'antd/dist/antd.css';
import { Table, Row, Col } from 'antd';
import './style.css'
import { fetchData, updateFeedVote, toggleVoteHandeler, updateFeedOnClient, saveOnClient, updateFeedHide } from "../actions";
import NewsDetail from './NewsDetail';
import Upvote from './Upvote';
import Graph from "./Graph";
import { addUpvote, furnishData, hideFeedData } from "../utils";
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: 'Comments',
                    dataIndex: 'num_comments',
                    key: 'num_comments',
                    className:'columnStyle'
                },
                {
                    title: 'Vote Count',
                    dataIndex: 'voteCount',
                    key: 'voteCount',
                },
                {
                    title: 'Upvote',
                    dataIndex: 'upVote',
                    key: 'upVote',
                    render: (text, record) => (
                        <React.Fragment>
                            <Upvote 
                                hitId= {record.id} 
                                onUpvoteClick= {this.handleClickToVote}
                            />
                        </React.Fragment>
                    )
                },
                {
                    title: 'News Details',
                    dataIndex: 'hitDetail',
                    key: 'hitDetail',
                    render: (text, record) => {
                        return (
                        <React.Fragment>
                            <NewsDetail
                                details= {text} 
                                hitId= {record.id} 
                                onHideClick= {this.handleClickToHide}
                            />
                        </React.Fragment>
                    )}
                },
            ],
        }
        this.handleClickToVote= this.handleClickToVote.bind(this);
        this.toggleVoteHandler= this.toggleVoteHandler.bind(this);
        this.handleClickToHide= this.handleClickToHide.bind(this);
    }
  
    componentDidMount( ) {
        const {feeds}= this.props;
        if ( this.props.feeds.length <= 0 ) {
            this.props.fetchData();
        }
        const dataOnClient= furnishData(feeds.hits);
        console.log("######", dataOnClient);
        this.props.saveOnClient(dataOnClient);
    }

    handleClickToVote(id) {
       let updatedVoteCount= addUpvote(id);
        this.props.updateFeedVote(id, updatedVoteCount);
    }

    handleClickToHide(id) {
        hideFeedData(id);
        this.props.updateFeedHide(id);
    }

    toggleVoteHandler() {
        this.props.toggleVoteHandeler();
    }

    render( ) {
        const { triggerCoordinateFetch, upVoteData, updatedFeeds } = this.props;
        const {columns}= this.state;
        if(typeof window === 'undefined') {
            return <div>!!!!Loading...</div>
        }
        let data= [];
        if(updatedFeeds){
            const dataTobeFiltered= Object.values(updatedFeeds);
            data= dataTobeFiltered.filter(feed => !feed.isHidden);
        }
        return (
            <div className="wrapper">

                <div className="responsiveDiv">
                    <Row>
                        <Col span={24}>
                            <Table
                                rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' :  'table-row-dark'}
                                style={{background:"#FF8C00"}} 
                                dataSource={ data } 
                                columns={ columns } 
                            />
                        </Col>
                    </Row>
                </div>
                
                <Graph 
                    fetch= {triggerCoordinateFetch} 
                    initVoteData= {upVoteData} 
                    toggleVoteFlag= {this.toggleVoteHandler}
                />
            </div>
        );
    }
}
Home.serverFetch = fetchData; // static declaration of data requirements

const mapStateToProps = ( state ) => ( {
    feeds: state.newsFeed.data,
    updatedFeeds: state.newsFeed.refinedFeeds,
    upVoteData: state.newsFeed.voteData,
    triggerCoordinateFetch: state.newsFeed.voteUpdated,
});

const mapDispatchToProps = {
    fetchData,
    updateFeedVote,
    toggleVoteHandeler,
    updateFeedOnClient,
    saveOnClient,
    updateFeedHide,
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );
