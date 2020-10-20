import styled from 'styled-components'

interface ButtonProps {
    active?: boolean,
    block?: boolean
}

export const Button = styled.button<ButtonProps>`
    background: ${({ active }) => active ? '#333' : '#999'};
    color: ${({ active }) => active ? '#fff' : '#000'};
    border: none;
    outline: none;
    padding: .5em;
    margin: 0em 0em .5em 0em;
    display: ${(({ block }) => block ? 'block' : 'inline-block')};
    &:hover {
        background-color: ${({ active }) => active ? '#333' : '#888'};
    }
`  

export const H1 = styled.h1`
    color: #999;
    font-family: Arial, Helvetica, sans-serif;

`

export const H3 = styled.h3`
    color: #888;
    font-family: Arial, Helvetica, sans-serif;
    &:hover {
        color: #999;
    }
`