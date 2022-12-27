import Link from "next/link";

interface NavProps {
    name: string;
    destination: string;
}

export default function NavItem({ name, destination }: NavProps) {
    return (
        <li className="relative">
            <Link href={destination} legacyBehavior>
                <a className="flex items-center relative z-1 py-3 px-5 leading-4">
                    {name}
                </a>
            </Link>
        </li>
    )
}