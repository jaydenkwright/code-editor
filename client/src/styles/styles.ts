import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface ButtonProps {
    active?: boolean,
    block?: boolean,
    primary?: boolean,
    noWidth?: boolean,
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

export const SubmitButton = styled.button<ButtonProps>`
    background: #38A169;
    color: #F7FAFC;
    border: none;
    outline: none;
    font-size: 1em;
    padding: 0em .5em;
    width: ${({ noWidth }) => noWidth ? ' ' : '20vw'};
    height: 5vh;
    margin: 0em 0em .5em 0em;
    display: ${(({ block }) => block ? 'block' : 'inline-block')};
    &:hover {
        background-color: #2F855A;
    }
` 


export const H1 = styled.h1`
    color: #E2E8F0;
    font-family: Arial, Helvetica, sans-serif;
`

export const H3 = styled.h3`
    color: #A0AEC0;
    font-family: Arial, Helvetica, sans-serif;
`

export const StyledLink = styled(Link)`
    color: #E2E8F0;
    text-decoration: none;
    &:visited {
        color: #E2E8F0;
    }

    &:hover {
        color: #EDF2F7;
    }
`

export const TextBox = styled.input`
    background-color: #CBD5E0;
    color: #2D3748;
    margin: auto auto 1em auto;
    width: 20vw;
    height: 5vh;
    border: none;
    display: block;
    outline: none;
    padding: 0em .2em;
    @media screen and (max-width: 828px){
        width: 60vw;
    }
`

export const TextArea = styled.textarea`
    background-color: #CBD5E0;
    color: #2D3748;
    margin: auto auto 1em auto;
    width: 20vw;
    height: 10vh;
    border: none;
    display: block;
    outline: none;
    padding: .5em .2em;
    font-family: Arial, Helvetica, sans-serif;
    @media screen and (max-width: 828px){
        width: 60vw;
    }
`

export const Select = styled.select`
    width: 20vw;
    height: 5vh;
    color: #2D3748;
    background-color: #CBD5E0;
    margin: auto auto 1em auto;
    border:none;
    display: block;
    outline: none;
    padding: .5em .2em;
`;

export const Option = styled.option`
    width: 20vw;
    color: #2D3748;
    background-color: #CBD5E0;
`

export const ErrorBox = styled.div`
    width: 20vw;
    padding: .5em;
    background-color: #E53E3E;
    margin: auto auto 1em auto;
    color: #F7FAFC;
    font-family: Arial, Helvetica, sans-serif;
`
