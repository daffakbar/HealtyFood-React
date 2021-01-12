/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default class Content extends React.Component {

  

  render() {
    return (
 <div>
        <div className="pt-24 transition duration-700 dark:bg-gray-700 dark:text-gray-500">
        <div class="container  flex flex-col flex-wrap items-center px-3 mx-auto md:flex-row ">
          
          <div class="flex flex-col items-start justify-center w-full text-center md:w-2/6 md:text-left ">
            <h1 class="my-4 text-5xl font-bold leading-tight scroll2 dark:text-gray-100 ">
              Fresh healthy <p></p><span class="text-pinkred ">Delicious </span>food
            </h1>
            <p class="mb-8 text-xl leading-normal scroll2 dark:text-gray-200">
              Provides a menu with a healthy lifestyle concept with delicious taste.
            </p>
          
              <div class="">
                <button class="px-8 py-4 mx-auto dark:bg-pinkcard my-6 font-bold text-white transition duration-300 ease-in-out transform rounded-full shadow-lg bg-pink-light lg:mx-0 bg-pinkred hover:scale-105">
                  Our Catering Packages
                </button>
              </div>
          
          </div>
          
          <div class="flex justify-end w-full py-6 md:w-4/6 ">
            <img src="/img/food.jpg" class="w-full imgm md:w-4/5 " />
          </div>
        </div>
      </div>
    </div>

 
    )
  }
}