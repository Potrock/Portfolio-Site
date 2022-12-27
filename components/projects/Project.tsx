import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectProps {
    name: string;
    description: string;
    image: StaticImageData;
    destination: string;
    techStack: string;
}

export default function Project({ name, description, image, destination, techStack }: ProjectProps) {
    return (
        <li className="">
            <div className="block h-80 relative rounded-lg overflow-hidden shadow-md group">
                <Image src={image} alt={name} fill={true} className="group-hover:opacity-50 duration-200" />
                <Link href={destination} legacyBehavior>
                    <a className="hyphens-auto block mb-2">
                        <div className="absolute rounded-lg px-4 py-4">
                            <div className="">
                                <span className="font-medium text-2xl leading-4">{name}</span>
                                <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-200">
                                    <p className="text-md">
                                        {description}
                                    </p>
                                    <p className="text-sm">
                                        {techStack}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </li >
    )
}