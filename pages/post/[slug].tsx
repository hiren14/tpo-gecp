import { sanityClient, urlFor } from "../../lib/sanity";
import Header from "../../components/header";
import { IPost } from "../../interfaces/posts_interface";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import PortableText from "react-portable-text";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

interface IProps {
  post: IPost;
}
interface IFormInput {
  _id: string;
  name: string;
  email: string;
  comment: string;
}
interface IFormResponse {
  message: string;
  error?: any;
}

const Post = ({ post }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();
  const [loading, setLoading] = useState(false);
  const [commentRes, setCommentRes] = useState<IFormResponse>({
    message: "",
  });

  const router = useRouter();
  if (router.isFallback) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    await fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        setLoading(false);
        if (res.ok) {
          res.json().then((result) => {
            console.log(result);
            setCommentRes({ ...commentRes, message: result.message });
          });
        }
        // setCommentRes(res.body);
        reset();
      })
      .catch((err) => {
        setLoading(false);
        console.error(err.message);
        setCommentRes(err.message);
      });
  };

  return (
    <main>
      <Header />
      <img
        src={urlFor(post.mainImage).url()!}
        className="w-full h-40 object-cover"
        alt=""
      />
      <article className="max-w-3xl mx-auto p-5">
 
        <h1 className="text-3xl mt-10 mb-3">Company Name:{"  "}{post.companyname}</h1>
        
        
        
        <h2 className="text-xl font-light text-gray-500 mb-2">
        {post.description}
        </h2>

{/* job post  */}

        <div className="mt-10">
        <h2 className="text-3xl mt-10 mb-3">   Job Post : </h2>
        
     
       
          <PortableText
            className=""
            {...sanityClient.config()}
            content={post.job}
            serializers={{
              h1: (props: any) => {
                return <h1 className="text-2xl font-bold my-5" {...props} />;
              },
              h2: (props: any) => (
                <h1 className="text-xl font-bold my-5" {...props} />
              ),
              h3: (props: any) => (
                <h1 className="text-lg font-bold my-5" {...props} />
              ),
              h4: (props: any) => (
                <h1 className="text-base font-bold my-2" {...props} />
              ),
              p: (props: any) => <h1 className="text-base  my-2" {...props} />,
              image: (props: any) => (
                <img
                  src={urlFor(props.asset._ref).url()!}
                  className="w-full my-10"
                  {...props}
                />
              ),
              normal: (props: any) => {
                return <p className={`text-base my-2 `} {...props} />;
              },
              li: ({ children }: any) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ href, children }: any) => (
                <a href={href} className="text-blue-500 hover:underline">
                  {children}
                </a>
              ),
            }}
          />
         
        </div>
 
 {/* package */}

 <h4 className="text-l mt-10 mb-3">
 Package: {"  "} </h4>
 <p className="text-l font-light text-gray-500 mb-2">
  {post.package}</p>
        
{/* vac */}

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

<h4 className="text-l mt-10 mb-3">
internship: {" "} </h4>   <p className="text-l font-light text-gray-500 mb-2">
     {post.inter} </p>
        

{/* bond details */}
<div className="mt-10">
          
<h4 className="text-l mt-10 mb-3">
Bond Details {" "}   </h4>
          
          <PortableText
            className=""
            {...sanityClient.config()}
            content={post.bond}
            serializers={{
              h1: (props: any) => {
                return <h1 className="text-2xl font-bold my-5" {...props} />;
              },
              h2: (props: any) => (
                <h1 className="text-xl font-bold my-5" {...props} />
              ),
              h3: (props: any) => (
                <h1 className="text-lg font-bold my-5" {...props} />
              ),
              h4: (props: any) => (
                <h1 className="text-base font-bold my-2" {...props} />
              ),
              p: (props: any) => <h1 className="text-base  my-2" {...props} />,
              image: (props: any) => (
                <img
                  src={urlFor(props.asset._ref).url()!}
                  className="w-full my-10"
                  {...props}
                />
              ),
              normal: (props: any) => {
                return <p className={`text-base my-2 `} {...props} />;
              },
              li: ({ children }: any) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ href, children }: any) => (
                <a href={href} className="text-blue-500 hover:underline">
                  {children}
                </a>
              ),
            }}
          />
        </div>


{/* 
Qualification  */}

<h4 className="text-l mt-10 mb-3">

Qualification {' '} </h4>  <p className="text-l font-light text-gray-500 mb-2">
      {post.quali}
 </p>       
{/* 
Eligibility */}
<h4 className="text-l mt-10 mb-3">
Eligibility {""}  </h4> <p className="text-l font-light text-gray-500 mb-2">
  {post.elig}
        </p>
        {/* 
selection */}

        <div className="mt-10">
          
          <h4 className="text-l mt-10 mb-3">
          Selection Process {" "}   </h4>
                    
                    <PortableText
                      className="text-l"
                      {...sanityClient.config()}
                      content={post.sel}
                      serializers={{
                        h1: (props: any) => {
                          return <h1 className="text-2xl font-bold my-5" {...props} />;
                        },
                        h2: (props: any) => (
                          <h1 className="text-xl font-bold my-5" {...props} />
                        ),
                        h3: (props: any) => (
                          <h1 className="text-lg font-bold my-5" {...props} />
                        ),
                        h4: (props: any) => (
                          <h1 className="text-base font-bold my-2" {...props} />
                        ),
                        p: (props: any) => <h1 className="text-base  my-2" {...props} />,
                        image: (props: any) => (
                          <img
                            src={urlFor(props.asset._ref).url()!}
                            className="w-full my-10"
                            {...props}
                          />
                        ),
                        normal: (props: any) => {
                          return <p className={`text-base my-2 `} {...props} />;
                        },
                        li: ({ children }: any) => (
                          <li className="ml-4 list-disc">{children}</li>
                        ),
                        link: ({ href, children }: any) => (
                          <a href={href} className="text-blue-500 hover:underline">
                            {children}
                          </a>
                        ),
                      }}
                    />
                  </div>

        {/* DATE OF INTERVIEW */}

        <p className="font-extralight text-sm space-x-4">
        DATE OF INTERVIEW{' '}
              {  new Date(post.dinter).toLocaleString()}
          </p>
      
        {/* last date of registration */}

        <p className="font-extralight text-sm space-x-4">
        last date of registration{" "}
              {  new Date(post.dlast).toLocaleString()}
          </p>
{/* last */}
<br />

{/* g forms  */}
<h2 className="text-l mt-10 mb-3">
          Registration form   </h2>

<iframe className="max-w-3xl mx-auto" src={post.gurl} width="100%" height="1000" >Loading…</iframe>


        <div className="flex items-center space-x-4">
          <img
            src={urlFor(post.author.image).url()!}
            className="h-10 w-10 rounded-full"
            alt=""
          />
          <p className="font-extralight text-sm">
            Blog Post By{" "}
            <span className="text-green-600">{post.author.name}</span> -
            Published at {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>
      
      </article>
      <hr className="max-w-lg my-5 mx-auto border border-yellow-500" />
      {commentRes.message ? (
        <div className="flex flex-col p-10 my-10 bg-yellow-500 text-white max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold">
            Thank you for submitting your comment!
          </h3>
          <p>Once it has been approved, it will appear below!</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-5 mb-10 max-w-2xl mx-auto"
        >
          <h3 className="text-sm text-yellow-500">Enjoyed this article?</h3>
          <h4 className="text-3xl font-bold">Leave a comment below!</h4>
          <hr className="py-3 mt-2" />

          <input
            {...register("_id")}
            type={"hidden"}
            name="_id"
            value={post._id}
          />
          <label className="block mb-5">
            <span className="text-gray-700">Name</span>
            <input
              {...register("name", { required: true })}
              className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring"
              type="text"
              placeholder="Enter your name"
            />
          </label>
          <label className="block mb-5">
            <span className="text-gray-700">Email</span>
            <input
              {...register("email", { required: true })}
              className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring"
              type="email"
              placeholder="Enter your email"
            />
          </label>
          <label className="block mb-5">
            <span className="text-gray-700">Comment</span>
            <textarea
              {...register("comment", { required: true })}
              className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-yellow-500 outline-none focus:ring "
              rows={8}
              placeholder="Enter your comment"
            />
          </label>
          {/* Errors */}
          <div className="flex flex-col p-5">
            {errors.name && <p className="text-red-500">- Name is required</p>}
            {errors.email && (
              <p className="text-red-500">- Email is required</p>
            )}
            {errors.comment && (
              <p className="text-red-500">- Comment is required</p>
            )}
          </div>
          <button
            disabled={loading}
            type="submit"
            className="shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline
          focus:outline-none text-white w-full rounded cursor-pointer font-bold py-2
          flex items-center justify-center
          "
          >
            {loading ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <></>
            )}
            Submit
          </button>
        </form>
      )}
      {/* Comments */}
      <div
        className="flex flex-col p-10 my-10 max-w-2xl mx-auto
     shadow-yellow-500 shadow space-y-2 "
      >
        <h3 className="text-4xl">Comments</h3>
        <hr />
        {post.comments?.length ? (
          post.comments?.map((comment) => (
            <div>
              <p>
                <span className="text-yellow-500 pr-2">{comment.name}:</span>
                {comment.comment}
              </p>
            </div>
          ))
        ) : (
          <div>
            <h1>No Comments</h1>
          </div>
        )}
      </div>
    </main>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
        _id,
        slug {
            current
        }    
    }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: IPost) => ({
    params: {
      slug: post.slug.current,
    },
  }));
  return {
    paths,
    fallback: true,
  };
};
// var change title=companyname , body=post
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == 'post' && slug.current == $slug][0]{
        _id, 
        _createdAt,
        companyname,
        
        description,
        author-> {
            name,
            image
        },
        mainImage,
        slug,
        gurl,
        job,
        package,
        vac,
        loc,
        sel,
        bond,
        quali,
        elig,
        dinter,
        dlast,
        comments[active==true]{
          name,
          email,
          comment
        }
    }`;

  const post = await sanityClient
    .fetch(query, {
      slug: params?.slug,
    })
    .catch((err) => console.error(err.message));

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
