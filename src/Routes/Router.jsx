import { createBrowserRouter } from "react-router-dom";
import Root from './../layout/Root';
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ErrorPage from "../components/Errorpage/ErrorPage";
import AddBlog from "../Pages/Add Blog/AddBlog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addBlog',
                element: <AddBlog></AddBlog>
            }
        ]
    },
]);

export default router;