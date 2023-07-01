import { MagnifyingGlass } from "@/SVG/magnifyinGlass"

type InputSearchType = "input1"

interface InputSearchProps {
    type?: InputSearchType
}

export const InputSearch = ({ type = "input1" }: InputSearchProps) => {
    return (<>
        <div className={`InputSearch ${type}`}>
            <MagnifyingGlass/>
            <input className="input"
                type="text"
                placeholder=""
            />
        </div>


    </>)
}