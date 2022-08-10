import '../pages/HomePage.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';

export const Packeges = ({ title, id, notesCount }) => {
    const navigate = useNavigate()
    const HandlePageGrades = () => {
        navigate('/')
    }
    if (!id) return null
    return (
        <div className="grades" onClick={HandlePageGrades}>
            {/* <input id="radio" type="radio" className="radio" /> */}
            <p className="grades-names">{title}</p>
            <div className="grades-icon-number">
                <p className="grades-number">{`${notesCount} notes `}</p>
                <p className="grades-icon">
                    <ChevronRightIcon className='icon-enter' fontSize='large' />
                </p>
            </div>
        </div>
    )
}