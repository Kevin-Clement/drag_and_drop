import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`{
    height: 34px;
    cursor: pointer;
    font-size: 0.8rem;
    border: none;
    padding: 0 10px;
    border-radius: 4px;
    background-color: var(--color-layout);
    color: var(--color-white);
    margin: 0 3px;
}
&:hover {
    background-color: #4d5058;
}
`

const Button = ({txt}) => {
    return (
        <>
            <CustomButton>{txt}</CustomButton>
        </>
    );
};

export default Button;