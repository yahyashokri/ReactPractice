import React from "react";
import { useRoutes } from "react-router-dom";
import Basket from "./components/Basket.jsx"
import Home from "./components/Home.jsx";

const Routes = () => {
const routes = useRoutes([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/basket",
        element: <Basket/>,
        
    } ,
])
return routes
}
export default Routes