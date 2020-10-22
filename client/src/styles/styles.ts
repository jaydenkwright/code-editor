import styled from 'styled-components'

interface ButtonProps {
    active?: boolean,
    block?: boolean,
    primary?: boolean
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
    width: 20vw;
    height: 5vh;
    margin: 0em 0em .5em 0em;
    display: ${(({ block }) => block ? 'block' : 'inline-block')};
    &:hover {
        background-color: #2F855A;
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
`

export const ErrorBox = styled.div`
    width: 20vw;
    padding: .5em;
    background-color: #E53E3E;
    margin: auto auto 1em auto;
    color: #F7FAFC;
    font-family: Arial, Helvetica, sans-serif;
`
