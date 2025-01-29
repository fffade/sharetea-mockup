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

function Header()
{
    return (
      <header className="flex flex-col w-full p-2 pt-16 gap-y-16 border-b-2 border-neutral-100 justify-center text-center bg-neutral-50 ">
          { /* Upper Logo and Title section */ }
          <div className="flex flex-col items-center gap-y-4">
              <img className="w-auto" src="./assets/ShareTea_Logo.avif" alt="ShareTea Logo" />
              <h2 className="text-4xl">Sharetea Columbus</h2>
          </div>
          { /* Navigation bar */ }
          <div className="grid grid-cols-3 w-full">
              <Link to="menu" className="text-2xl inline-flex w-min p-4 gap-x-4 items-center">
                  <i className="fa-solid fa-bars" />Menu
              </Link>
              <nav className="flex flex-row p-4 self-center justify-evenly">
                  <NavLink to="about" text="About"/>
                  <NavLink to="contact" text="Contact"/>
                  <NavLink to="careers" text="Careers"/>
              </nav>
              <nav>
                  Socials
              </nav>
          </div>
      </header>
    );
}

export default Header;