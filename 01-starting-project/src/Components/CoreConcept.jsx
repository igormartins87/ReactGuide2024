


export default function CoreConcept({img,titulo,descricao}){
    return (
      <li>
        <img src = {img} alt={titulo}/>
        <h3>{titulo}</h3>
        <p>{descricao}</p>
      </li>
    )
  }