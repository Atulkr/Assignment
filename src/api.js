import fetch from "isomorphic-fetch";

export function fetchFeeds(req ) {
    return fetch( "http://hn.algolia.com/api/v1/search?query=foo&tags=story" )
        .then( res => res.json( ) )
}
