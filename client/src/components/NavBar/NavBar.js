import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import s from './NavBar.module.css';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const handleClickAdmin = () => {
    navigate(ADMIN_ROUTE);
  };

  const handleClickLogin = () => {
    navigate(LOGIN_ROUTE);
  };

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink className={s.colorSelect} to={SHOP_ROUTE}>КупиДевайс</NavLink>
        {user.isAuth
          ? (
            <Nav className={cn('ml-auto', s.colorSelect)}>
              <Button
                className={s.btn}
                variant="outline-light"
                onClick={handleClickAdmin}
              >
                Админ панель
              </Button>
              <Button
                variant="outline-light"
                onClick={() => logOut()}
              >
                Выйти
              </Button>
            </Nav>
          )
          : (
            <Nav className={cn('ml-auto', s.colorSelect)}>
              <Button variant="outline-light" onClick={handleClickLogin}>Авторизация</Button>
            </Nav>
          )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
