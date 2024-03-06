import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/demandes">home</Link>
        <Link to="/login">login</Link>
        <Link to="/work">Work</Link>
    </div>
  )
}

export default Navbar