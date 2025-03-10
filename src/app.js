import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Header from './components/Header.js'
import Main from './components/Main.js'
import About from './components/About.js'
import Error from './components/Error.js'
import Projects from './components/Projects.js'
import Footer from './components/Footer.js'

const AppLayout = () =>{
    return(
        <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children:[
            {
                path: "/",
                element: <Main/>

            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/projects",
                element: <Projects/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={AppRouter}/>)
