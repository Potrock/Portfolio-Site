import Image from "next/image";
import Link from "next/link";
import Potrock_IMG from "../../assets/potrock_img.jpeg";

export default function NameSection({}) {
	return (
		<Link href="/">
			<div className="flex items-center text-white font-bold">
				<Image
					className="block rounded-3xl mr-2 w-12 h-12"
					src={Potrock_IMG}
					width={48}
					height={48}
					alt="Potrock"
				/>
				<span className="flex flex-wrap align-center">
					<span>Patrick</span>
				</span>
			</div>
		</Link>
	);
}
