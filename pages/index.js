import Link from "next/link";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";

export default function Home({ posts }) {
  return (
    <div className="w-[90%] mx-auto">
      <Banner></Banner>
      <div className="text-center">
        {
          posts.map(post => <div className="card w-full my-4 bg-slate-400 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="card-title">{post?.title}</h2>
              </div>
              <p>{post?.body}</p>
            </div>
          </div>)
        }
        <Link href='/posts'>
          <button className="btn btn-primary my-6">
            See more....
          </button>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
  const data = await res.json();
  // console.log(data)
  return {
    props: {
      posts: data
    }
  }
}