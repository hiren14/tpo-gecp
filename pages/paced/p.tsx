import React from 'react';
import { sanityClient, urlFor } from "../../lib/sanity";
import Header from "../../components/header";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import PortableText from "react-portable-text";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import hero from "../paced/1.jpg";
import { FaInstagram,FaFacebookSquare,FaLinkedin } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { IPlaced } from '../../interfaces/placed_interface';

interface IProps {
    placed: IPlaced;
  }

  const Placed = ({ placed }: IProps) => {


const router = useRouter();
  if (router.isFallback) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }


  return (
    
 <div className="flex flex-col mt-8">
            {/* <!-- Meet the Team --> */}
            <div className="container max-w-7xl px-4">
                {/* <!-- Section Header --> */}
                <div className="flex flex-wrap justify-center text-center mb-24">
                    <div className="w-full lg:w-6/12 px-4">
                        {/* <!-- Header --> */}
                        <h1 className="text-gray-900 text-4xl font-bold mb-8">
                        {placed.name}
                        </h1>

                        {/* <!-- Description --> */}
                        <p className="text-gray-700 text-lg font-light">
                            With over 100 years of combined experience, we've got a well-seasoned team at the helm.
                        </p>
                    </div>
                </div>

                {/* <!-- Team Members --> */}
                <div className="flex flex-wrap">
                    {/* <!-- Member #1 --> */}
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col">
                            {/* <!-- Avatar --> */}
                            <a href="#" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80" />
                            </a>

                            {/* <!-- Details --> */}
                            <div className="text-center mt-6">
                                {/* <!-- Name --> */}
                                <h1 className="text-gray-900 text-xl font-bold mb-1">
                                   {placed.name}
                                </h1>

                                {/* <!-- Title --> */}
                                <div className="text-gray-700 font-light mb-2">
                                    {placed.position}
                                </div>

                                {/* <!-- Social Icons --> */}
                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                    {/* <!-- Linkedin --> */}
                                    <a href={placed.linkedln} className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                                    </a>

                                    {/* <!-- Twitter --> */}
                                    <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                                    </a>

                                    {/* <!-- Instagram --> */}
                                    <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Member #2 --> */}
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col">
                            {/* <!-- Avatar --> */}
                            <a href="#" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80" />
                            </a>

                            {/* <!-- Details --> */}
                            <div className="text-center mt-6">
                                {/* <!-- Name --> */}
                                <h1 className="text-gray-900 text-xl font-bold mb-1">
                                    Denice Jagna
                                </h1>

                                {/* <!-- Title --> */}
                                <div className="text-gray-700 font-light mb-2">
                                    Tired & M. Specialist
                                </div>

                                {/* <!-- Social Icons --> */}
                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                    {/* <!-- Linkedin --> */}
                                    <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                                    </a>

                                    {/* <!-- Twitter --> */}
                                    <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                                    </a>

                                    {/* <!-- Instagram --> */}
                                    <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Member #3 --> */}
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col">
                            {/* <!-- Avatar --> */}
                            <a href="#" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80" />
                            </a>

                            {/* <!-- Details --> */}
                            <div className="text-center mt-6">
                                {/* <!-- Name --> */}
                                <h1 className="text-gray-900 text-xl font-bold mb-1">
                                    Kenji Milton
                                </h1>

                                {/* <!-- Title --> */}
                                <div className="text-gray-700 font-light mb-2">
                                    Team Memeber
                                </div>

                                {/* <!-- Social Icons --> */}
                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                    {/* <!-- Linkedin --> */}
                                    <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                                    </a>

                                    {/* <!-- Twitter --> */}
                                    <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                                    </a>

                                    {/* <!-- Instagram --> */}
                                    <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
{/* 
                    <!-- Member #4 --> */}
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col">
                            {/* <!-- Avatar --> */}
                            <a href="#" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80" />
                            </a>

                            {/* <!-- Details --> */}
                            <div className="text-center mt-6">
                                {/* <!-- Name --> */}
                                <h1 className="text-gray-900 text-xl font-bold mb-1">
                                    Doesn't matter
                                </h1>

                                {/* <!-- Title --> */}
                                <div className="text-gray-700 font-light mb-2">
                                    Will be fired
                                </div>
{/* 
                                <!-- Social Icons --> */}
                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                    {/* <!-- Linkedin --> */}
                                    <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                                    </a>

                                    {/* <!-- Twitter --> */}
                                    <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                                    </a>

                                    {/* <!-- Instagram --> */}
                                    <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  );
};

export default Placed;


// export const getStaticPaths = async () => {
//     const query = `*[_type == "post"]{
//           _id,
//           slug {
//               current
//           }    
//       }`;

// const placed = await sanityClient.fetch(query);
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == 'placed']{
    name,
    position,
    linkedln,
    companyname,
    year  }`;
};