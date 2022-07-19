import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css'
const NavBar = ({cart}) => {
    return (
        <div>
            <header class="text-gray-600" style={{ fontFamily: "Roboto", backgroundColor: "rgba(129,52,0,255)"}}>
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/"><a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="./assets/fatpigbanner_2.jpg" style={{ width: '250px' }}/>
                        <span class="ml-3 text-xl"></span>
                    </a></Link>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/"><a className={`mr-5 ${styles.linkunderline}`}  style={{color: 'white', fontSize: "18px"}}>HOME</a></Link>
                        <Link href="/about-page"><a className={`mr-5 ${styles.linkunderline}`} style={{color: 'white', fontSize: "18px"}}>ABOUT</a></Link>
                        <Link href="/menu"><a style={{color: 'white', fontSize: "18px"}} className={`mr-5 ${styles.linkunderline}`}>MENU</a></Link>
                        <Link href="/contact"><a style={{color: 'white', fontSize: "18px"}} className={`mr-5 ${styles.linkunderline}`}>CONTACT</a></Link>
                        <Link href="/checkout"><a style={{color: 'white', fontSize: "18px"}}class="mr-5 hover:text-gray-900">CART({cart.length})</a></Link>
                    </nav>
                    <button className="my-2 text-white bg-indigo-500 border-0 md:py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Login
                    </button>
                </div>
            </header>
        </div>
    )
}

export default NavBar