import React, { useEffect } from "react";
import { Button } from 'reactstrap';
import { Jumbotron, Container } from 'reactstrap';
import styled from "styled-components";
import moment from "moment";

const ImgCard = styled.div`
    background: dimgrey;
    padding: 2% 5% 0 5%;
    h1 {
        font-weight: bold;
    }
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
    h2 {
        font-weight: bold;
    }
`;
const Copyright = styled.p`
`
const ButtonContainer = styled.div`
    margin: 1% auto;
    display: flex;
    justify-content: space-evenly;
`;

const APODCard = props => {

    let today = moment(new Date()).format("YYYY-MM-DD")
    let imgDate = props.imgDate
    let copyright = props.copyright

    useEffect(() => {
        window.scrollTo(50, 0)
      }, [props.date])

    return (
    <ImgCard style={{backgroundImage: `url(${props.img})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}>
      <Jumbotron fluid>
        <Container props fluid>
        <h1 className="lead">{props.imgDate}</h1>
        <AspectRatio>
            <Img className="apod_img" alt="Picture of the Day" src={props.img}/>
        </AspectRatio>
        <TextContainer>
          <h2 className="lead">{props.title}</h2>
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