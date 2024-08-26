import { useParams } from "react-router-dom"

export function Trabajo() {
    const { numero } = useParams()
    return (
        <>
            <h1>Trabajo N° {numero}</h1>
        </>
    )
}