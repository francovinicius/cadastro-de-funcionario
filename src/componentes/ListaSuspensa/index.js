import './ListaSuspensa.css'


const ListaSuspensa = (props) => {
    console.log(props.itens);

    // {props.itens.map(item => <option>{item}</option>)} > Para cada item retorna uma option
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => {return <option key={item}>{item}</option>
            })}
            </select>
        </div>
    )
};

export default ListaSuspensa;