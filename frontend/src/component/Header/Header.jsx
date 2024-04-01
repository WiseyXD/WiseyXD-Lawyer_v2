import { useEffect, useRef, useContext } from "react";
import logo1 from "../../assets/images/justice2.png";
import userImg from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
const navLinks = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/lawyers",
        display: "Find a Laywer",
    },
    {
        path: "/services",
        display: "Services",
    },
    {
        path: "/contact",
        display: "Contact",
    },
];
const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const { user, role, token } = useContext(authContext);
    const { dispatch } = useContext(authContext);
    const handleStickyHeader = () => {
        window.addEventListener("scroll", () => {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                headerRef.current.classList.add("stickey_header");
            } else {
                headerRef.current.classList.remove("stickey_header");
            }
        });
    };

    useEffect(() => {
        handleStickyHeader();

        return () => window.removeEventListener("scroll", handleStickyHeader);
    });

    const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

    function handleLogout() {
        console.log("Clciked Logout");
        dispatch({
            type: "LOGOUT",
        });
    }

    return (
        <header className="header flex items-center" ref={headerRef}>
            <div className="container">
                <div className="flex items-center justify-between">
                    {/* ======= logo =======*/}
                    <div>
                        <img src={logo1} alt="Logo" />
                    </div>

                    {/* ============= menu ============*/}
                    <div
                        className="navigation"
                        ref={menuRef}
                        onclick={toggleMenu}
                    >
                        <ul className="menu flex items-center gap-[2.7rem]">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={link.path}
                                        className={(navClass) =>
                                            navClass.isActive
                                                ? "text-primaryColor text-[16px] leading-7 font-[600]"
                                                : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                                        }
                                    >
                                        {link.display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <button onClick={handleLogout}>Logout</button>
                    </div>

                    {/*========= nav right ==========*/}
                    <div className="flex items-center gap-4">
                        {token && user ? (
                            <div>
                                <Link
                                    to={`$ {role === 'Lawyer' ? '/lawyers/profiles/me' : '/users/profile/me'}`}
                                >
                                    <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                                        <img
                                            src={user?.photo}
                                            className="w-full rounded-full"
                                            alt=""
                                        />
                                    </figure>
                                    <h2>{user?.name}</h2>
                                </Link>
                            </div>
                        ) : (
                            <Link to="/login" className="block">
                                <button className="bg-primaryColor py-2 px-6 text-white font-semibold h-12 flex items-center justify-center rounded-full">
                                    Login
                                </button>
                            </Link>
                        )}

                        <span className="md:hidden" onClick={toggleMenu}>
                            <BiMenu className="w-6 h-6 cursor-pointer" />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
