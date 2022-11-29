import Button from "./Button"

const Header = ({titulo}) => {
 
    const saludo = () => {
        console.log("click")
    }
 
    return (
    <header className="header">
        <h1>{titulo}</h1>
        <Button texto="Agregar" color="green" onClick={saludo}/>
        <Button texto="Borrar" color="red" onClick={saludo}/>
    </header>
  )
}

export default Header