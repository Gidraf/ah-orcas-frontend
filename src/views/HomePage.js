import React from 'react';
import Home from '../components/HomePage/App';
import { NavBarComponent, FooterComponent } from '../components/NavBar/App';
// importing the connected app with Authlogin as name
import AuthLogin from '../components/LoginPage/App';

export const HomePage = () => (
  <Home />
);

export const LoginPage = () => (
  <AuthLogin />
);

export const Header = () => (
  <NavBarComponent />
);

export const Footer = () => (
  <FooterComponent />
);
