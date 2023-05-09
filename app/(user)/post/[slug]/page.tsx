import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import { RichTextComponents } from "../../../../components/RichTextComponents";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";

type Props = {
  params: {
    slug: string;
  };
}

// export const revalidate = 60          // revalidate this page every 60 seconds



export async function generateStaticParams() {
  const slugRoutes = [
    "a-list-of-useful-npm-packages-for-react-developers",
    "react-awesome-components",
    "the-difference-between-the-clever-developer-and-the-wise-developer",
    "a-programmer-turned-an-open-source-tool-into-a-usd7-500-000-000-empire",
    "up-and-running-with-golang-reactjs-and-mongodb-in-5-minutes-or-less",
    "state-management-in-react-easy-peasy",
    "sanity-studio-v3",
    "awesome-things-related-to-react-hooks"
  ]

  return slugRoutes.map((slug) => ({
    slug,
  }))
}


const Post = async ({ params: { slug } }: Props) => {

  const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
    ...,
    author->,
    categories[]->,
  }
    `

  const post: Post = await client.fetch(query, { slug })

  return (
    <article className="px-10 p-18">
      <section className="space-y-2 mb-10 border border-[#0ACBCB] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-20 blur-sm p-10">
            <img
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={JSON.stringify(post.author.name)}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 100vw,
              100vw"
            />
          </div>

          <section className="p-5 bg-[#0ACBCB] w-full ">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p className="text-sm">
                  {
                    new Date(post._createdAt).toLocaleDateString(
                      "en-US",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                      }
                    )
                  }
                </p>
              </div>

              <div className="flex items-center space-x-2 text-gray-900">
                <img
                  className="rounded-full"
                  src={urlFor(post.author.image).url()}
                  alt={JSON.stringify(post.author.name)}
                  height={40}
                  width={40}
                />

                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                </div>
              </div>
            </div>

            <div>
              <h2 className="italic pt-10">{post.description}</h2>
              <div className="flex items-center justify-start mt-auto space-x-2">
                {
                  post.categories.map(category => {
                    return (
                      <p key={category._id}
                        className="bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold mt-4"
                      >
                        {category.title}
                      </p>
                    )
                  })
                }
              </div>
            </div>
          </section>
        </div>
      </section>

      <div className="h-full mx-auto  text-white justify-items-center text-center">
      <div className="container my-24 px-6 py-6 mx-auto shadow-lg rounded-lg p-5 text-white">
              
<h1 className="text-3xl mt-10 mb-3">Company Name:{"  "}{post.companyname}</h1>
{/* <h2 className="text-xl font-light mb-2">
        {post.description}
        </h2> */}
        {/* job post  */}

        <div className="mt-10 ">
        <h2 className="text-3xl mt-10 mb-3 ">   Job Post : </h2>
        
        <PortableText value={post.job} components={RichTextComponents} />
     
       </div>
       <h4 className="text-l mt-10 mb-3">
 Package: {"  "} </h4>
 <p className="text-l  inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
  {post.package}</p>
      
  <h4 className="text-l mt-10 mb-3">
Vacancy: {" "} </h4> <p className="text-l font-light text-gray-500 mb-2">
        {post.vac}
 </p>      
{/* job location */}

<h4 className="text-l mt-10 mb-3">
Job Location: {" "}</h4>   <p className="text-l font-light text-gray-500 mb-2">
      {post.loc}
 </p>       
{/* internship  */}
<div className="mt-10 ">
<h2 className="text-3xl mt-10 mb-3 "> Bond Details:  </h2>
        
        <PortableText value={post.inter} components={RichTextComponents} />
     </div>

{/* 
Qualification  */}

<h4 className="text-l  font-blod text-gray-500 mb-2">

Qualification {' '} </h4>  <p className="text-ltext-l  inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      {post.quali}
 </p>       
 <br />
{/* 
Eligibility */}
<h4 className="text-l  font-light text-gray-500 mb-2">
Eligibility {""}  </h4> <p className="text-l text-l  inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
  {post.elig}
        </p>
          {/* DATE OF INTERVIEW */}
          <br />

<p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2  space-x-4">
DATE OF INTERVIEW{' '}
{
                    new Date(post.dinter).toLocaleDateString(
                      "en-US",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                      }
                    )
                  }
  </p>

{/* last date of registration */}
<br />

<p className="font-extralight text-m  inline-block bg-gray-200 rounded-full px-3 py-1 text-sm  text-gray-700 mr-2 mb-2 space-x-4">
last date of registration{" "}
{
                    new Date(post.dlast).toLocaleDateString(
                      "en-US",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                      }
                    )
                  }
  </p>
{/* last */}
<br />

{/* g forms  */}

      </div>
      </div>
    </article>
  
  )
}

export default Post
