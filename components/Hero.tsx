export default function Hero({ }) {
    return (
        <div className="flex flex-col grow shrink-0 basis-auto justify-center pt-8 pr-0 pb-16 pl-0">
            <div className="flex flex-col">
                <div className="mb-2 leading-4 text-current">
                    <span className="text-sm md:text-xl text-yellow">
                        B.S. Computer Science + Philosophy, <span className="text-red-600">McGill University</span>
                    </span>
                </div>
                <div className="mb-10 leading-4">
                    <span className="text-4xl md:text-8xl text-white block">
                        Software Engineer
                    </span>
                </div>
                <div>
                    <span className="font-light leading-6 text-2xl md:text-4xl text-white">Full stack developer with experience in Crypto, Web3, and Machine Learning.</span>
                </div>
            </div>
        </div>
    )
}