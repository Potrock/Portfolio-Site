import Header from "./header/Header";

export default function Layout({ children }: any) {
    return (
        <div className="flex-col min-h-screen relative block bg-gray-900 text-white">
        <Header />
            {children}
        </div>
    )
}
