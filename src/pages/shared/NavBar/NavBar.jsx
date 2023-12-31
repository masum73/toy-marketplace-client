import React, { useContext } from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';


const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error));
  }
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {user.displayName}
    </Tooltip>
  );

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to='/' className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to='/alltoys' className="flex items-center">
          All Toys
        </Link>
      </Typography>

      {
        user?.email && <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link to='/mytoys' className="flex items-center">
            My Toys
          </Link></Typography>
      }


      {
        user?.email && <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        > <Link to='/addtoy' className="flex items-center">
            Add a Toy
          </Link> </Typography>
      }

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to='/blog' className="flex items-center">
          Blog
        </Link>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className=" h-12 flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 text-xl cursor-pointer py-1.5 font-semibold"
          >
            {/* Toy Time */}
            <div className='m-5 overflow-hidden'>
              <img className='' width='100px' height='60px' src="https://i.ibb.co/s2MzS7v/logo2.png" />
            </div>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {
              user && <div className='d-flex justify-content-center align-items-center'>
                <Tooltip content={user.displayName} placement="bottom-end">
                  <img style={{ borderRadius: '50%', height: '2rem', width: '2rem' }} src={user.photoURL} alt="" />
                </Tooltip>
              </div>
            }

            {
              user ?
                <Button onClick={handleLogOut} variant="secondary">
                  log Out
                </Button>
                :
                <Link to='signin'><Button variant="secondary">
                  Log In
                </Button></Link>
            }
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          {
            user && <div className='d-flex justify-content-center align-items-center'>
              <Tooltip content={user.displayName} placement="bottom-end">
                <img style={{ borderRadius: '50%', height: '2rem', width: '2rem' }} src={user.photoURL} alt="" />
              </Tooltip>
            </div>
          }

          {
            user ?
              <Button onClick={handleLogOut} variant="secondary">
                log Out
              </Button>
              :
              <Link to='signin'><Button variant="secondary">
                Log In
              </Button></Link>
          }
        </MobileNav>
      </Navbar>
    </>
  );
};

export default NavBar;