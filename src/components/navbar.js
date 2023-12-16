import { Link } from "react-router-dom";
export default function Navbar() 
{
    return ( 
        <div>
            <nav className="navbar">
                <a className="logo">DEMO</a>
                <ul>
                    <li className="active">
                        <Link  to='/'> Home</Link>
                    </li>
                    <li>
                        <Link  to='/Services'> Services</Link>
                    </li>
                    <li>
                        <Link  to='/Contactus'> Contact us</Link>
                    </li>
                    <li>
                        <Link  to='/about'> About Us</Link>
                    </li>

                    <li>
                        <Link  to='/login'> login/sign up</Link>
                    </li>

                </ul>
            </nav>
        </div>
    );
}

