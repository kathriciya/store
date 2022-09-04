import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Context } from '../../context/Context';
import NotFoundPage from '../../pages/NotFoundPage';
import { authRoutes, publicRoutes } from '../../routes';

function AppRouter() {
  const { user } = useContext(Context);
  return (

    <Routes>
      { user.isAuth && authRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}

      { publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRouter;
