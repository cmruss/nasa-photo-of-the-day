import React from "react";
import { Button } from 'reactstrap';
import { Jumbotron, Container } from 'reactstrap';
import styled from "styled-components";
import moment from "moment";

const ImgCard = styled.div`
    background: dimgrey;
    padding: 2% 5% 0 5%;
`;
const AspectRatio = styled.div`
    width: 75%;
    position: relative;
    height: 0;
    padding-bottom: 75%;
    overflow: hidden;
    border-radius: 50%;
    object-fit: fill;
    margin: 2% auto;

`
const Img = styled.img`
    overflow:hidden;
    position:absolute;
    right: 0;
    min-height: 100%;
`;
const TextContainer = styled.div`
    width: 75%;
    margin-bottom: 5%;
`;
const Copyright = styled.p`
    font-weight: bold;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;


const APODCard = props => {

    let today = moment(new Date()).format("YYYY-MM-DD")
    let imgDate = props.imgDate
    let copyright = props.copyright

    return (
    <ImgCard style={{backgroundImage: `url(${props.img})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}>
      <Jumbotron fluid>
        <Container props fluid>
        <h1 className="lead">{props.imgDate}</h1>
        <AspectRatio>
            <Img className="apod_img" alt="Picture of the Day" src={props.img}/>
        </AspectRatio>
        <TextContainer>
          <h2 className="display-5">{props.title}</h2>
          <p className="lead">{props.description}</p>
          {copyright && <Copyright className="lead">©{props.copyright}</Copyright>}
        </TextContainer>
        <ButtonContainer>
            <Button onClick={()=>{props.dateSub(props.date)}} outline color="secondary">previous</Button>{' '}
           { imgDate < today && <Button onClick={()=>{props.dateAdd(props.date)}} id="Forward" outline color="secondary">forward</Button>}
        </ButtonContainer>
        </Container>
      </Jumbotron>
    </ImgCard>
    )
};

export default APODCard;