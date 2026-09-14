const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Vikas Kumar"
}

//course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);


//+++++++++++++++++++++++++++++++++++++ API in JOSN +++++++++++++++++++++++++++++++++++++++++++
// {
//     "name": "Vikas Kumar",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {},
    {}
]