import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import Create from "../pages/Create/Create";
import Booked from "../pages/Booked/Booked";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/services.json'),
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: () => fetch('/services.json'),
            },
            {
                path: '/create',
                element: <PrivateRoute><Create></Create></PrivateRoute>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/booked',
                element: <PrivateRoute><Booked></Booked></PrivateRoute>,
                loader: () => fetch('/services.json')
            }
        ]
    }
])


export default router;