import Head from "next/head";
import Link from "next/link";

import Header from "../components/header";
// interfaces
import { IPost } from "../interfaces/posts_interface";
// Client
import { sanityClient, urlFor } from "../lib/sanity";

interface IProps {
  posts: IPost[];
}

export default function Home({ posts }: IProps) {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Gecp Tpo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div
        className="flex justify-between items-center bg-yellow-400
      border-y border-black py-10 lg:py-0
      "
      >
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
            {" "}
            <span className="underline decoration-black decoration-4">
              Medium
            </span>{" "}
            is a place to write read and connect
          </h1>
         
        </div>
        <img
          className="hidden md:inline-flex h-64 lg:h-full"
          src="https://iconape.com/wp-content/files/gc/11611/png/medium-m.png"
          alt=""
        />
      </div>
      {/* Posts */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2
      md:p-6"
      >
        {posts.map((post) => (
          <Link key={post._id} href={`post/${post.slug.current}`}>
            <div className="border rounded-lg group cursor-pointer overflow-hidden">
              <img
                className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200
                ease-in-out "
                src={urlFor(post.mainImage).url()!}
                alt={post.companyname}
              />
              <div className="flex justify-between p-5 bg-white gap-1">
                <div className="flex-shrink">
                  <p className="text-lg font-bold">{post.companyname}</p>
                  <p className="text-lg font-bold">
                  {post.companyname}
                  </p>
                  {/* <p>{post.body} by {post.author.name}</p> */}
                </div>
                <div className="h-12 w-12 flex-none ">
                  <img
                    className="rounded-full w-full h-full "
                    src={urlFor(post.author.image).url()!}
                    alt={post.author.name}
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
  const query = `*[_type=='post']{
    _id,
    companyname, 
    author->{
      name,
      image
    },
    body,
    mainImage,
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
