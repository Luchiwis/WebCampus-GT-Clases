import { useParams, useSearchParams } from "react-router-dom"

import { useEffect } from "react"

export function Event() {
    const params = useParams()
    const [searchParams, setSearchParams] = useSearchParams()


    const title = searchParams.get("title")
    const date = searchParams.get("date")
    const stargingHour = searchParams.get("stargingHour")
    const endingHour = searchParams.get("endingHour")
    const creator = searchParams.get("creator")
    console.log(title, date, stargingHour, endingHour, creator)

    return (
        <>
            <ul>
                <li> id: {params.id}</li>
                <li> titulo: {title}</li>
                <li> fecha: {date}</li>
                <li> empieza a las: {stargingHour} </li>
                <li> termina a las: {endingHour}</li>
                <li> Creado por: {creator}</li>
            </ul>
        </>
    )
}