import Link from "next/link";

export default function NoListings({ url, url_text, title, comment }: any) {
	return (
		<div className="flex flex-col text-center text-stone-800 font-bold justify-center py-10">
			<p>OOPS! 🤭</p>
			{/* <p>You have not listed any job yet! :)</p> */}
			<p>{title}</p>
			<p>{comment}</p>
			{/* <p>List a job to see your jobs.</p> */}

			<Link href={url}>
				<button className="border rounded text-yellow-500 hover:text-white hover:bg-black transition-all duration-700 border-yellow-500 hover:border-white p-3 mt-6">
					{url_text}
				</button>
			</Link>
		</div>
	);
}
