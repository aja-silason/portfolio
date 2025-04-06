import { ReactNode } from "react"
import { MenuMobile } from "../menu/menu.mobile";
import { useWindowWidth } from "../../hook/behavior/useResponsivity";

type props = {
    children: ReactNode
}
export const Container = ({children}: props) => {

    const width = useWindowWidth()

    return (
        <div className="bg-[#0b1225]">

            <div className="relative w-full h-screen overflow-hidden bg-[#0b1225]">
                <div className="absolute inset-0 animate-waves bg-[url('/waves.svg')] bg-repeat-x bg-[length:200%_100%] opacity-20 z-0" />
                <div className="absolute bg-transparent inset-0 z-0 h-full stars"/>

                
                <div className="relative z-10 flex items-center justify-center h-full text-white overflow-hidden flex-col">
                
                    <div className={`z-50 sx:absolute w-full ${width >= 850 ? 'hidden' : 'block'}`}>
                        <MenuMobile/>
                    </div>

                    <div className="md:w-[960px] md:h-[720px] w-full p-[1em] overflow-hidden overflow-y-auto md:m-0 mb-[5em]">
                        {children}
                    </div>
                </div>

            </div>

        </div>
    )
}
