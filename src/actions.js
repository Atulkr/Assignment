import { fetchCircuits } from "./api";

const storeData = ( data ) => ( {
    type: "STORE_DATA",
    data,
} );

export const triggerVoteAction = ( data ) => ( {
    type: "UPDATE_FEEDS_DATA",
    data,
});
export const triggerHideAction = ( data ) => ( {
    type: "HIDE_FEEDS_DATA",
    data,
});

export const saveOnClientAction = ( data ) => ( {
    type: "SAVE_DATA_ON_CLIENT",
    data,
});

export const toggleVoteAction = ( ) => ( {
    type: "TOGGLE_VOTE_HANDELER",
} );

export const updateFeedVote = ( id, updatedVote ) => dispatch => 
    dispatch( triggerVoteAction({id, updatedVote}) );

export const updateFeedHide = ( id ) => dispatch => 
    dispatch( triggerHideAction(id) );

export const toggleVoteHandeler = () => dispatch => 
    dispatch(toggleVoteAction());

export const saveOnClient = (data) => dispatch => 
    dispatch(saveOnClientAction(data));

export const fetchData = ( ) => dispatch => 
    fetchCircuits().then( (res) => {
        dispatch( storeData(res) )});
