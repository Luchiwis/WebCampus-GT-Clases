import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "./Error404.css"
export function Error404() {
    const params = useParams()
    return (
        <>
            <h1 className="error404">ERROR 404</h1>
            <h2 className="error404">PAGE NOT FOUND</h2>
            <p>La pagina {params["*"]} No existe</p>
            <button className="tagA"><Link className="tagA" to="/">Volver</Link></button>
        </>
    )
}