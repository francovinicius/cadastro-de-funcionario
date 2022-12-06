import './ListaSuspensa.css'


const ListaSuspensa = (props) => {
    console.log(props.itens);

    // {props.itens.map(item => <option>{item}</option>)} > Para cada item retorna uma option
    return (
        <div>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => {<option key={item}>{item}</option>
            })}
            </select>
        </div>
    )
};

export default ListaSuspensa;