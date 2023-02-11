import { sanityClient, urlFor } from "../../lib/sanity";
import Header from "../../components/header";
import { IPlaced } from "../../interfaces/placed_interface";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

interface IProps {
  placed: IPlaced;
}

const Splaced = ({ placed }: IProps) => {
 

  const router = useRouter();
  if (router.isFallback) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
 
  

  return (
<>
<Header />
      
          </>  
  );
};

export default Splaced;

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
