import React from "react";
import { Button } from 'reactstrap';
import { Jumbotron, Container } from 'reactstrap';
import styled from "styled-components";

const ImgCard = styled.div`
    position: relative;
    background: dimgrey;
    overflow: hidden;
    padding: 2% 5% 0 5%;
`;
const Img = styled.img`
    border-radius: 50%;
    margin: 5% 0;
    width: 75%;
`;
const TextContainer = styled.div`
    width: 75%;
    margin-bottom: 5%;
`;
const Copyright = styled.p``

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;


const APODCard = props => {
    return (
    <ImgCard style={{backgroundImage: `url(${props.img})`}}>
            <Jumbotron fluid>
        <Container props fluid>
        <h1 className="display-3">{props.date}</h1>
        <Img className="apod_img" alt="Picture of the Day" src={props.img} />
        <TextContainer>
          <h2 className="display-4">{props.title}</h2>
          <p className="lead">{props.description}</p>
          <Copyright className="lead">©{props.copyright}</Copyright>
        </TextContainer>
        <ButtonContainer>
            <Button onClick={()=>{props.dateSub();}} outline color="secondary">previous</Button>{' '}
            <Button onClick={()=>{props.dateAdd();}} outline color="secondary">forward</Button>{' '}
        </ButtonContainer>
        </Container>
      </Jumbotron>
        </ImgCard>
    )
};

export default APODCard;