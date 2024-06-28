import {useContext} from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import propTypes from 'prop-types'
import Article from '../Components/Article/Article'
export const Home = ()=>{
    return (
        <div className="bg-gray-100 min-h-screen">
        {/* Hero */}
        <section className="bg-gray-800 text-white py-20">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to Our Services</h1>
                <p className="text-lg mb-8">به پروژه لاگین رجیستر تکومیکس خوش اومدید</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    بزن بریم
                </button>
            </div>
        </section>



        {/** Price */}
        <section className="bg-gray-200 py-16">
            <main class="max-w-6xl mx-auto pt-10 pb-36 px-8 ">
                
                <div class="max-w-md mx-auto mb-14 text-center">
                    <h1 class="text-4xl font-semibold mb-6 lg:text-5xl"><span class="text-indigo-600"> پلن های </span>منتخب</h1>
                    <p class="text-xl text-gray-500 font-medium">یکی از بهترین پلن های ما را انتخاب کنید</p>
                </div>
                
                <div class="flex flex-col justify-between items-center lg:flex-row lg:items-start">
                    
                    <div class="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
                    <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
                        <img src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"  alt="" class="rounded-3xl w-20 h-20" />
                        <div class="ml-5">
                        <span class="block text-2xl font-semibold">Basic</span>
                        <span><span class="font-medium text-gray-500 text-xl align-top">$&thinsp;</span><span class="text-3xl font-bold">10 </span></span><span class="text-gray-500 font-medium">/ user</span>
                        </div>
                    </div>
                    <ul class="mb-7 font-medium text-gray-500">
                        <li class="flex text-lg mb-2">
                        <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                        <span class="ml-3">Get started with <span class="text-black">messaging</span></span>
                        </li>
                        <li class="flex text-lg mb-2">
                        <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                        <span class="ml-3">Flexible <span class="text-black">team meetings</span></span>
                        </li>
                        <li class="flex text-lg">
                        <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                        <span class="ml-3"><span class="text-black">5 TB</span> cloud storage</span>
                        </li>
                    </ul>
                    <a href="#/" class="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl">
                        Choose Plan
                        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" class="ml-2" />
                    </a>
                    </div>
                    
                    <div class="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
                    <div class="mb-8 pb-8 flex items-center border-b border-gray-600">
                        <img src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"  alt="" class="rounded-3xl w-20 h-20" />
                        <div class="ml-5">
                        <span class="block text-3xl font-semibold text-white">Startup</span>
                        <span><span class="font-medium text-xl align-top">$&thinsp;</span><span class="text-3xl font-bold text-white">24 </span></span><span class="font-medium">/ user</span>
                        </div>
                    </div>
                    <ul class="mb-10 font-medium text-xl">
                        <li class="flex mb-6">
                        <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                        <span class="ml-3">All features in <span class="text-white">Basic</span></span>
                        </li>
                        <li class="flex mb-6">
                        <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                        <span class="ml-3">Flexible <span class="text-white">call scheduling</span></span>
                        </li>
                        <li class="flex">
                        <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                        <span class="ml-3"><span class="text-white">15 TB</span> cloud storage</span>
                        </li>
                    </ul>
                    <a href="#/" class="flex justify-center items-center bg-indigo-600 rounded-xl py-6 px-4 text-center text-white text-2xl">
                        Choose Plan
                        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" class="ml-2" />
                    </a>
                    </div>
                    
                    <div class="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
                    <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
                        <img src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"  alt="" class="rounded-3xl w-20 h-20" />
                        <div class="ml-5">
                        <span class="block text-2xl font-semibold">Enterprise</span>
                        <span><span class="font-medium text-gray-500 text-xl align-top">$&thinsp;</span><span class="text-3xl font-bold">35 </span></span><span class="text-gray-500 font-medium">/ user</span>
                        </div>
                    </div>
                    <ul class="mb-7 font-medium text-gray-500">
                        <li class="flex text-lg mb-2">
                        <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                        <span class="ml-3">All features in <span class="text-black">Startup</span></span>
                        </li>
                        <li class="flex text-lg mb-2">
                        <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                        <span class="ml-3">Growth <span class="text-black">oriented</span></span>
                        </li>
                        <li class="flex text-lg">
                        <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                        <span class="ml-3"><span class="text-black">Unlimited</span> cloud storage</span>
                        </li>
                    </ul>
                    <a href="#/" class="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl">
                        Choose Plan
                        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" class="ml-2" />
                    </a>
                    </div>
                    
                </div>
                
            </main>
        </section>
    {/** End Price */}

        {/** End Call to Action Section */}
        <Article />
    </div>
    )
    
}