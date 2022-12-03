import React from 'react';
import Post from '../../Components/post';

const Posts = ({ posts }) => {
    return (
        <div>
            <h2 className='text-center my-6 text-2xl'>The number of posts {posts.length}</h2>
            <div>
                {
                    posts.map(post =>  <Post post={post} key={post.id}></Post>)
                }
            </div>
        </div>
    );
};
export default Posts;

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const data = await res.json();
    // console.log(data)
    return {
        props: {
            posts: data
        }
    }
}
