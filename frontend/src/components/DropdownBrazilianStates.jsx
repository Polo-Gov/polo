import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

const DropdownBrazilianStates = ({onChange = () => {}}) => {

    const [state, setState] = useState([])

    // https://servicodados.ibge.gov.br/api/v1/localidades/distritos
    const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1'

    const fetchStates = () => {
        const url = `${BASE_URL}/localidades/estados`
        axios.get(url).then((data) => {
            setState(data.data)
        })
    }

    useEffect(() => {
        fetchStates()
    })


    return (
        <select className="border-2 border-gray-400 rounded-lg w-64 text-center" name="state" id="State" onChange={onChange}>
            <option value="">Selecione um estado</option>
            {state.map((state)=>{
                const {sigla, nome} = state;
                return (<option key={sigla} value={sigla}>{nome}</option>)

            })}
        </select>
    )
}

export default DropdownBrazilianStates
