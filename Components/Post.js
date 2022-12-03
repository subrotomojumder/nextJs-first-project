import Link from 'next/link';
import React from 'react';

const Post = ({ post }) => {

    return (
        <div className="card w-full my-4 bg-slate-400 shadow-xl">
            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="card-title">{post?.title}</h2>
                    <Link href={`/posts/${post.id}`}>
                        <button className="btn btn-primary">See Details</button>
                    </Link>
                </div>
                <p>{post?.body}</p>
            </div>
        </div>
    );
};

export default Post;