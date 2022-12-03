const comments = ({comments}) => {
    return (
        <div>
            {
                comments.map(comment => <h1 className="text-xl my-10 mx-10" key={comment.id}>{comment?.body}</h1>)
            }
        </div>
    );
};

export default comments;

export const getServerSideProps = async()=> {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();

    return{
        props: {
            comments: data
        }
    }
}