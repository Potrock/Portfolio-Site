import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectProps {
	name: string;
	description: string;
	image: StaticImageData;
	destination: string;
	techStack: string;
	date: string;
}

export default function Project({
	name,
	description,
	image,
	destination,
	techStack,
	date,
}: ProjectProps) {
	return (
		<li className="">
			<div className="relative block overflow-hidden rounded-lg shadow-md h-80 group">
				<Image
					src={image}
					alt={name}
					fill={true}
					className="duration-200 group-hover:opacity-50"
				/>
				<Link href={destination} legacyBehavior>
					<a className="block mb-2 hyphens-auto">
						<div className="absolute px-4 py-4 rounded-lg">
							<div className="">
								<span className="text-2xl font-medium leading-4">
									{name}
								</span>
								<div className="transition-all duration-200 transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
									<p className="pt-3 text-md">
										{description}
									</p>
									<p className="pt-3 text-sm">{techStack}</p>
									<p className="pt-3 text-sm">{date}</p>
								</div>
							</div>
						</div>
					</a>
				</Link>
			</div>
		</li>
	);
}
