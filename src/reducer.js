import ip from 'icepick';
import _cloneDeep from 'lodash/cloneDeep';

const initialValues = {
    data: null,
    refinedFeeds: null,
    voteData: null,
    voteUpdated: false,
}

export const dataReducer = ( state = initialValues, action ) => {
    switch ( action.type ) {
        case "STORE_DATA":            
            state = ip.setIn(
                state,
                ['data'],
                action.data,
            );
            return state;
        case 'SAVE_DATA_ON_CLIENT':
            state = ip.setIn(
                state,
                ['refinedFeeds'],
                action.data,
            );
            return state;
        case "HIDE_FEEDS_DATA":
            const dataSet= ip.getIn(state, ['refinedFeeds']);
            let dataToHide= _cloneDeep(dataSet);
            dataToHide[action.data].isHidden = true;

            state = ip.set(state, 'refinedFeeds', dataToHide);
            state = ip.set(state, 'voteUpdated', true);
            return state;
        case "UPDATE_FEEDS_DATA":
            console.log("88888", action);
            const data= ip.getIn(state, ['refinedFeeds']);
            let dataToUpdate= _cloneDeep(data);
            dataToUpdate[action.data.id].voteCount= action.data.updatedVote;

            state = ip.set(state, 'refinedFeeds', dataToUpdate);
            state = ip.set(state, 'voteUpdated', true);
            return state;
        case "TOGGLE_VOTE_HANDELER":
            state = ip.setIn(
                state,
                ['voteUpdated'],
                false
            );
            return state;
      
            
        default: return state;
    }
};