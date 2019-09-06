import React, {useEffect, useState} from 'react';

import api from '../services/api'

export default function Main(){
  const [deficiencia, setDefs] = useState([])
  useEffect(() => {
    async function loadDef(){
      const response = await api.get('/def')
      setDefs(response.data);
    }
    loadDef();
  })
  return (
    <div className="main-container">
      <ul>      
      {deficiencia.map(defs => (
        <li>
          <strong>Nome: {defs.nome}</strong><br></br>
          <strong>Descrição: {defs.descricao}</strong><br></br>
          <strong>{defs.caracteristicas}</strong><br></br>
          <strong>Técnicas de Ensino: {defs.tecnicasEnsino}</strong><br></br>
          <strong>Associações: {defs.associacoes}</strong><br></br>
          <strong>Grupo de Apoio: {defs.gruposApoio}</strong><br></br>
          <strong>Especialistas: {defs.especialistas}</strong>          
        </li>
      ))}        
      </ul>    
    </div>

    //async function getDef() {
    //   try {
    //     //const id = await getUser();
    //     const response = await api.get('/def');
    //     console.log(response);
    //   } catch (error) {
    //     console.error('error');
    //   }
    // }
    // getDef();
    
  )
}