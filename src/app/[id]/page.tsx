import Link from "next/link";
const DynamicBook = async (props: any) => {
	// const url = await fetch(`https://simple-books-api.glitch.me/books/8342398432489`);
	const url = await fetch(
		`https://simple-books-api.glitch.me/books/${props.params.id}`
	);
	const res = await url.json();
	console.log("SingleBookREsponse", res);

	return (
        <div>
		<h1 className='pl-5 text-5xl bg-amber-200 border-2 border-red-600'>
			{props.params.id} <br />
			{res.name} <br />
			{res.author} <br />
            {res.title}<br/>
            {res.price}

		</h1>
        <div className="flex justify-center items-center ">
       <Link href="/"><button className="px-4 py-4 bg-blue-500 hover:bg-blue-800 hover:scale-110 transform transition duration-300 ease-in-out">BACK TO PAGE </button></Link> 
        </div>
        </div>
	);
};

export default DynamicBook;