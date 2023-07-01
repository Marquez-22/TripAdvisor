
import { Bell } from "@/SVG/bell"
import { Button } from "../.."


interface ButtonAlertasProps {

}

export const ButtonAlertas= ({ }: ButtonAlertasProps) => {
    return (<>
        <Button styleTemplate="btn3">
            <Bell/>
          Alertas
        </Button>

    </>)
}