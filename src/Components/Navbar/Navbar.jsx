import { Link, NavLink } from "react-router-dom";
import useHook from "../../Hooks/UseHook";
import logo from '../../../public/Logo.png';


const Navbar = () => {
    const { user, logOut } = useHook();

    const navLink = 
        <>
            <li><NavLink to='/'
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue-600 text-lg font-bold underline outline-offset-8" : ""}
            >Home</NavLink></li>
            <li><NavLink to='/addproduct'
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue-600 text-lg font-bold underline outline-offset-8" : ""}
            >Add Product</NavLink></li>
            <li><NavLink to='/mycart'
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue-600 text-lg font-bold underline outline-offset-8" : ""}
            >My Cart</NavLink></li>
            {
                user?.email && 
                <li><NavLink to='/profile'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-600 text-lg font-bold underline outline-offset-8" : ""}
                >Profile</NavLink></li>
            }
        </>

    return (
        <>
            <nav className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] pt-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <Link to='/'><img src={logo} alt="" className="h-28"/></Link>
                </div>



                {/* avatar part  */}
                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 mt-3">
                            {navLink}
                        </ul>
                    </div>
                    {
                        user?.email ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-square avatar">
                                    <div className="w-10 rounded-lg">
                                        <img src={user.photoURL} alt={user.displayName} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <button className="">{user.displayName}</button>
                                    </li>
                                    <li>
                                        <button className="">{user.email}</button>
                                    </li>
                                    <li>
                                        <button className="btn btn-sm  btn-ghost"
                                            onClick={logOut}
                                        >Logout</button>

                                    </li>
                                </ul>
                            </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
                </div>
            </nav>
        </>
    );
};

export default Navbar;