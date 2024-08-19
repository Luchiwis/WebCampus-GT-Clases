import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export function Error404() {
    const params = useParams()
    return (
        <>
            <h1>ERROR 404</h1>
            <h2>PAGE NOT FOUND</h2>
            <p>La pagina {params["*"]} No existe</p>
            <Link className="tagA" to="/">Volver a la pagina principal</Link>
        </>
    )
}