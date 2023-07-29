import { styled } from "styled-components";

export const WrapperContainerLeft= styled.div`
    flex:1;
    padding:40px 45px 24px;
    display:flex;
    flex-direction:column;
`

export const WrapperContainerRight= styled.div`
    background: linear-gradient(136deg, rgb(240, 248, 255) -1%, rgb(219, 238, 255) 85%);
    width: 300px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap:4px;
`

export const WrapperTextLight= styled.span`
    font-size:13px;
    color:rgb(13,92,182);
    cursor:pointer;

`