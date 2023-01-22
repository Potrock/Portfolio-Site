interface CourseProps {
	course: {name: String; courseCode: String; description: String; technologies: String;}
}

export default function Course(props: CourseProps) {
	return (
		<li className="">
			<div className="block bg-gray-800 rounded-lg shadow-md group">
				<a className="hyphens-auto block mb-2">
					<div className="rounded-lg py-4">
						<div className="px-4">
							<span className="font-medium text-2xl leading-4">
								{props.course.name}
							</span>
                            <span className="pl-2 text-sm text-gray-400">
                                {props.course.courseCode}
                            </span>
							<div className="">
								<p className="pt-3 text-md">
									{props.course.description}
								</p>
								<p className="pt-3 text-sm">
									{props.course.technologies}
								</p>
							</div>
						</div>
					</div>
				</a>
			</div>
		</li>
	);
}
