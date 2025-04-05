import { ReactNode } from "react"
import { Header } from "./navbar"
import { Footer } from "./footer"

type props = {
    children: ReactNode
}
export const Container = ({children}: props) => {
    return (
        <div className="bg-[#0b1225]">

            <div className="relative w-full h-screen overflow-hidden bg-[#0b1225]">
            
                <div className="absolute inset-0 animate-waves bg-[url('/waves.svg')] bg-repeat-x bg-[length:200%_100%] opacity-20 z-0" />
                
                <div className="relative z-10 flex items-center justify-center h-full text-white">
            
                    <h1 className="text-4xl font-bold">Meu Portfólio Elegante</h1>
            
                    <p className="text-white">Olala</p>

                    <div>
                        <Header />
                    </div>
                    <div>
                        {children}
                    </div>
                    <div>
                        <Footer/>
                    </div>


                </div>

            </div>

        </div>
    )
}
