import { Route, createRoutesFromElements } from "react-router";
import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
        path="/"
        element={<Home/>}
        >
            
        </Route>
    )
)
export default router