export default function Hero({}) {
	return (
		<div className="flex flex-col justify-center pt-8 pb-12 pl-0 pr-0 grow shrink-0 basis-auto">
			<div className="flex flex-col">
				<div className="mb-2 leading-4 text-current">
					<span className="text-sm md:text-xl text-yellow">
						M.Sc Computer Science + Philosophy,{" "}
						<span className="text-red-600">McGill University</span>
					</span>
				</div>
				<div className="mb-10 leading-4">
					<span className="block text-4xl text-white md:text-8xl">
						Software Engineer
					</span>
				</div>
				<div>
					<span className="text-2xl font-light leading-6 text-white md:text-4xl">
						Full Stack Developer with experience in Finance, Web3,
						and Machine Learning
					</span>
				</div>
			</div>
		</div>
	);
}
