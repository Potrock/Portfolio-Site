import Navbar from "../nav/Navbar";
import NameSection from "./NameSection";

export default function Header({}) {
    return (
        <header className="py-10 grow-0 shrink-0 basis-auto">
          <div className="flex items-center justify-between w-11/12 mx-auto max-w-[1200px]">
            <NameSection />
            <Navbar />
          </div>
        </header>
    )
}