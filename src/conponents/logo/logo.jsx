import React from "react";
import './logo.css'
import Temotio from '../../assets/workheader-apple-notes.jpg'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const LogoGradesIcon = () => {
    const [showLoop, setShowLoop] = useState(false)
    const navigate = useNavigate()
    const handleIndex = () => {
        setShowLoop(true)
        setTimeout( function  () {
            setShowLoop(false)
            navigate("/HomeScreen")
        }, 6000);
    }
    return (
        <div className="wrapper-logoGrades">
            <div className={showLoop? "wrapper-center-lopp": "wrapper-center"}>
                <div className={showLoop ? "loop" : "loop-ocultar"}>
                    <div className="load"></div>
                    <p className="animacion">INICIANDO O SISTEMA...</p>
                </div>
                <div className="wrapper-h2-description">
                    <h1 className="wrapper-h2">Usar o app Notas no iPhone, iPad e iPod touch</h1>
                    <div className="wrapper-description">Com o app Notas, você pode anotar e desenhar ideias,
                        criar listas de verificação
                        e muito mais. Além disso, com o iCloud,
                        é possível manter as notas atualizadas em
                        todos os dispositivos.
                    </div>
                </div>
                <div className="wrapper-image-continuar">
                    <div className="wrapper-image">
                        <img className="image" src={Temotio} alt="" />
                    </div>
                    <div className="wrapper-deseja-continuar">
                        <h2 className="wrapper-indroduçao">Introdução</h2>
                        <p>
                            Verifique se o iPhone, iPad ou iPod touch têm a versão mais recente do iOS ou iPadOS.
                        </p>
                        <p>
                            Para usar os recursos mais recentes do app Notas,
                            veja se você o configurou com o iCloud ou se as notas estão salvas no dispositivo.
                            Vários recursos do app Notas não funcionam com outros provedores e e-mail.
                        </p>
                    </div>
                </div>
                <div onClick={handleIndex} className="wrapper-Button">Continuar</div>
            </div>
        </div>
    )
}