import { sanityClient, urlFor } from "../../lib/sanity";
import Header from "../../components/header";
import { IPlaced } from "../../interfaces/placed_interface";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

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
    <main>
      <Header />
      <div className="flex flex-wrap justify-center text-center mb-24">
            {/* <!-- Meet the Team --> */}
            {/* <div className="w-full lg:w-6/12 px-4"> */}
              <div className="justify-center text-center mb-24">
                        {/* <!-- Header --> */}
                        <h1 className="text-gray-900 text-4xl font-bold mb-8">
                        {placed.companyname}
                        </h1>
                        
                        {/* <!-- Description --> */}
                        <p className="text-gray-700 text-lg font-light">
                            With over 100 years of combined experience, we've got a well-seasoned team at the helm.
                        </p>
                        {/* </div> */}
                    </div>
            {placed.sdatas?.length ? (
          placed.sdatas?.map((sdata) => (
            
            <div className="container max-w-7xl px-4">
                {/* <!-- Section Header --> */}
                <div className="flex flex-wrap justify-center text-center mb-24">
                  
                </div>

                {/* <!-- Team Members --> */}
                <div className="flex flex-wrap justify-center text-center mb-2">
                    {/* <!-- Member #1 --> */}
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col">
                            {/* <!-- Avatar --> */}
                            <a href="#" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src={urlFor(sdata.simg).url()!} />
                            </a>

                            {/* <!-- Details --> */}
                            <div className="text-center mt-6">
                                {/* <!-- Name --> */}
                                <h1 className="text-gray-900 text-xl font-bold mb-1">
                                   {sdata.name}
                                </h1>

                                {/* <!-- Title --> */}
                                <div className="text-gray-700 font-light mb-2">
                                    {sdata.position}
                                </div>
                                <div className="text-gray-700 font-light mb-2">
                                    {sdata.package}
                                </div>


                                {/* <!-- Social Icons --> */}
                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                    {/* <!-- Linkedin --> */}
                                    <a href={sdata.linkedln} className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i className= "FaLinkedinIn stext-indigo-500 mx-auto mt-2"></i>
                                    </a>

                                   </div>
                            
                                   
                                                                   </div>
                            </div>
                        </div>
                    </div>

                  
                   

                </div>
             ))
             ) : (
               <div>
                 <h1>data error</h1>
               </div>
             )}
        </div>
    </main>
  );
};

export default Placed;

export const getStaticPaths = async () => {
  const query = `*[_type == "placed"]{
        _id,
        slug {
            current
        }    
    }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((placed: IPlaced) => ({
    params: {
      slug: placed.slug.current,
    },
  }));
  return {
    paths,
    fallback: true,
  };
};
// var change title=companyname , body=placed
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == 'placed' && slug.current == $slug][0]{
    slug, 
    companyname,
    sdatas[] {
    simg,
    package,
    name,
    position,
    linkedln,
    year
    }
    
    }`;

  const placed = await sanityClient
    .fetch(query, {
      slug: params?.slug,
    })
    .catch((err) => console.error(err.message));

  if (!placed) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      placed,
    },
    revalidate: 60,
  };
};
