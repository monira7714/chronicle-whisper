import { createBrowserRouter } from "react-router-dom";
import Root from './../layout/Root';
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ErrorPage from "../components/Errorpage/ErrorPage";
import PrivateRouter from "./PrivateRouter";
import AddBlog from './../Pages/AddBlog/AddBlog';
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";

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
                element: <PrivateRouter><AddBlog></AddBlog></PrivateRouter>
            },
            {
                path: '/allBlogs',
                element: <PrivateRouter><AllBlogs></AllBlogs></PrivateRouter>
            },
            {
                path: '/blogDetail/:id',
                element: <PrivateRouter><BlogDetails></BlogDetails></PrivateRouter>
            },
        ]
    },
]);

export default router;