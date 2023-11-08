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
import UpdateBlog from "../Pages/UpdateBlog/UpdateBlog";
import FeaturedBlogs from "../Pages/FeaturedBlogs/FeaturedBlogs";

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
                element: <AllBlogs></AllBlogs>
            },
            {
                path: '/blogDetail/:id',
                element: <BlogDetails></BlogDetails>
            },
            {
                path: '/updateBlog/:id',
                element: <PrivateRouter><UpdateBlog></UpdateBlog></PrivateRouter>
            },
            {
                path: '/featuredBlogs',
                element: <FeaturedBlogs></FeaturedBlogs>
            }
        ]
    },
]);

export default router;