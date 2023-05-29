import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaShoppingCart} from 'react-icons/fa';
import useCart from '../../Components/Hooks/UseCart';


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart]=useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navItems = <>
        <Link to='/' className='mr-4 mt-3'>Home</Link>
        <Link to='/menu' className='mr-4  mt-3'>Menu</Link>
        <Link to='/order/salad' className='mr-4  mt-3'>Order Food</Link>
        <Link to='/secret' className='mr-4  mt-3'>Secret</Link>
        
            <Link to='/dashboard/mycart'>
        <button className="btn gap-2">
        <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">+{cart?.length ||0}</div>
        </button>
        </Link>
        

        {
            user ? <>
                {/* <span>{user?.displayName}</span> */}
                <Link><button onClick={handleLogOut} className="btn btn-ghost ">LogOut</button></Link>
            </> : <>
                <Link to="/login">Login</Link>
            </>
        }
       

    </>

    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">BisTro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>

        </div>
    );
};

export default NavBar;