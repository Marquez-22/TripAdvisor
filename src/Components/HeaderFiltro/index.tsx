
import { CalendarDays } from "@/SVG/calendarDays"
import { Button } from "../Buttons"
import { InputSelect } from "../InputSelect"
import { LocationDot } from "@/SVG/locationDot"

type HeaderFiltroType = "HeaderFiltro1" | "HeaderFiltro2" | "HeaderFiltro3"
interface HeaderFiltroProps {
    styleTemplate?: HeaderFiltroType


}

export const HeaderFiltro = ({ styleTemplate = "HeaderFiltro1" }: HeaderFiltroProps) => {
    return (<>
        <div className={`HeaderFiltro ${styleTemplate}`}>
            <div className="calendar">
                <Button styleTemplate="btn2">
                    <CalendarDays />
                    Ingrese las fechas
                </Button>
            </div>

            <Button styleTemplate="btn1">
                <LocationDot />
                Mapa
            </Button>
            <InputSelect styleTemplate="InputSelect1"
                placeholder="Favoritos de viajeros"
            />




        </div>

    </>)
}