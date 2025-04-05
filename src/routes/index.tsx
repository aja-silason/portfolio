import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "../myportfolio/home"

export function RoutePath () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </Router>
    )
}