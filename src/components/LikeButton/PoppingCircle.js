import React from 'react';
import styled, { keyframes }  from 'styled-components';

const PoppingCircle = ({size, color}) => {
    return (
        <>
            <Circle color={color} size={size}>
            </Circle>
        </>
    );

};

const pop = keyframes`
  0% {
    transform: scale(0,0);
  }
  90% {
    transform: scale(1,1);
  }
  100% {
    transform: scale(0,0);
  }
`;

const Circle = styled.div`
    position: absolute;
    background-color: ${props => props.color};
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: 50%;
    animation: ${pop} 500ms forwards;
`;

export default PoppingCircle;