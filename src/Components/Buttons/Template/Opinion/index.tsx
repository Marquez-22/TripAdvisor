
import { Button } from "../.."
import { Opinion } from "@/SVG/opinion"

interface ButtonOpinionProps {

}

export const ButtonOpinion = ({ }: ButtonOpinionProps) => {
    return (<>
        <Button styleTemplate="btn3">
            <Opinion/>
            Opinion
        </Button>

    </>)
}