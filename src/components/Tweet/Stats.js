import React, { useContext } from 'react';
import styled from 'styled-components';
import { TweetContext } from '../TweetContext';

const Stats = () => {
    const {numOfLikes, numOfRetweets} = useContext(TweetContext);
    return (
        <Wrapper>
            <span>{numOfRetweets}</span>
            <p>Retweets</p>
            <span>{numOfLikes}</span>
            <p>Likes</p>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 48px;

  span {
      font-weight: bold;
      padding-right: 5px;
  }

  p {
      padding-right: 20px;
      color: gray;
  }
`;

export default Stats;