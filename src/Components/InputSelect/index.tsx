import { ReactNode } from "react"

type InputSelectType = "InputSelect" | "InputSelect1"|"InputSelect2"
interface InputSelectProps {
    styleTemplate?: InputSelectType
    placeholder:string

}

export const InputSelect = ({  placeholder,styleTemplate = "InputSelect" }: InputSelectProps) => {
    return (<>
        <div className={`InputSelect ${styleTemplate}`}>
            <select className="select" name="select">
              <option value="value1">Value 1</option>
              <option value="value2" selected>Value 2</option>
              <option value="value3">Value 3</option>
            </select>
        </div>
    </>)
}