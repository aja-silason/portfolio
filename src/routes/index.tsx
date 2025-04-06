import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "../myportfolio/home"
import { NotFound } from "../myportfolio/notfound"

export function RoutePath () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </Router>
    )
}