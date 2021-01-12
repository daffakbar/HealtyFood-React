import React from 'react';
import Nav from './Nav'

const Navbar = () => {
    
    return(
        <div className="bg-green-500 ">
           <nav id="" class="  fixed top-0 z-30 w-full text-black dark:bg-gray-700 scroll1 transition duration-700 ">
      <div class="container  flex flex-wrap items-center justify-between w-full py-2 mx-auto mt-0 transition duration-700 ">
        <div class="flex items-center pl-4 ">
          <a class="text-xs font-bold text-black dark:text-gray-50 no-underline toggleColour hover:no-underline lg:text-4xl" href="{#}" >
            <img src="img/salad.png" alt="" width="42" srcset="" class="inline"></img> <span class="text-2xl ">HEALTHY FOOD</span>  
            
          </a>
        </div>
        <div class="block pr-4 lg:hidden ">
          <button id="nav-toggle" class="flex items-center p-1 text-pink-800 transition duration-300 ease-in-out transform hover:text-gray-900 focus:outline-none focus:shadow-outline hover:scale-105">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="z-20 flex-grow hidden w-full p-4 mt-2 text-white lg:flex lg:items-center lg:w-auto lg:mt-0 lg:bg-transparent lg:p-0" id="nav-content">
          <ul class="items-center justify-end flex-1 list-reset lg:flex">
            <li class="mr-3">
              <a class="inline-block px-4 py-2 text-xl font-bold no-underline  text-pinkred " href="{#}">Home</a>
            </li>
            <li class="mr-3">
              <a class="inline-block px-4 py-2 text-black no-underline dark:text-gray-50 hover:text-pinkred hover:text-underline" href="{#}">Catering</a>
            </li>
            <li class="mr-3">
              <a class="inline-block px-4 py-2 text-black no-underline dark:text-gray-50 hover:text-pinkred hover:text-underline" href="{#}">Menu</a>
            </li>
            <li class="mr-3">
              <a class="inline-block px-4 py-2 text-black no-underline dark:text-gray-50 hover:text-pinkred hover:text-underline" href="{#}">Cafe</a>
            </li>
            <li class="mr-3">
              <a class="inline-block px-4 py-2 text-black no-underline dark:text-gray-50 hover:text-pinkred hover:text-underline" href="{#}">About</a>
            </li>
            <li class="mr-3">
              <a class="inline-block px-4 py-2 text-black no-underline dark:text-gray-50 hover:text-pinkred hover:text-underline" href="{#}">Contact us</a>
            </li>
            <li class="mr-3">
              <a class="inline-block px-4 py-2 text-black no-underline dark:text-gray-50 hover:text-pinkred hover:text-underline" href="{#}"><img src="/img/icon-basket.png" width="24" alt="" ></img></a>
            </li>
            <li class="mr-3">
            <Nav/>
            </li>
          </ul>
          
        </div>
      </div>

    </nav>
        </div>
    )
}

export default Navbar