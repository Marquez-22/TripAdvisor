type LogoType="logoType"

interface LogoProps{
    styleTemplate?: LogoType

}

export const Logo =({styleTemplate="logoType"}:LogoProps)=>{
    return(<>
    <div className={`logo ${styleTemplate}`}>
        <img src="/img/tripvisor1.png"></img>
    </div>
    </>)
}