import React, { useState } from "react";
import { Button } from "reactstrap";
import { Jumbotron, Container } from 'reactstrap';
/* Image to display if the current image cant be returned */
import img from "../img/404.jpg";
import { ImgCard, Img, AspectRatio,TextContainer, Copyright, Credit, ButtonContainer, Overlay, Modal }from "../styles/APODCardStyle";

const APODCard = props => {
    /* State hook to determine if the modal shows or not, default not */
    const [modal, setModal] = useState(false)
    /* Toggles the "modal" state */
    const toggleImage = () => {
        setModal(!modal)
    };

    return (
        <ImgCard 
            style={{
                /* If no image loads use stock asset*/
                backgroundImage: props.img ? `url(${props.img})` : `url(${img})`, 
                backgroundRepeat: "no-repeat", 
                backgroundSize: "100% 100%", 
                display: props.loading ? "none" : "block" 
            }}
        >
            <Jumbotron fluid>
                <Container props fluid>
                    <h1 className="display-4">{props.imgDate}</h1>
                    {modal && (
                    <Overlay>
                        <Modal
                            className="dialog"
                            onClick={toggleImage}
                        >
                            <img
                            className="apod_img" 
                            alt={props.date ? props.date : "Astronomy Photo of the Day"}
                            src={props.img ? props.img : img} 
                            onClick={
                                /* Calls toggle to hide modal */
                                toggleImage}
                            />
                        </Modal>
                    </Overlay>)}
                    <AspectRatio>
                        <Img 
                            onLoad={props.setLoading(false)} 
                            className="apod_img" 
                            alt="Picture of the Day" 
                            src={props.img ? props.img : img} 
                            style={{cursor: "zoom-in"}}
                            onClick={
                                /* Calls toggle to display modal */
                                toggleImage}
                        />
                    </AspectRatio>
                    <TextContainer>
                        <h2 className="lead">{props.title}</h2>
                        <p className="lead">{props.description}</p>
                        {props.copyright && 
                        /* If there is a copyright value, display its component*/
                        <Copyright className="lead">©{props.copyright}</Copyright>}
                    </TextContainer>
                    <ButtonContainer>
                        <Button 
                            onClick={
                                /* Calls the subtract date function from the parent */
                                ()=>{props.dateSub(props.date)}} 
                            outline color="secondary"
                        >
                            previous
                        </Button>
                        <Button 
                            onClick={
                                 /* Calls the subtract date function from the parent */
                                ()=>{props.dateAdd(props.date)}} 
                            id="Forward" 
                            outline color="secondary" 
                            disabled={
                                /* Disable the forward button if it's todays date */
                                props.imgDate < props.today ? false : true }
                        >
                            forward
                        </Button>
                        <Button 
                            onClick={
                                /* Calls setDate function from the parent with the value of today */
                                ()=>{props.setDate(props.today)}} 
                            outline color="secondary"
                            disabled={
                                /* Disable the today button if it's todays date */
                                props.imgDate < props.today ? false : true }
                        >
                            today
                        </Button>
                    </ButtonContainer>
                </Container>
                <Credit>design 2020 cmruss | made with the NASA APOD API & Reactstrap</Credit>
            </Jumbotron>
        </ImgCard>
    )
};

export default APODCard;