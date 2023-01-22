import { useEffect, useState } from "react";
import Course from "./Course";
import CoursesData from "../../content/courses.json";

export default function Courses({}) {
    return (
        <ul className="grid sm:grid-rows-1 gap-6 mb-6 list-none">
            {CoursesData.map((course, index) => {
                return (
                    <Course key={index} course={course} />
                )
            })}
        </ul>
    )
}