import React, { useState } from 'react';

import avatar from "../assets/carmen-sandiego.png";
import moment from 'moment';
import { useEffect } from 'react/cjs/react.production.min';

export const TweetContext = React.createContext(null);

const date = moment().format('h:mm A [-] MMM Do YYYY');

export const TweetProvider = ({children}) => {
    const [numOfLikes, setNumOfLikes] = useState(460);    
    const [numOfRetweets, setNumOfRetweets] = useState(65);
    const [isLiked, setIsLiked] = useState(false);    
    const [isRetweeted, setIsRetweeted] = useState(false);    

    const handleToggleLike = () => {
        setIsLiked(!isLiked);
        setNumOfLikes(n => isLiked ? n - 1 : n + 1); 
            
    };

    const handleToggleRetweet = () => {
        setIsRetweeted(!isRetweeted);
        setNumOfRetweets(n => isRetweeted ? n - 1 : n + 1); 
            
    };

    return (
        <TweetContext.Provider
            value={{
                tweetContents:"Where in the world am I?",
                displayName: "Carmen Sandiego ✨",
                username: "carmen-sandiego",
                avatarSrc: avatar,
                isRetweeted, isLiked,
                date, numOfLikes, numOfRetweets,
                handleToggleLike, handleToggleRetweet
            }}
        >
            {children}
        </TweetContext.Provider>
    );
};