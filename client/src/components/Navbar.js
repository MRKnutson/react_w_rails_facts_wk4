import { Link } from "react-router-dom";

const Navbar = () =>{
  return(
    <div>
      <Link to= "/">Facts</Link>
      <Link to= "/counter">Counter</Link>
      <Link to= "/about">About</Link>
    </div>
  )
};

export default Navbar;