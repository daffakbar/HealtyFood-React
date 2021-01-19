import React from 'react'
import salad from '../img/salad.png'
const footer = () => {
    
    return(
        <div>
           <footer class="bg-gray-200 dark:bg-darkfooter transition duration-700">
            <div class="container px-8 mx-auto scroll3">
              <div class="flex flex-col w-full py-4 md:flex-row">
                <div class="justify-center flex-1 text-left">
                  <a class="text-xs text-black no-underline toggleColour hover:no-underline lg:text-4xl" href="{#}">
                    <img src={salad} alt="" width="42" srcset="" class="inline my-20"/> <span class="text-2xl dark:text-gray-100 ">HEALTHY FOOD</span>  
                  </a>
                </div>
                <div class="flex-1 text-left">
                  <p class="font-bold uppercase md:mb-6 dark:text-gray-100">Special Packages</p>
                  <ul class="mb-6 list-reset text-left">
                    <li class="inline-block mt-2 mr-2 md:block md:mr-0 ">
                      <a href="{#}" class="text-gray-800 no-underline hover:text-pinkred dark:text-gray-300">Vegetarian</a>
                    </li>
                    <li class="inline-block mt-2 mr-2 md:block md:mr-0">
                      <a href="{#}" class="text-gray-800 no-underline hover:text-pinkred dark:text-gray-300">General Diet</a>
                    </li>
                    <li class="inline-block mt-2 mr-2 md:block md:mr-0">
                      <a href="{#}" class="text-gray-800 no-underline hover:text-pinkred dark:text-gray-300">Mayo Diet</a>
                    </li>
                    <li class="inline-block mt-2 mr-2 md:block md:mr-0">
                      <a href="{#}" class="text-gray-800 no-underline hover:text-pinkred dark:text-gray-300">Fitness Diet</a>
                    </li>
                  </ul>
                </div>
                <div class="flex-1 text-left">
                  <p class="font-bold uppercase md:mb-6 dark:text-gray-100">Company</p>
                  <ul class="mb-6 list-reset">
                    <li class="inline-block mt-2 mr-2 md:block md:mr-0">
                      <a href="{#}" class="text-gray-800 no-underline hover:text-pinkred dark:text-gray-300">Carrer</a>
                    </li>
                    <li class="inline-block mt-2 mr-2 md:block md:mr-0">
                      <a href="{#}" class="text-gray-800 no-underline hover:text-pinkred dark:text-gray-300">Terms of Services</a>
                    </li>
                    <li class="inline-block mt-2 mr-2 md:block md:mr-0">
                      <a href="{#}" class="text-gray-800 no-underline hover:text-pinkred dark:text-gray-300">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
                <div class="flex-1 text-left">
                  <p class="font-bold uppercase md:mb-6 dark:text-gray-100">Social Media</p>
                  <ul class="mb-6 list-reset">
                    <li class="inline-block mt-2 mr-2 md:block md:mr-0">
                      <a href="{#}" class="text-gray-800 no-underline hover:text-pinkred dark:text-gray-300">Facebook</a>
                    </li>
                    <li class="inline-block mt-2 mr-2 md:block md:mr-0">
                      <a href="{#}" class="text-gray-800 no-underline hover:text-pinkred dark:text-gray-300">Instagram</a>
                    </li>
                    <li class="inline-block mt-2 mr-2 md:block md:mr-0">
                      <a href="{#}" class="text-gray-800 no-underline hover:text-pinkred dark:text-gray-300">Youtube</a>
                    </li>
                    <li class="inline-block mt-2 mr-2 md:block md:mr-0">
                      <a href="{#}" class="text-gray-800 no-underline hover:text-pinkred dark:text-gray-300">Linkedln</a>
                    </li>
                  </ul>
                </div>
                
                <div class="flex-1 text-left">
                  <p class="font-bold uppercase md:mb-6 dark:text-gray-100">Be Our Partner</p>
                  <ul class="mb-6 list-reset">
                    <li class="inline-block mt-2 mr-2 md:block md:mr-0">
                      <a href="{#}" class="text-gray-800 no-underline dark:text-gray-300 hover:text-pinkred">6, Ciputra Residence, Surabaya</a>
                    </li>
                    <li class="inline-block mt-2 mr-2 md:block md:mr-0">
                      <a href="{#}" class="text-gray-800 no-underline dark:text-gray-300 hover:text-pinkred">cs@healhtyfood.com</a>
                    </li>
                    <li class="inline-block mt-2 mr-2 md:block md:mr-0">
                      <a href="{#}" class="text-gray-800 no-underline dark:text-gray-300 hover:text-pinkred">021 - 1234 - 2345</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="flex justify-center scroll3 ">
              <a href="{#}" class="m-5 text-gray-600 dark:text-gray-200"> 
                © 2020 Healthy Food - All Rights Reserved - Terms of Services / Privacy Policy</a>
            </div>
          </footer>
        </div>
    )
}

export default footer