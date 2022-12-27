import NavItem from "./NavItem";

export default function Navbar({ }) {
    return (
        <>
            <div className="flex items-center">
                <nav className="flex items-center">
                    <div className="font-normal">
                        <ul className="flex list-none">
                            <NavItem destination="/about" name="About" />
                            <NavItem destination="https://www.github.com/Potrock" name="Github" />
                            <NavItem destination="https://www.twitter.com/Potrock_" name="Twitter" />
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}