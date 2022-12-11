import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

const DropdownBrazilianCities = ({state_,onChange}) => {

    const [state, setState] = useState([])

    // https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios
    const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1'

    const fetchCitiesForState = (estado) => {
        const url = `${BASE_URL}/localidades/estados/${estado}/municipios`
        axios.get(url).then((data) => {
            setState(data.data)
        })
    }

    useEffect(() => {
        fetchCitiesForState(state_)
    },[state_])


    return(
        <select id="state" className="border-2 border-gray-400 rounded-lg w-64 text-center" onChange={onChange}>
            <option value="">Selecione uma cidade</option>
            {state.map((city)=>{
                const {id,nome} = city
                return(<option key={id} value={nome}>{nome}</option>)
            })}
        </select>
    )
}


export default DropdownBrazilianCities