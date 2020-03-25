import styled from "styled-components";
/* Create custom styled-components that are imported into the card*/
export const ImgCard = styled.div`
    background-color: rgba(28,28,28,0.95);
    background-repeat: no-repeat;
    background-size: 100% 100%; 
    min-height: 100%;
    min-width: 100vw;
    padding: 5% 2% 0 2%;
    h1 {
        font-size: 3.4rem;
    }
`;
export const Overlay = styled.div`
    background-color: rgba(28,28,28,0.95);
    height: 100vh;
    left: 0;
    overflow-y: scroll;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 2; 
`;
export const Modal = styled.div`
    background-color: rgba(28,28,28,0);
    border: none;
    border-radius: 5px;
    cursor: zoom-out; 
    left: 0;
    margin: 10% auto;
    overflow: hidden;
    position: absolute; 
    right: 0;    
    img {
        border-radius: 2px;
    }
`;
export const AspectRatio = styled.div`
    border-radius: 50%;
    overflow: hidden;
    padding-bottom: 80%;
    position: relative;
    width: 80%;
    z-index: 1;
`;
export const Img = styled.img`
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;
    position: absolute;
    right: 0;
`;
export const Video = styled.iframe`
    min-height: 100%;
    object-fit: cover;
    position: absolute;
    width: 1px;
    min-width: 100%;
    *width: 100%;
`;
export const TextContainer = styled.div`
    margin: 5% auto;
    width: 85%;
    h2 {
        font-weight: bold;
    }
`;
export const Copyright = styled.p`
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 1% auto;
`;
export const Credit = styled.p`
    color: dimgrey;
    font-size: 0.8rem;
    margin-top: 5%;
`;