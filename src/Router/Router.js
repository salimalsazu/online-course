import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Congratulation from '../Congratulation/Congratulation';
import Error from '../Error/Error';
import About from '../Pages/About';
import AllCourseDetails from '../Pages/AllCourseDetails';
import AllCourses from '../Pages/AllCourses';
import Blogs from '../Pages/Blogs';
import Carts from '../Pages/Carts';
import CourseCard from '../Pages/CourseCard';
import DetailsPage from '../Pages/DetailsPage';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Main from '../Pages/Main';
import Register from '../Pages/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://courseserver.vercel.app/hero'),
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <AllCourses></AllCourses>,
                children: [
                    {
                        path: '/course',
                        loader: () => fetch('https://courseserver.vercel.app/course'),
                        element: <AllCourseDetails></AllCourseDetails>
                    },
                    {
                        path: '/course/:name',
                        loader: ({ params }) => fetch(`https://courseserver.vercel.app/category/${params.name}`),
                        element: <CourseCard></CourseCard>
                    }
                ]
            },
            {
                path: '/detail/:name',
                loader: ({ params }) => fetch(`https://courseserver.vercel.app/course/${params.name}`),
                element: <DetailsPage></DetailsPage>
            },
            {
                path: '/carts/:name',
                loader: ({ params }) => fetch(`https://courseserver.vercel.app/course/${params.name}`),
                element: <PrivateRoute><Carts></Carts></PrivateRoute>
            },
            {
                path: '/blog',
                loader: () => fetch('https://courseserver.vercel.app/blog'),
                element: <Blogs></Blogs>
            },
            {
                path: '/faq',
                loader: () => fetch('https://courseserver.vercel.app/faq'),
                element: <About></About>
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
                path: '/congrats',
                element: <Congratulation></Congratulation>
            }
        ]

    },
    {
        path: '*',
        element: <Error></Error>
    }
])

export default router;