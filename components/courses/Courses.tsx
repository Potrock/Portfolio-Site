import { useEffect, useState } from "react";
import Course from "./Course";
import CoursesData from "../../content/courses.json";

export default function Courses({}) {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses(CoursesData)

        console.log(CoursesData)
        console.log(courses)
    }, [])
    return (
        <ul className="grid sm:grid-rows-1 gap-6 mb-6 list-none">
            {courses.map((course, index) => {
                return (
                    <Course key={index} course={course} />
                )
            })}
        </ul>
    )
}