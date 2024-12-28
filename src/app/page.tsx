import Link from "next/link";
import Post from "./class13/postsapi";

export default async function Home() {
	const url = await fetch("https://jsonplaceholder.typicode.com/todos");
	const response = await url.json();
	console.log("todos",response);
	return (
		<main>
			<div className="bg-lime-700 align-center text-center text-violet-100 ">
			<h1 className="font-bold text-black text-7xl border-2 border-b-black text-center align-center ">TODOS 200</h1>
			{response.map((book: any , index:number) => (
				<div key={index}>
					<Link href={`${book.id}`}>
						<h1 className="text 2xl">{book.id}.
						&nbsp; &nbsp; 
							{book.title}
							
						</h1>
					</Link>
				</div>
			))}
			<Post/>
			</div>
		</main>
	);
}


