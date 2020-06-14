import React, { useState, useEffect } from "react";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'Recharts';

const Graph = (props) => {

    const [coordinates, setCount] = useState(JSON.parse(window.localStorage.getItem('upVoteData')).filter(point => !point.isHidden));

    useEffect(() => {
        if(props.fetch && (typeof window !== 'undefined')) {
            const coordinates= JSON.parse(window.localStorage.getItem('upVoteData')).filter(point => !point.isHidden);
            setCount(coordinates);
            props.toggleVoteFlag();
        }
    });
    return (
        <div id="container" style={{boxSizing:' border-box',padding: '10px',width: '100%',height: '800px',backgroundColor: '#fff'}}>
        <ResponsiveContainer>
            <LineChart data={coordinates}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="feedId"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="voteCount" stroke="#82ca9d" />
            </LineChart>
       </ResponsiveContainer>
       </div>
    );
};

export default Graph;
