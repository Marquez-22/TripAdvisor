import { ReactNode } from "react"
import {Text}from "../Text"

type InputCheckboxType = "InputCheckbox" | "InputCheckbox1" 
interface InputCheckboxProps {
    styleTemplate?: InputCheckboxType
    children?: ReactNode
    onChecked?:()=>void

}

export const InputCheckbox = ({  onChecked,children, styleTemplate = "InputCheckbox" }: InputCheckboxProps) => {
    return (<>
        <label className={`InputCheckbox ${styleTemplate}`}>
            <input className="checkbox" type="checkbox"  />
            <Text styleTemplate="text5">

            {children}
            </Text>
        </label>
    </>)
}