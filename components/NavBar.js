import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { Navbar } from "flowbite-react";

// source navbar https://codepen.io/Vinny92/pen/XWNdxvj


const NavBar = ({ cart }) => {
  // return (
  // <nav
  //   className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 font-CooperBlack"
  //   style={{ backgroundColor: "rgba(129,52,0,255)"}}
  // >
  //   <div className="container flex flex-wrap md: justify-between justify-center items-center mx-auto">
  //     <a href="/" className="flex items-center">
  //       <img src="./assets/fatpigbanner_2.jpg" style={{ width: "200px" }} />
  //       <span className="ml-3 text-xl"></span>
  //     </a>
  //     <button
  //       data-collapse-toggle="navbar-default"
  //       type="button"
  //       className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  //       aria-controls="navbar-default"
  //       aria-expanded="false"
  //     >
  //       <span className="sr-only">Open main menu</span>
  //       <svg
  //         className="w-6 h-6"
  //         aria-hidden="true"
  //         fill="currentColor"
  //         viewBox="0 0 20 20"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path
  //           fillRule="evenodd"
  //           d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
  //           clipRule="evenodd"
  //         ></path>
  //       </svg>
  //     </button>
  //     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
  //       <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center">
  //         <li>
  //           <Link href="/">
  //             <a
  //               className={` ${styles.linkunderline}`}
  //               style={{ color: "white", fontSize: "18px" }}
  //             >
  //               HOME
  //             </a>
  //           </Link>
  //         </li>
  //         <li>
  //           <Link href="/about-page">
  //             <a
  //               className={` ${styles.linkunderline}`}
  //               style={{ color: "white", fontSize: "18px" }}
  //             >
  //               ABOUT
  //             </a>
  //           </Link>
  //         </li>
  //         <li>
  //           <Link href="/menu">
  //             <a
  //               style={{ color: "white", fontSize: "18px" }}
  //               className={` ${styles.linkunderline}`}
  //             >
  //               MENU
  //             </a>
  //           </Link>
  //         </li>
  //         <li>
  //           <Link href="/contact">
  //             <a
  //               style={{ color: "white", fontSize: "18px" }}
  //               className={` ${styles.linkunderline}`}
  //             >
  //               CONTACT
  //             </a>
  //           </Link>
  //         </li>
  //         {/* <li>
  //           <Link href="/checkout">
  //             <a
  //               style={{ color: "white", fontSize: "18px" }}
  //               class=" hover:text-gray-900"
  //             >
  //               CART({cart.length})
  //             </a>
  //           </Link>
  //         </li> */}
  //         {/* <li>
  //           <button className="my-2 text-white bg-indigo-500 border-0 md:py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">
  //             Login
  //           </button>
  //         </li> */}
  //       </ul>
  //     </div>
  //   </div>
  // </nav>
  // );

  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  // return (
  //   <>
  //     <nav
  //       className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 font-CooperBlack"
  //       style={{ backgroundColor: "rgba(129,52,0,255)" }}
  //     >
  //       <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
  //         <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
  //           <a href="/" className="flex items-center">
  //             <img
  //               src="./assets/fatpigbanner_2.jpg"
  //               style={{ width: "200px" }}
  //             />
  //             <span className="ml-3 text-xl"></span>
  //           </a>
  //           <button
  //             className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  //             type="button"
  //             onClick={() => setNavbarOpen(!navbarOpen)}
  //           >
  //             <svg
  //               className="w-6 h-6"
  //               aria-hidden="true"
  //               fill="currentColor"
  //               viewBox="0 0 20 20"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 fillRule="evenodd"
  //                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
  //                 clipRule="evenodd"
  //               ></path>
  //             </svg>
  //           </button>
  //         </div>
  //         <div
  //           className={
  //             "lg:flex flex-grow items-center" +
  //             (navbarOpen ? " flex" : " hidden")
  //           }
  //           id="example-navbar-danger"
  //         >
  //           <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
  //             <li className="nav-item">
  //               <a
  //                 style={{ color: "white", fontSize: "18px" }}
  //               className={` px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 ${styles.linkunderline}`}
  //                 href="/about-page"
  //               >
  //                 <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
  //                 <span className="ml-2">Share</span>
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <a
  //                 style={{ color: "white", fontSize: "18px" }}
  //                 className={` px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 ${styles.linkunderline}`}
  //                 href="#pablo"
  //               >
  //                 <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
  //                 <span className="ml-2">Tweet</span>
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <a
  //                 style={{ color: "white", fontSize: "18px" }}
  //                 className={` px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 ${styles.linkunderline}`}
  //                 href="#pablo"
  //               >
  //                 <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
  //                 <span className="ml-2">Pin</span>
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>
  //   </>
  // );

  const [open, setOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="relative bg-white font-Roboto" style={{ backgroundColor: "rgba(129,52,0,255)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center  border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="./assets/fatpiglogo.png"
                  alt="fat pig logo"
                />
                <span className="ml-3 text-3xl font-CooperBlack text-white">Fat Pig BBQ</span>
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
            <a
                href="/"
                className={` ${styles.linkunderline} text-lg font-medium text-white`}
              >
                Home
              </a>
              <a
                href="/about-page"
                className={` ${styles.linkunderline} text-lg font-medium text-white`}
              >
                About
              </a>
              <a
                href="/menu"
                className={` ${styles.linkunderline} text-lg font-medium text-white`}
              >
                Menu
              </a>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="/contact"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-[#212427] bg-white hover:bg-[#212427] hover:text-white transition ease-out duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        {/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: ""
      To: ""
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  */}

        <div
          className={
            open
              ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-0"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                  // C:\Users\Aceco\code\fat-pig-project\fat-pig-bbq-front\public\assets\fatpigbanner.jpg
                    className="mx-auto h-14 w-auto"
                    src="./assets/fatpigbanner.jpg"
                    alt="fat pig banner"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                <a
                    href="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/refresh */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-[rgba(129,52,0,255)]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Home
                    </span>
                  </a>
                  <a
                    href="/about-page"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/chart-bar */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-[rgba(129,52,0,255)]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      About Page
                    </span>
                  </a>
                  <a
                    href="/menu"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/shield-check */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-[rgba(129,52,0,255)]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Menu
                    </span>
                  </a>
                  <a
                    href="/contact"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/view-grid */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-[rgba(129,52,0,255)]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-[#212427]">
                      Contact
                    </span>
                  </a>
                </nav>
              </div>
            </div>
            {/* <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Enterprise
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Guides
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Security
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Events
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
