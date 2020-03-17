import styled from "styled-components";

export const ImgCard = styled.div`
    background: dimgrey;
    padding: 2% 5% 0 5%;
    min-height: 100%;
    h1 {
        font-size: 3.4rem;
    }
`;
export const AspectRatio = styled.div`
    width: 75%;
    position: relative;
    height: 0;
    padding-bottom: 75%;
    overflow: hidden;
    border-radius: 50%;
    min-height: 100%;
`;
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1; 
    background-color: rgba(128,128,128,0.5);
`
export const Modal = styled.div`
    position: absolute; 
    right: 0;
    top: 0;
    cursor: zoom-out; 
    width: 100vw;
    background: whitesmoke;
    border: none;
`
export const Img = styled.img`
    overflow: hidden;
    position: absolute;
    right: 0;
    min-height: 100%;
`;
export const TextContainer = styled.div`
    width: 85%;
    margin: 5% auto;
    h2 {
        font-weight: bold;
    }
`;
export const Copyright = styled.p`
`
export const ButtonContainer = styled.div`
    margin: 1% auto;
    display: flex;
    justify-content: space-evenly;
`;
export const Credit = styled.p`
    color: dimgrey;
    font-size: 0.8rem;
    margin-top: 5%;
`;