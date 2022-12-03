import Link from "next/link";
import { useRouter } from "next/router";

const postDetails = ({ post }) => {
    const router = useRouter();
    const handleBack = () =>{
        router.push("/posts")
    }
    return (
        <div className="card w-96 mx-auto mt-8 border-2 bg-base-100">
            <div className="card-body">
                <p>PostId: {post?.id}</p>
                <h2 className="card-title">Title: {post?.title}</h2>
                <p>description: {post?.body}</p>

                <button onClick={handleBack} className="btn btn-secondary">Back</button>
            </div>
            
        </div>
    );
};
export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await res.json();
    return {
        props: {
            post: data
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    const paths = posts.map(post => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export default postDetails;