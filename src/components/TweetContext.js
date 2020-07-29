import React, { useState } from 'react';

import avatar from "../assets/carmen-sandiego.png";
import moment from 'moment';

export const TweetContext = React.createContext(null);

const date = moment().format('h:mm A [-] MMM Do YYYY');

export const TweetProvider = ({children}) => {
    const [numOfLikes, setNumOfLikes] = useState(460);    
    const [numOfRetweets, setNumOfRetweets] = useState(65);
    const [isLiked, setIsLiked] = useState(false);    
    const [isRetweeted, setIsRetweeted] = useState(false);    

    
    return (
        <TweetContext.Provider
            value={{
                tweetContents:"Where in the world am I?",
                displayName: "Carmen Sandiego ✨",
                username: "carmen-sandiego",
                avatarSrc: avatar,
                isRetweetedByCurrentUser: isRetweeted,
                isLikedByCurrentUser: isLiked,
                date, numOfLikes, numOfRetweets
            }}
        >
            {children}
        </TweetContext.Provider>
    );
};