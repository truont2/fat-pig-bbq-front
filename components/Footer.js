import React from "react";

const Footer = () => {
  return (
    <footer class="text-gray-400 body-font" style={{fontFamily: "Arial"}}>
      <div class="container px-5 mb-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src="./assets/fatpiglogo.png" style={{ width: "40px" }} />
            <span class="ml-3 text-xl">Fat Pig BBQ</span>
          </a>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              COMPANY
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a href="/about-page" class="text-gray-600 hover:text-gray-800">About Us</a>
              </li>
              <li>
                <a href="/contact"class="text-gray-600 hover:text-gray-800">Careers</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              DELIVERY/ORDER
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a href="https://www.ubereats.com/store/fat-pig-bbq/S0VhUzV1RnyR1Jh3vmWdHw" class="text-gray-600 hover:text-gray-800">Uber</a>
              </li>
              <li>
                <a href="https://www.doordash.com/store/fat-pig-bbq-edmonds-429805/" class="text-gray-600 hover:text-gray-800">DoorDash</a>
              </li>
              <li>
                <a href="https://www.grubhub.com/restaurant/fat-pig-bbq-7533-olympic-view-dr-edmonds/970085" class="text-gray-600 hover:text-gray-800">GrubHub</a>
              </li>
              <li>
                <a href="" class="text-gray-600 hover:text-gray-800">SquareSpace</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="bg-gray-100" >
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">
            © 2022 Fat Pig BBQ, All Rights Reserved
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a class="text-gray-500" href="https://www.facebook.com/myfatpigbbq">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500" href="https://www.instagram.com/fatpigbbq/">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
