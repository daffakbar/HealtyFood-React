import React from 'react'
import Apps from '../img/food-ordering-app1.jpg'
import store from '../img/Available_on_the_App_Store_(black).png'
import google from '../img/google.png'

const section3 = () => {
    
    return(
        <div>
           <section class="py-12 mx-auto text-center bg-gray-50 dark:bg-gray-800 transition duration-700 ">
            <div class="flex ">
              <div class="flex justify-center w-1/2 ">
                <img src={Apps} class=" imgb" width="400" alt=""/>
              </div>
              <div class="w-1/2 py-20">
                <div class="text-left ">
                  <h1 class="text-5xl font-bold dark:text-gray-200 ">Download our app <br/> and <span class="leading-10 text-pinkred dark:text-pinkcard">Order Now</span>
                  </h1>
                  <br/>
                  <p class="text-xl text-gray-500 dark:text-gray-200 ">You don't have to cook fancy or elaborate masterpieces just good food <br/> from fresh ingridients.</p>
                </div>
                <div class="flex mt-5">
                  <img src={store} width="150" alt="" class="m-4 "/>
                  <img src={google} width="150" alt="" class="m-4 "/>
                </div>
              </div> 
            </div>
            </section>
        </div>
    )
}

export default section3