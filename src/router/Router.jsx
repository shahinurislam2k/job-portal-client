import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import MainLayout from '../layout/MainLayout';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h1>Route not found</h1>,
        children: [
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
            }
        ]
      },
]);

export default Router;