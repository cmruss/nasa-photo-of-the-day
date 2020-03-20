import React, { useState } from "react";
import { Button } from "reactstrap";
import { Jumbotron, Container, FormGroup } from 'reactstrap';
import DatePicker from "reactstrap-date-picker";
import moment from "moment";

/* Images to display if the current image cant be returned */
import img from "../img/HAL.jpg";
import imgCard from "../img/404.jpg";
import { ImgCard, Img, AspectRatio,TextContainer, Copyright, Credit, ButtonContainer, Overlay, Modal }from "../styles/APODCardStyles";

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
                backgroundImage: !props.img || props.error ? `url(${imgCard})` : `url(${props.img})`, 
                display: props.loading ? "none" : "block" 
            }}
        >
            <Jumbotron fluid>
                <Container props fluid>
                    <h1 className="display-4">{ !props.imgDate || props.error ? moment(props.date).format("YYYY-MM-DD") : props.imgDate }</h1>
                    {modal && (
                    <Overlay>
                        <Modal
                            className="dialog"
                            onClick={toggleImage}
                        >
                            <img
                            className="apod_img" 
                            alt={props.date ? props.date : "Astronomy Photo of the Day"}
                            src={!props.img || props.error ? null : props.img} 
                            onClick={
                                /* Calls toggle to hide modal */
                                toggleImage}
                            />
                        </Modal>
                    </Overlay>)}
                    <AspectRatio>
                        <Img 
                            className="apod_img" 
                            alt="Astronomy Photo of the Day" 
                            src={!props.img || props.error ? img : props.img} 
                            style={{cursor: !props.img || props.error ? "not-allowed" : "zoom-in"}}
                            onClick={ !props.img || props.error ?
                                /* Calls toggle to display modal */
                                null : toggleImage }
                        />
                    </AspectRatio>
                    <TextContainer>
                        <h2 className="lead">{
                            /* Error handling gives custom messages */
                            props.error ? "I'm sorry Dave.." :props.title}</h2>
                        <p className="lead">{props.error ? "I'm afraid I can't find a photo for this date, why don't you try another one?" : props.description}</p>
                        {!props.error && props.copyright && 
                        /* If there is a copyright value, and no error status, display its component*/
                        <Copyright className="lead">©{props.copyright}</Copyright>}
                    </TextContainer>
                    <FormGroup style={{ width: "45%", margin: "5% auto" }} >
                        <DatePicker 
                            id= "example-datepicker" 
                            /* starts with the value the date is stored to state as */
                            value={moment(props.date).format("YYYY-MM-DD")} 
                            onChange={
                                /* Take the date selected from the date picker and set it to state date */
                                date =>  date !== null ? props.setDate(date) : null }
                            style={{ display: "flex" }}
                            /*  Format the date to match the api date querystring format*/
                            dateFormat={"YYYY-MM-DD"}
                            /* Limit the datepicker to dates after the first apod */
                            minDate={props.beginning}
                             /* Limit the datepicker to dates bofore today */
                            maxDate={props.today}
                        />
                    </FormGroup>
                    <ButtonContainer>
                        <Button 
                            onClick={
                                /* Calls the subtract date function from the parent */
                                ()=>{props.dateSub(props.date)}} 
                            outline color="secondary"
                            disabled={
                                /* Disable the previous button if it's the date of the first apod */
                                props.beginning >= moment(props.date).format("YYYY-MM-DD") ? true : false }
                        >
                            previous
                        </Button>
                        <Button 
                            onClick={
                                 /* Calls the add date function from the parent */
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