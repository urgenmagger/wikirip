import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bottomnav">
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/" activeClassName={s.activeLink}>Главная</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/login" activeClassName={s.activeLink}>Войти</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/registration" activeClassName={s.activeLink}>Регистрация</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/addburial" activeClassName={s.activeLink}>Добавить местоположение</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div> 
        </nav>
        </div>
    )
}

export default Navbar;