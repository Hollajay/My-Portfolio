
import { NavLink } from 'react-router-dom'
import './sidebar.css'

export const Sidebar = () => {
  return (
    <div className="sidebar">
    <ul>
      <li className='homeList'>
        <NavLink to="/#homePage" className={({ isActive }) => (isActive ? "active  " : "")}>Home</NavLink>
      </li>
      <li className='aboutList'>
        <NavLink to="/#aboutPage" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
      </li>
      <li className='skillsList'>
        <NavLink to="/#skillsPage" className={({ isActive }) => (isActive ? "active" : "")}>Skills</NavLink>
      </li>
      <li className='projectsList'>
        <NavLink to="/#projectsPage" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink>
      </li>
      <li className='contactList'>
       
        <NavLink to="/#contactPage" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
      </li>
    </ul>
  </div>
  )
}
