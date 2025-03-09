import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import About from "./components/About.js"


const AppLayout = () =>{
    return(
        <div className="bg-black min-h-screen w-full">
            <Header/>
            <Outlet/>
        </div>
    )
}

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body/>

            },
            {
                path: "/about",
                element: <About/>
            },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={AppRouter}/>)
