
import { useState } from "react";

const Form = () => {
    const [usuario, setUsuario] = useState({
        nombre: '',
        edad: '',
        comidaFav: '',
    })

    /*const [show, setShow] = useState (false)*/
    
    const onSubmit = (e) => {
        e.preventDefault();
        alert(<h3>¡Hola {usuario.nombre}, a nosotros también nos encantan l@s {usuario.comidaFav}</h3>); 

        /*if(usuario.nombre.length <=3 && usuario.comidaFav.length <=6) {
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }*/
    }

    return (
        <div>

        <form>
        
            <label>¿Cuál es tu nombre?</label>
            <input type='text' onChange={({target}) => setUsuario({...usuario, nombre: target.value})}></input>
            <label>¿Cuantos años tienes?</label>
            <input type='text' onChange={({target}) => setUsuario({...usuario, nombre: target.value})}></input>
            <label>¿Cuál es tu comida favorita? Min 6 caracteres</label>
            <input type='text' onChange={({target}) => setUsuario({...usuario, nombre: target.value})}></input>
            <button type= 'submit' onClick={onSubmit}>Enviar</button>

        </form>

        {/*{show && <h3>¡Hola {nombre}, a nosotros también nos encantan l@s {comidaFav}</h3>}
        {err && <p>Por favor, chequea que la información sea correcta</p>}*/}

    </div>
    )

}

export default Form;