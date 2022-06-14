import React from 'react';
import styled from "styled-components";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import swal from 'sweetalert';

const Container = styled.div`
    width: 100%;
    height: 1300px;
    margin-top: -70px;
    background: linear-gradient(rgba(223, 217, 239, 1),rgba(222, 226, 241, 1));
    background-size: cover;
    display: flex;
    flex-flow: column;

    @media screen and (max-width: 428px){
        height: 1500px;
    }
`;
const ContainerAccordion = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
`;
const Title = styled.h1`
    justify-content: center;
    text-align: center;
    position: relative;
    top: 6%;

    @media screen and (max-width: 1440px){
        top: 6%;
    }
    @media screen and (max-width: 428px){
        top: 5%;
    }
`;
const Title2 = styled.h2`
    justify-content: center;
    text-align: center;
    position: relative;
    top: 500px;
    font-size: 36px;

    @media screen and (max-width: 1180px){
        top: 550px;
    }
    @media screen and (max-width: 1024px){
        top: 550px;
    }
    @media screen and (max-width: 428px){
        top: 550px;
    }
`;
const Accordion = styled.div`
    width: 80%;
    color: #fff;
    position: absolute;
    top: 19%;

    @media screen and (max-width: 1600px){
        width: 90%;
        top: 25%;
    }
    @media screen and (max-width: 1440px){
        width: 90%;
        top: 25%;
    }
    @media screen and (max-width: 1180px){
        width: 90%;
        top: 15%;
    }
    @media screen and (max-width: 1024px){
        width: 90%;
        top: 15%;
    }
`;
const Item = styled.div`
    background: #674CC4;
    margin-bottom: 30px;
    padding: 2px 2px;
    border-radius: 15px;
`;
const TitleAccordion = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-weight: 400;
    font-size: 20px;
`;
const TextH2 = styled.h2`
    font-weight: 300;
    font-size: 20px;
    padding: 20px;

    @media screen and (max-width: 1180px){
        font-size: 14px;
    }
    @media screen and (max-width: 1024px){
        font-size: 14px;
    }
`;
const Content = styled.div`
    background: #fff;
    color: #212023;
    max-height: 0;
    overflow: hidden;
    padding: 0px 20px;
    border-radius: 0 0 13px 13px;

    &.show{
        height: auto;
        max-height: 9999px;
        padding: 20px 20px;
        transition: 0.3s ease-in-out;
    }

    &.noshow{
        padding: 0px 20px;
        max-height: 0;
        overflow: hidden;
    }
`;
const Plus = styled.span`
    color: #fff;
    padding: 0 10px;
`;
const FormContainer = styled.div`
    position: absolute;
    width: 850px;
    height: 690px;
    left: 0px;
    right: 0px;
    margin: auto;
    top: 610px;
    background: #C5CFF4;
    box-shadow: 15px 15px 40px rgba(103, 76, 196, 0.2), -15px -15px 40px rgba(255, 255, 255, 0.2);
    border-radius: 15px 15px 0 0 ;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1600px){
        width: 650px;
    }
    @media screen and (max-width: 1440px){
        width: 650px;
    }
    @media screen and (max-width: 1180px){
        left: 0;
        width: 100%;
        border-radius: 0;
    }
    @media screen and (max-width: 1024px){
        left: 0;
        width: 100%;
        border-radius: 0;
    }
    @media screen and (max-width: 428px){
        top: 680px;
        height: 820px;
    }
`;
const FormTitle = styled.h2`
    position: absolute;
    font-weight: bold;
    font-size: 30px;
    color: #674CC4;
    left: 20px;
    top: 10px;

    @media screen and (max-width: 1600px){
        font-size: 26px;
    }
    @media screen and (max-width: 1440px){
        font-size: 26px;
    }
    @media screen and (max-width: 428px){
        font-size: 26px;
        top: 0px;
        left: 30px;
    }
`;
const FormSubtitle = styled.p`
    position: absolute;
    left: 20px;
    top: 50px;
    font-weight: 500;
    font-size: 20px;
    display: flex;
    align-items: center;
    color: #212023;

    @media screen and (max-width: 1600px){
        font-size: 14px;
        top: 50px;
    }
    @media screen and (max-width: 1440px){
        font-size: 14px;
        top: 50px;
    }
    @media screen and (max-width: 428px){
        text-align: center;
        top: 40px;
        left: 22.5%;
    }
`;
const Form = styled.form`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
    width: 85%;
    margin-top: 10%;

    @media screen and (max-width: 428px){
        margin-top: 0;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(8, 1fr);
    }
`;
const InputForm = styled.input`
    grid-column: span 2;
    border-radius: 10px;
    background: #fff;
    padding: 20px 10px;
    outline: none;
    border: none;
    margin: 15px;
    
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }  
    
    @media screen and (max-width: 428px){
        grid-column: span 1;
    }
`;
const InputFormMensaje = styled.textarea`
    grid-column: span 4;
    grid-row: span 2;
    border-radius: 10px;
    background: #fff;
    padding: 10px;
    outline: none;
    border: none;
    margin: 15px 15px 0 15px;
    resize: none;

    @media screen and (max-width: 1180px){
        grid-column: span 4;
        grid-row: span 1;
    }
    @media screen and (max-width: 1024px){
        grid-column: span 4;
        grid-row: span 1;
    }
    @media screen and (max-width: 428px){
        grid-column: span 1;
        grid-row: span 2;
        margin: 15px 15px 0 15px;
    }
`;
const ButtonForm = styled.button`
    grid-column: 2/4;
    grid-row: span 1;
    border-radius: 10px;
    background: #674CC4;
    color: #fff;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease;
    text-decoration: none;
    margin: 15px;

    &:disabled {
        opacity: 0.4;
        cursor: auto;
    }
    &:disabled:hover {
        background-color: #674CC4;
        color: #fff;
    }

    &:hover {
        transition: 0.2s ease;
        background: #fff;
        color: #212023;
    }

    @media screen and (max-width: 428px){
        grid-column: span 1;
    }
`;
const DropdownContainter = styled.div`
    grid-column: span 4;
    box-sizing: border-box;
    border-radius: 10px;
    font-size: 14px;
    background: #fff;
    color: -internal-light-dark(black, white); ;
    position: relative;
    user-select: none;
    color: #797775;
 
    height: fit-content;
    margin: 15px;

    @media screen and (max-width: 1180px){
        width: 95%;
        margin: 10px 0;
        display: flex;
        justify-self: center;
        justify-content: space-between;
        align-items: center;
    }
    @media screen and (max-width: 1024px){
        width: 95%;
        margin: 10px 0;
        display: flex;
        justify-self: center;
        justify-content: space-between;
        align-items: center;
    }
    @media screen and (max-width: 428px){
        grid-column: span 1;
        width: 90%;
        margin: 10px 0;
        display: flex;
        justify-self: center;
        justify-content: space-between;
        align-items: center;
    }
`;
const DropdownBtn = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 20px 15px;

    @media screen and (max-width: 1180px){
        width: 100%;
    }
    @media screen and (max-width: 1024px){
        width: 100%;
    }
`;
const DropdownContent = styled.div`
    position: absolute;
    top: 90%;
    left: 0;
    padding: 0;
    background: #fff;
    width: 100%;
    overflow: auto;
    z-index: 1;
    text-align: left;
`;
const DropdownItem = styled.div`
    padding: 15px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover{
        background: #797775;
        color: #fff;
    }
`;

const data = [
    {
        question: '¿Cuántos lugares hay disponibles?',
        answer: 'Revisa nuestra pagina principal y revisa las estadisticas.',
    },
    {
        question: '¿Qué estacionamientos puedo encontrar?',
        answer: 'Por el momento es solo un prototipo pero lo encontras proximamente en tu estacionamiento favorito.',
    },
    {
        question: '¿Puedo pagar mi boleto en la aplcacion?',
        answer: 'Por el momento no. Pero lo podras hacer en un futuro.',
    }
];

const asuntos = [
    {
        id: '1',
        title: 'Envios',
    },
    {
        id: '2',
        title: 'Sugerencias',
    },
    {
        id: '3',
        title: 'Quejas',
    },
    {
        id: '4',
        title: 'Otros',
    }
];

const Ayu = () => {
    const [formNombre, setFormNombre] = useState("");
    const [formApellido, setFormApellido] = useState("");
    const [formCorreo, setFormCorreo] = useState("");
    const [formTelefono, setFormTelefono] = useState("");
    const [formMensaje, setFormMensaje] = useState("");

    const handleNombre = (e) => setFormNombre(e.target.value);
    const handleApellido = (e) => setFormApellido(e.target.value);
    const handleCorreo = (e) => setFormCorreo(e.target.value);
    const handleTelefono = (e) => setFormTelefono(e.target.value);
    const handleMensaje = (e) => setFormMensaje(e.target.value);

    const handleSubmitForm = (e) =>{
        e.preventDefault();
    }
 
    const handleSubmit = async () =>{
        swal({
            title: "Excelente!",
            text: "En unos instantes nuestros xpcialistas se comunicarán contigo",
            icon: "success",
            button: "Aceptar"
        });
    }

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if(selected === i){
            return setSelected(null);
        }

        setSelected(i);
    };

    const [isActiveAsunto, setIsActiveAsunto] = useState(false);
    const [selectedAsunto, setSelectedAsunto] = useState("Asunto");

    return (
        <Container>
            <Title>Preguntas Frecuentes</Title>
            <ContainerAccordion>
                <Accordion>
                    {data.map((item, i) => (
                        <Item key={item.question}>
                            <TitleAccordion onClick={() => toggle(i)}>
                                <TextH2>{item.question}</TextH2>
                                <Plus>{selected === i ? '-' : '+'}</Plus>
                            </TitleAccordion>
                            <Content className={selected === i ? 'show' : 'noshow'}>{item.answer}</Content>
                        </Item>
                    ))}
                </Accordion>
            </ContainerAccordion>
            <Title2>Contacto</Title2>
            <FormContainer>
                <FormTitle>¡No dudes en saludarnos!</FormTitle>
                <FormSubtitle>¡Estamos listos para apoyarte!</FormSubtitle>
                <Form onSubmit={handleSubmitForm}>
                    <InputForm placeholder="Nombre" type="text" name="nombre" id="nombre" onChange={handleNombre}  value={formNombre} required/>
                    <InputForm placeholder="Apellido" type="text" name="apellido" id="apellido" onChange={handleApellido}  value={formApellido} required/>
                    <InputForm placeholder="Correo" type="email" name="email" id="email" onChange={handleCorreo} value={formCorreo} required/>
                    <InputForm placeholder="Teléfono" type="number" name="telefono" id="telefono" onChange={handleTelefono} value={formTelefono} required/>
                    
                    <DropdownContainter required>
                            <DropdownBtn onClick={(e) => setIsActiveAsunto(!isActiveAsunto)}>{selectedAsunto}<ExpandMoreIcon/></DropdownBtn>
                                {isActiveAsunto && (
                                    <DropdownContent>
                                        {asuntos.map((item) => (
                                            <DropdownItem key={item.id} onClick={(e) => {setSelectedAsunto(item.title); setIsActiveAsunto(false);}}>{item.title}</DropdownItem>
                                        ))}
                                    </DropdownContent>
                                )}
                        </DropdownContainter>
                    <InputFormMensaje placeholder="Mensaje" type="text" name="mensaje" id="mensaje" onChange={handleMensaje} value={formMensaje} required/>
                    <ButtonForm disabled={!formNombre || !formApellido || !formCorreo || !formTelefono || !formMensaje} onClick={handleSubmit}>Enviar</ButtonForm>
                </Form>
            </FormContainer>
        </Container>
    );
};

export default Ayu;