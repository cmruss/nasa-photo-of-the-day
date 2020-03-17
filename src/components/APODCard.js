import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { Jumbotron, Container } from 'reactstrap';
import moment from "moment";
import img from "../img/404.jpg";
import { ImgCard, Img, AspectRatio,TextContainer, Copyright, Credit, ButtonContainer }from "../styles/APODCardStyle";


const APODCard = props => {
    const [clicked, setClicked] = useState(false)

    let today = moment(new Date()).format("YYYY-MM-DD");
    let imgDate = props.imgDate;
    let copyright = props.copyright;

    useEffect(() => {
        window.scrollTo(50, 0)
    }, [props.date]);

    const toggleImage = () => {
        setClicked(!clicked)
    };

    return (
        <ImgCard 
            style={{
                backgroundImage: props.img ? `url(${props.img})` : `url(${img})`, 
                backgroundRepeat: "no-repeat", 
                backgroundSize: "100% 100%", 
                display: props.loading ? "none" : "block" 
            }}
        >
            <Jumbotron fluid>
                <Container props fluid>
                    <h1 className="display-4">{props.imgDate}</h1>
                    {clicked && (
                        <dialog
                            className="dialog"
                            style={{ 
                                position: "absolute", 
                                zIndex: 1, 
                                cursor: "zoom-out", 
                                width: "100vw" 
                            }}
                            open
                            onClick={toggleImage}
                        >
                            <img
                            className="apod_img" 
                            alt="Astronomy Picture of the Day" 
                            src={props.img ? props.img : img} 
                            onClick={toggleImage}
                            />
                        </dialog>)}
                    <AspectRatio>
                        <Img 
                            onLoad={props.setLoading(false)} 
                            className="apod_img" 
                            alt="Picture of the Day" 
                            src={props.img ? props.img : img} 
                            style={{
                                display: props.loading ? "none" : "block", 
                                cursor: "zoom-in" 
                            }}
                            onClick={toggleImage}
                        />
                    </AspectRatio>
                    <TextContainer>
                        <h2 className="lead">{props.title}</h2>
                        <p className="lead">{props.description}</p>
                        {copyright && <Copyright className="lead">©{props.copyright}</Copyright>}
                    </TextContainer>
                    <ButtonContainer>
                        <Button 
                            onClick={()=>{props.dateSub(props.date)}} 
                            outline color="secondary"
                        >
                            previous
                        </Button>
                        <Button 
                            onClick={()=>{props.dateAdd(props.date)}} 
                            id="Forward" 
                            outline color="secondary" 
                            disabled={imgDate < today ? false : true }
                        >
                            forward
                        </Button>
                    </ButtonContainer>
                </Container>
                <Credit>design 2020 cmruss | made with the NASA APOD API & Reactstrap</Credit>
            </Jumbotron>
        </ImgCard>
    )
};

export default APODCard;