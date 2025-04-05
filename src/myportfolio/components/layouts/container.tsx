import { ReactNode } from "react"
import { Header } from "./navbar"
import { Footer } from "./footer"

type props = {
    children: ReactNode
}
export const Container = ({children}: props) => {
    return (
        <div>
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
    )
}
