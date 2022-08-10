import React, { useState } from "react";
import './writerPageGrades.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import IosShareIcon from '@mui/icons-material/IosShare';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BrushIcon from '@mui/icons-material/Brush';
import GradingIcon from '@mui/icons-material/Grading';
import { useNavigate } from "react-router-dom";
import ClearIcon from '@mui/icons-material/Clear';
import GridOnIcon from '@mui/icons-material/GridOn';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import AddIcon from '@mui/icons-material/Add';
export const WriterPageGrades = () => {
    const navigate = useNavigate()
    const [text, setText] = useState({
        title: ''
    })
    const handleBack = () => {
        navigate('/folder/:id')
    }
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    }
    const [isok, setIsok] = useState(false);
    const handleMenuGrades = () => {
        setIsok(!isok);
    }
    const [onInputs, setOnInputs] = useState(false);
    const [ok, setOk] = useState(false)
    const menuItensTextarea = () => {
        setOnDocs(false)
        setOnFormAddOnDocs(false)
        return setOnInputs(!onInputs)
    }
    const [onDocs, setOnDocs] = useState(false);
    const showDocs = () => {
        setOnInputs(false)
        setOnDocs(!onDocs)
    }
    const [onFormAdd, setOnFormAddOnDocs] = useState(false);
    const formAdd = () => {
        setOnInputs(!onInputs)
        setOnFormAddOnDocs(!onFormAdd)
    }
    const tempos = () => {


        var data = new Date();
        var dia = data.getDate();           // 1-31
        var mes = data.getMonth();
        if (mes == 0) {
            mes = 'Janeiro'
        } else if (mes == 1) {
            mes = 'Fevereiro'
        } else if (mes == 2) {
            mes = 'Março'
        } else if (mes == 3) {
            mes = 'Abril'
        } else if (mes == 4) {
            mes = 'Maio'
        } else if (mes == 5) {
            mes = 'Junho'
        } else if (mes == 6) {
            mes = 'Julho'
        } else if (mes == 7) {
            mes = 'Agosto'
        } else if (mes == 8) {
            mes = 'Setembro'
        } else if (mes == 9) {
            mes = 'Outubro'
        } else if (mes == 10) {
            mes = 'Novenbro'
        } else if (mes == 11) {
            mes = 'Dezembro'
        } else {
            return mes
        }
        var ano4 = data.getFullYear();
        var hora = data.getHours();
        var min = data.getMinutes();
        var dia_sem = data.getDay();
        if (dia_sem == 0) {
            dia_sem = 'Domingo'
        } else if (dia_sem == 1) {
            dia_sem = 'Segunda-Feira'
        } else if (dia_sem == 2) {
            dia_sem = 'Terça-Feira'
        } else if (dia_sem == 3) {
            dia_sem = 'Quarta-Feira'
        } else if (dia_sem == 4) {
            dia_sem = 'Quinta-Feira'
        } else if (dia_sem == 5) {
            dia_sem = 'Sexta-Feira'
        } else if (dia_sem == 6) {
            dia_sem = 'Sabado'
        } else if (dia_sem == 7) {
            dia_sem = 'Domingo'
        } else {
            return dia_sem
        }
        var divDate = document.querySelector('div#text')
        var str_hora = hora + ':' + min
        var horasformatadas = (`${dia}  de  ${mes}  de  ${ano4} - ${str_hora}`).toString()
        divDate.innerHTML = horasformatadas;
    }
    const handleTextarea = (e) => {
        const inputName = e.target.name
        const inputValue = e.target.value
        setText(oldState => {
            return {
                ...oldState,
                [inputName]: inputValue
            }
        })

    }
    const ClearInput = () => {
        const title = document.querySelector('textarea').value
        if (title.length > 0) {
            alert('você quer apagar o texto do input??')
            setText({
                title: ''
            })
        }
    }
    return (
        <>

            <div className={isActive ? 'wrapper-container-ocultar' : 'wrapper-container'}>
                <div className={onDocs ? "wrapper-documents" : "wrapper-documents-ocultar"}>
                    <div className="scaner-docs">
                        <div className="scaner-doc">Escanear Documentos</div>
                        <div className="scaner-doc"> Tirar Foto ou Gravar Vídeo</div>
                        <div className="scaner-doc">Galeria</div>
                        <div className="scaner-doc">Adicionar Desenho</div>
                    </div>
                    <div onClick={showDocs} className="scaner-doc scaner-cancel">Cancelar</div>
                </div>
                <div className="wrapper-top">
                    <div className="wrapper-widtgh-top">
                        <div className="left">
                            <div className="wrapper-icon-back" onClick={handleBack}>
                                <ArrowBackIosIcon />
                                <div className="wrapper-icon-back">ICloud</div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="wrapper-icon-bottom">
                                <PersonAddIcon className="icon-bottom" />
                                <IosShareIcon onClick={toggleClass} className="icon-bottom" />
                                <div className={onInputs ? "icon-bottom2" : "icon-bottom2-ocultar"}>OK</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper-writer-grades">
                    <div id="text" className="wrapper-time"></div>
                    <div className="wrapper-input-text">
                        <textarea
                            value={text?.title}
                            name="title"
                            onChange={handleTextarea}
                            onFocus={menuItensTextarea}
                            resize="none"
                            type="textarea"
                        />
                    </div>
                </div>
                <div className="wrapper-bottom 1">
                    <div className="wrapper-widtgh-bottom">
                        <DeleteIcon className="icon-bottom" />
                        <CheckCircleOutlineIcon className="icon-bottom" />
                        <AddCircleIcon onClick={showDocs} className="icon-bottom" />
                        <BrushIcon className="icon-bottom" />
                        <GradingIcon onClick={ClearInput} className="icon-bottom" />
                    </div>
                </div>
                <div onClick={formAdd} className={onFormAdd ? "wrapper-types-form-add" : "wrapper-types-form-add-ocultar"}>
                    <AddIcon className="icon-bottom" />
                </div>
                <div className={onInputs ? 'wrapper-writes-types' : 'wrapper-writes-types-ocultar'}>
                    <div className="writes-types ">
                        <GridOnIcon className="icon-bottom" />
                        <div className="icon-bottom">Aa</div>
                        <CheckCircleIcon className="icon-bottom" />
                        <AddCircleOutlineIcon onClick={showDocs} className="icon-bottom" />
                        <ModeEditOutlineIcon className="icon-bottom" />
                        <ClearIcon onClick={formAdd} className="icon-bottom" />
                    </div>
                </div>
            </div>
            <div className={isActive ? 'wrapper-absulute' : 'wrapper-absulute-ocultar'}>
                <div onClick={handleMenuGrades} className='wrapper-btn'> Linhas e Grades</div>
                <div onClick={toggleClass} className="wrapper-btn">Cancelar</div>
            </div>
            <div className={isok ? 'wrapper-container2' : 'wrapper-container2-ocultar'}>
                <div className="wrapper-logos-grades">
                    <div className="logos-grades">
                        <div onClick={handleMenuGrades}>Cancelar</div>
                        <div>Linhas e Grades</div>
                    </div>
                </div>
                <div className="wrapper-tipo-input">
                    <div className="tipo-input"></div>
                </div>
            </div>

        </>
    )
}