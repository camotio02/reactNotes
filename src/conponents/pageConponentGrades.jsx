import React from "react"
import '../pages/pages.css'
import SourceIcon from '@mui/icons-material/Source';
import { useState } from "react";

export const ConponentPageGrade = () => {
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        var home = window.document.querySelector('div.homepage')
        console.log('passou', home)
        setActive(!isActive);
    }
    return (
        <>
            <div className="wrapper-container-item-all">
                <div className={isActive ? 'wrapper-radio' : 'wrapper-radio-ocultar'}>
                    <input type="radio" className="radio" />
                </div>
                <div className={isActive ? 'color' : 'wrapper-grades'}>
                    <div className="wrapper-grades-name">
                        Está é a minha Nota mais important
                    </div>
                    <div className="wraperr-time-anotacao">
                        <div className={isActive ? 'wrapper-time-red' : 'wrapper-time'}>17:00</div>
                        <div className={isActive ? 'wrapper-anotacao-red' : 'wrapper-anotacao'}>nenhuma anotação adicional</div>
                    </div>
                    <div className="wrapper-iconBackege-gradesNames">
                        <div className="wrapper-iconBackege">
                            <SourceIcon />
                        </div>
                        <div className="wrapper-namesGrades">Minha Vida particular</div>
                    </div>
                </div>
            </div>
        </>
    )
}