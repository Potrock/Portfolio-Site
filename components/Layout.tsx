import Header from "./header/Header";

export default function Layout({ children }: any) {
	return (
		<div className="flex-col min-h-screen relative block bg-gray-900 text-white">
			<Header />
			<div className="flex flex-col w-11/12 mx-auto max-w-[1200px] grow shrink-0 basis-auto">
				{children}
			</div>
		</div>
	);
}
