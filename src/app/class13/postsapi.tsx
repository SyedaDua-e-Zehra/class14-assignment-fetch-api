import Link from 'next/link'
import React from 'react'

export  default async function post() {
	const url = await fetch("https://jsonplaceholder.typicode.com/posts");
	const res = await url.json();
	console.log( "posts:",res);
	return (
		<main>
			<h1 className="font-bold text-black text-7xl border-2 border-black text-center align-center ">POSTS 100</h1>
			{res.map((user: any , index:number) => (
				<div key={index}>
					<Link href={`${user.id}`}>
						<h1 className="text 2xl">{user.id}.
						&nbsp; &nbsp; 
							{user.title}
							
						</h1>
					</Link>
				</div>
			))}
		</main>
	);
}


