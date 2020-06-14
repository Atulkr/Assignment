import React from "react";
import Description from './Description';
import Author from './Author';
import TimeAgo from './TimeAgo';
import RowActions from './RowActions';

const NewsDetail = ( props ) => {
    const { details }= props;
    return (
    <div className="wrapper">
         <div className="contentWrapper">
            <Description 
                titleText= {details.title}  
                style={{color:"#000", fontWeight:"700", fontSize:"16px", padding:" 10px 0px"}}
            />
            <Author 
                url= {details.url} 
                author= {details.author} 
                siteStyle={{fontSize:"11px", color:"#A9A9A9", fontSize:"400", padding:"5px"}}
                nameStyle={{color:"#000", fontWeight:"600", fontSize:"14px", padding:"0px"}}
            />
            <TimeAgo 
                created_at= {details.created_at} 
                style={{fontSize:"11px", color:"#A9A9A9", fontSize:"400", padding:"5px"}}
            />
            <RowActions
                style={{color:"#000", fontWeight:"600", fontSize:"14px", padding:"0px", cursor:"pointer"}}
                onHideClick= {props.onHideClick}
                hitId= {props.hitId} 
            />
        </div>
    </div>
)};

export default NewsDetail;
