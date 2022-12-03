import Image from "next/image";
import Link from "next/link";

const Error = () => {
    return (
        <div className="text-center my-6">
            <Image src="/error.jpg" width={500} height={200}></Image>
            <Link href='/'>
            <button className="btn btn-danger">
                back home
            </button>
            </Link>
        </div>
    );
};

export default Error;