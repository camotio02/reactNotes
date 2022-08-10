import SourceIcon from '@mui/icons-material/Source';
import '../pages/pages.css'
import Api from "../Api";
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
export const Notes = ({ title, text }) => {
    const id = useParams()
    const [isActive, setActive] = useState(false);
    const [notasData, setNotasData] = useState([]);
    const toggleClass = () => {
        setActive(!isActive);
    }
    return (
        <div className="wrapper-container-item-all">
            <div className={isActive ? 'wrapper-radio' : 'wrapper-radio-ocultar'}>
                <input id="radio" type="radio" className="radio" />
            </div>
            <div className={isActive ? 'color' : 'wrapper-grades'}>
                <div className="wrapper-grades-name">
                   {title}
                </div>
                <div className="wraperr-time-anotacao">
                    <div className={isActive ? 'wrapper-time-red' : 'wrapper-time'}>17:00</div>
                    <div className={isActive ? 'wrapper-anotacao-red' : 'wrapper-anotacao'}>{text}</div>
                </div>
                <div className="wrapper-iconBackege-gradesNames">
                    <div className="wrapper-iconBackege">
                        <SourceIcon />
                    </div>
                    <div className="wrapper-namesGrades">Minha Vida particular</div>
                </div>
            </div>
        </div>

    )
}