import _cloneDeep from 'lodash/cloneDeep';

const fetchDataFromStorage = () => {
    let upVote= [];
    upVote= JSON.parse(window.localStorage.getItem('upVoteData'));
    if(upVote) {
        return upVote;
    } else {
        return [];
    }
}

const setDataOnStorage = (data) => {
    window.localStorage.setItem('upVoteData', JSON.stringify(data));
}

export const addUpvote = (id) => { 
    let upVote= fetchDataFromStorage();
    let updatedVoteCount= 0;
    if(upVote && upVote.length) {
        upVote.forEach(vote => {
            if(vote.feedId === id) {
                vote.voteCount= vote.voteCount + 100;
                updatedVoteCount= vote.voteCount;
            }
        })
    }
    setDataOnStorage(upVote);
    return updatedVoteCount;
}

export const hideFeedData = (id) => { 
    let upVote= fetchDataFromStorage();
    if(upVote && upVote.length) {
        upVote.forEach(vote => {
            if(vote.feedId === id) {
                vote.isHidden= true; 
            }
        })
    }
    setDataOnStorage(upVote);
}

const createFeedDataSource = (hit, vote= []) => {
    const { objectID: id, num_comments, points: voteCount, title, url, author, created_at }= hit;
    return {
        id,
        key: id,
        num_comments,
        isHidden: vote.feedId ? vote.isHidden : false,
        voteCount: vote.feedId ? vote.voteCount : voteCount,
        hitDetail: {
            title,
            url,
            author,
            created_at,
        }
    }
}

export const furnishData = ( hitsData ) => {
    let updatedHits= {};
    let upVote= fetchDataFromStorage();

    let isDataOnStorage= false;
    if(upVote && upVote.length){
        isDataOnStorage= true;
    }
    hitsData.forEach( hit => {
        let updatedHit= {};
        if(!isDataOnStorage) {
            const currHit= {
                feedId: hit.objectID,
                voteCount:hit.points,
                isHidden: false,
            }
            upVote.push(currHit);
            updatedHit= createFeedDataSource(hit);
        } else {
            upVote.forEach(vote => {
                if(hit.objectID === vote.feedId)
                    updatedHit= createFeedDataSource(hit, vote);
            })
        }
        updatedHits[hit.objectID]=updatedHit;
    });
    
    if(!isDataOnStorage) {
        setDataOnStorage(upVote);
    }
    return updatedHits;
}
