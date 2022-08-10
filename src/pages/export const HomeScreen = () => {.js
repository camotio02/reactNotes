export const HomeScreen = () => {
    const [gradeNames, setGradeNames] = useState([]);
    const [blocoNotas, setBlocoNotas] = useState(
    )
    useEffect(() => {
        async function fetchData() {
            const results = await Api.listGrades([])
            setGradeNames(results);
        }
        fetchData();
    }, []);
    const [isActive, setActive] = useState(false);
    const handleChangeEmail = (e) => {
        const newEmail = e.target.value;
        setBlocoNotas(newEmail);
    }
    const toggleClass = () => {
        var home = window.document.querySelector('div.homepage')
        setActive(!isActive);
    }
    const saveGrades = async () => {
        if(blocoNotas) {
          alert('Você esta muito louco, os espaços estão vazios', blocoNotas)
            setBlocoNotas({})
        } else {
            // const list = await Api.createGrades(blocoNotas);
            // console.log('nova lista do firebase', list)
            // setBlocoNotas('')
            // toggleClass()
        }
    }
    return (
        <div className={isActive ? 'wrapper-home-page-ocultar' : 'homepage'}>
            <div className="edit-packege-div">
                <div className="package-name-scroll">
                    <p className="packege-p-scroll"></p>
                </div>
                <div className="edit-packeges">Editar</div>
            </div>
            <div className={isActive ? 'conainer-center' : 'ocultar'} >
                <div className="center-input">
                    <h1>Nova Pasta</h1>
                    <p >Digite um nome para está pasta.</p>
                    <input type='text' placeholder='Nome' onChange={handleChangeEmail} value={blocoNotas} />
                    <div className="grades-newpage">
                        <div onClick={toggleClass} className={isActive ? 'cancelar' : 'ocultar'}>Cancelar</div>
                        <div onClick={saveGrades} className="salvar">Salvar</div>
                    </div>
                </div>
            </div>
            <div className="contain">
                <div className="grades-edit-namePackege">
                    <h1 className="package-name">Pastas</h1>
                </div>
                <div className="packeges">
                    <div className="packege">
                        <div className="grades-items">GMAIL</div>
                        {
                            gradeNames?.map((item) => {
                                return (
                                    <Packeges key={item.name} notas={item} />
                                )
                            })
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
    )
}