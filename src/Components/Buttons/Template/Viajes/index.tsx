
import { Trips } from "@/SVG/trips"
import { Button } from "../.."

import React from "react"

interface ButtonViajesProps {

}

export const ButtonViajes = ({ }: ButtonViajesProps) => {
    return (<>
        <Button styleTemplate="btn3">
            <Trips />
            Viajes
        </Button>

    </>)
}