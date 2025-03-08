import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"

const AppLayout = () =>{
    return(
        <div className="bg-black min-h-screen w-full">
            <Header/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)
