// import { useLocation } from "react-router-dom"
import { Calendar } from "../components/Calendar"

function Calendario() {
    // const { search } = useLocation()
    // const params = Object.fromEntries(new URLSearchParams(search));

    return (
        <>
            <h1>Este es mi calendario</h1>
            <div className="centrar">
                <Calendar />

            </div>
        </>

    )
}

export { Calendario }