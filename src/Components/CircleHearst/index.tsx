import { ReactNode } from "react"
import{Heart} from "@/SVG/heart"

type CircleHeartsType = "CircleHearts1" | "CircleHearts2" | "CircleHearts3"
interface CircleHeartsProps {
    styleTemplate?: CircleHeartsType
    onClick?: () => void

}

export const CircleHearts = ({ onClick, styleTemplate = "CircleHearts1" }: CircleHeartsProps) => {
    return (<>
        <div className={`CircleHearts ${styleTemplate}`}
            onClick={onClick}>
            <Heart/>

        </div>

    </>)
}