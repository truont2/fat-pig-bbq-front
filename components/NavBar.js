import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
const NavBar = ({ cart }) => {
  return (
    //         <div>
    //             <header class="text-gray-600" style={{ fontFamily: "Roboto", backgroundColor: "rgba(129,52,0,255)"}}>
    //                 <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    //                     <Link href="/"><a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    //                         <img src="./assets/fatpigbanner_2.jpg" style={{ width: '250px' }}/>
    //                         <span class="ml-3 text-xl"></span>
    // </a>
    //                     </Link>
    //                     <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
    //                         <Link href="/"><a className={`mr-5 ${styles.linkunderline}`}  style={{color: 'white', fontSize: "18px"}}>HOME</a></Link>
    //                         <Link href="/about-page"><a className={`mr-5 ${styles.linkunderline}`} style={{color: 'white', fontSize: "18px"}}>ABOUT</a></Link>
    //                         <Link href="/menu"><a style={{color: 'white', fontSize: "18px"}} className={`mr-5 ${styles.linkunderline}`}>MENU</a></Link>
    //                         <Link href="/contact"><a style={{color: 'white', fontSize: "18px"}} className={`mr-5 ${styles.linkunderline}`}>CONTACT</a></Link>
    //                         <Link href="/checkout"><a style={{color: 'white', fontSize: "18px"}}class="mr-5 hover:text-gray-900">CART({cart.length})</a></Link>
    //                     </nav>
    //                     <button className="my-2 text-white bg-indigo-500 border-0 md:py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Login
    //                     </button>
    //                 </div>
    //             </header>
    //         </div>
    <nav
      class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
      style={{ backgroundColor: "rgba(129,52,0,255)" }}
    >
      <div class="container flex flex-wrap md: justify-between justify-center items-center mx-auto">
        <a href="/" class="flex items-center">
          <img src="./assets/fatpigbanner_2.jpg" style={{ width: "200px" }} />
          <span class="ml-3 text-xl"></span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center">
            <li>
              <Link href="/">
                <a
                  className={` ${styles.linkunderline}`}
                  style={{ color: "white", fontSize: "18px" }}
                >
                  HOME
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about-page">
                <a
                  className={` ${styles.linkunderline}`}
                  style={{ color: "white", fontSize: "18px" }}
                >
                  ABOUT
                </a>
              </Link>
            </li>
            <li>
              <Link href="/menu">
                <a
                  style={{ color: "white", fontSize: "18px" }}
                  className={` ${styles.linkunderline}`}
                >
                  MENU
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  style={{ color: "white", fontSize: "18px" }}
                  className={` ${styles.linkunderline}`}
                >
                  CONTACT
                </a>
              </Link>
            </li>
            <li>
              <Link href="/checkout">
                <a
                  style={{ color: "white", fontSize: "18px" }}
                  class=" hover:text-gray-900"
                >
                  CART({cart.length})
                </a>
              </Link>
            </li>
            <li>
              <button className="my-2 text-white bg-indigo-500 border-0 md:py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
