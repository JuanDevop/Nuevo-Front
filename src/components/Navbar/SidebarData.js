import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Perfil',
    path: '/perfil',
    icon: <FaIcons.FaPortrait />,
    cName: 'nav-text'
  },
  {
    title: 'Usuarios',
    path: '/usuarios',
    icon: <FaIcons.FaUser />,
    cName: 'nav-text'
  },
  {
    title: 'Lista Proyectos',
    path: '/listaproyectos',
    icon: <IoIcons.IoMdList />,
    cName: 'nav-text'
  },
  {
    title: 'Mis Proyectos',
    path: '/misproyectos',
    icon: <FaIcons.FaProjectDiagram />,
    cName: 'nav-text'
  }
];