import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFoundPage';
import { authRoutes, publicRoutes } from '../../routes';

const AppRouter = () => {
    const isAuth = false;
    return (
        <Routes>
            { isAuth && authRoutes.map(({path, Component}) => {
                return <Route key = {path} path={path} element={Component} />
            })
            }
            { publicRoutes.map(({path, Component}) => {
                return <Route key = {path} path={path} element={Component} />
            })
            }
            <Route path='*' element={<NotFoundPage/>} />
        </Routes>
    );
};

export default AppRouter;