import Head from "next/head";
import Link from "next/link";

import Header from "../../components/header";
import { IPlaced } from "../../interfaces/placed_interface";
// interfaces// Client
import { sanityClient, urlFor } from "../../lib/sanity";
import Placed from "./[slug]";

interface IProps {
  posts: IPlaced
}

export default function Home({ posts }: IProps) {
  return (
    <div className="max-w-7xl mx-auto">
     
      <Header />
      <div
        className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0"
      >
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
            {" "}
            <span className="underline decoration-black decoration-4">
              Tnp site  
            </span>{" "}
            to find the placement and past placement drives
          </h1>
         
         
        </div>
        <img
          className="hidden md:inline-flex h-64 lg:h-full"
          src=""
          alt=""
        />
      </div>
      {/* Posts */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2
      md:p-6"
      >
        {posts.map((placed) => (
          <Link key={placed._id} href={`placed/${placed.slug.current}`}>
            <div className="border rounded-lg group cursor-pointer overflow-hidden">
              <img
                className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200
                ease-in-out "
                src={urlFor(placed.cimg).url()!}
                alt={placed.companyname}
              />
              <div className="flex justify-between p-5 bg-white gap-1">
                <div className="flex-shrink">
                  <p className="text-lg font-bold">{placed.companyname}</p>
                
                  {/* <p>{placed.body} by {placed.author.name}</p> */}
                </div>
                <div className="h-12 w-12 flex-none ">
                  <img
                    className="rounded-full w-full h-full "
                    src={urlFor(placed.author.image).url()!}
                    alt={placed.author.name}
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export const getServerSideProps = async () => {
  const query = `*[_type=='placed']{
    _id,
    companyname, 
    cimg,
    author->{
      name,
      image
    },
    slug
  }`;

  const posts = await sanityClient
    .fetch(query)
    .catch((err) => console.error(err));

  return {
    props: {
      posts,
    },
  };
};
