import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import FormikPage from '../pages/Formik';
import Navigation from '../components/RouterApp/Navigation';

const RouterApp = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <Navigation />

                <Routes>
                    <Route
                        path="formik"
                        element={<FormikPage />}
                    />

                    <Route
                        path="home"
                        element={<h1>Home Page</h1>}
                    />

                    <Route
                        path="users"
                        element={<h1>Users Page</h1>}
                    />

                    <Route
                        path="about"
                        element={<h1>About Page</h1>}
                    />

                    <Route
                        path="/*"
                        element={
                            <Navigate
                                replace
                                to="formik"
                            />
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default RouterApp;
