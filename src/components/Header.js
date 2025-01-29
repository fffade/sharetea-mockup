/*
    Omar Johnson
    Header component
    Created on: 1/29/25

    Displayed on every page of the application
    Contains navigation links to major pages
 */

import { Link } from "react-router";

/* A unique link on the nav bar */
function NavLink(props)
{
    return (
        <Link to={props.to} className="text-2xl tracking-normal hover:tracking-wider transition-all">{props.text}</Link>
    );
}

function SocialLink(props)
{
    return (
        <Link to={props.to} target="_blank" className="text-3xl hover:scale-110 transition-all">
            <i className={props.icon}/>
        </Link>
    );
}

function Header()
{
    return (
      <header className="flex flex-col w-full pt-16 gap-y-16 border-b-2 border-neutral-100 justify-center text-center bg-neutral-50 ">
          { /* Upper Logo and Title section */ }
          <div className="flex flex-col items-center gap-y-4">
              <img className="w-auto" src="./assets/ShareTea_Logo.avif" alt="ShareTea Logo" />
              <h2 className="text-4xl">Sharetea Columbus</h2>
          </div>
          { /* Navigation bar */ }
          <div className="grid grid-rows-3 pl-8 pr-8 md:justify-center md:grid-cols-3 md:grid-rows-1">
              <Link to="menu" className="text-2xl inline-flex w-min p-4 gap-x-4 items-center m-auto md:m-0">
                  <i className="fa-solid fa-bars" />Menu
              </Link>
              <nav className="flex flex-row p-4 w-full justify-between md:justify-evenly">
                  <NavLink to="about" text="About"/>
                  <NavLink to="contact" text="Contact"/>
                  <NavLink to="careers" text="Careers"/>
              </nav>
              <nav className="flex flex-row w-1/2 sm:w-1/3 md:w-1/5 m-auto items-center justify-between md:justify-self-end sm:m-0">
                  <SocialLink to="https://www.instagram.com/shareteacolumbus/" icon="fa-brands fa-instagram" />
                  <SocialLink to="https://www.facebook.com/shareteacolumbus" icon="fa-brands fa-facebook" />
                  <SocialLink to="https://maps.google.com/?cid=6062379589342447713" icon="fa-solid fa-location-dot" />
              </nav>
          </div>
      </header>
    );
}

export default Header;