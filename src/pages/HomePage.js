import React, { useEffect, useState } from "react";
import { Packeges } from "../conponents/packege";
import './HomePage.css';
import '../conponents/newPage.css'
import Api from '../Api'
import { Link, useParams } from "react-router-dom";
export const HomeScreen = () => {
    const id = useParams()
    const [scroll, setScroll] = useState(false)
    const [gradeNames, setGradeNames] = useState([]);
    const [notas, setNotas] = useState(
        {
            title: ''
        }
    )
    const handleOnChange = (e) => {
        const inputName = e.target.name
        const inputValue = e.target.value
        setNotas(oldState => {
            return {
                ...oldState,
                [inputName]: inputValue
            }
        })
    }
    const [showLoop, setShowLoop] = useState(false)
    const saveGrades = async () => {
        const input = document.querySelector('input').value
        if (input.length > 0) {
            setShowLoop(!showLoop)
            const list = await Api.createGrades(notas);
            setShowLoop(false)
            setNotas({
                title: ''
            })
            setActive(!isActive);
            return
        } else {
            alert('Dados Invalidos')
        }
    }
    useEffect(() => {
        async function fetchData() {
            const results = await Api.listGrades([])
            setGradeNames(results);
        }
        fetchData();
    }, []);
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        var home = window.document.querySelector('div.homepage')
        setNotas({
            title: ''
        })
        setActive(!isActive);
        console.log(home)
    }
    const HandleScroll = (e) => {
        const height = e.target.offsetHeight;
        console.log(e)
        if(height > 800) {
            setScroll(true)
            return
        }
        setScroll(false)
    }
    console.log("scroll", scroll)
    return (
        <>
            <div className={isActive ? 'wrapper-home-page-ocultar' : 'homepage'}>
                <div className="edit-packege-div">
                    <div className="package-name-scroll">
                        <p className="packege-p-scroll"></p>
                    </div>
                    <div className="edit-packeges">Editar</div>
                </div>
                <div className={isActive ? 'conainer-center' : 'ocultar'} >
                    <div className={showLoop ? "loop" : "loop-ocultar"}>
                        <div className="load"></div>
                    </div>
                    <div className="center-input">
                        <h1>Nova Pasta</h1>
                        <p >Digite um nome para está pasta.</p>
                        <input className="text" type='text' name="title" placeholder='Nome' onChange={handleOnChange} value={notas?.title} />
                        <div className="grades-newpage">
                            <div onClick={toggleClass} className={isActive ? 'cancelar' : 'ocultar'}>Cancelar</div>
                            <div onClick={saveGrades} className="salvar">Salvar</div>
                        </div>
                    </div>
                </div>

                <div className="contain" onScroll={HandleScroll}>
                    <div className="grades-edit-namePackege">
                        <h1 className="package-name">Pastas</h1>
                    </div>
                    <div className="packeges">

                        <div className="grades-items">GMAIL</div>
                        <div className="packege">

                            {
                                gradeNames?.map((item) => (
                                    <Link to={'/folder/' + item.id}>
                                        <Packeges key={item.title} {...item} />
                                    </Link>
                                )
                                )
                            }
                        </div>
                    </div>
                </div>

                <div className="new-packege">
                    <div onClick={toggleClass} className="new-packege-add">
                        Nova Pasta
                    </div>
                </div>
            </div>
        </>
    )
}