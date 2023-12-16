export const NavLinks = [
    { href: '/', key: 'Home', Value: 'Home' },
    { href: '/About', key: 'About', Value: 'About' },
    { href: '/Courses', key: 'Courses', Value: 'Courses' },
    { href: '/Teachers', key: 'Teachers', Value: 'Teachers' },
    { href: '/Contact', key: 'Contact', Value: 'Contact' },
]

// Hero Data
export const HeroData = {
    "Hero_Heading": "World Class Learning Institute",
    "Hero_Desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae omnis officia eum illum quisquam distinctio quis commodi totam adipisci id? Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, ipsa."
}

// Courses Section - Home Page

// Courses
import coursepic from '../assets/Images/coursepic.jpg'
import course1 from '../assets/Images/course1.jpg'
import course2 from '../assets/Images/course2.jpg'
import course3 from '../assets/Images/course4.jpg'

export const coursesData = [
    { "Course_Name": "Python", "Class": "10th", "Fee": 5000, "Instructor": "Ahmed Ali", Image: coursepic },
    { "Course_Name": "GraphQl", "Class": "9th", "Fee": 5000, "Instructor": "Hakim Sulehria", Image: course1 },
    { "Course_Name": "Javascript", "Class": "7th", "Fee": 5000, "Instructor": "M. Abdullah", Image: course2 },
    { "Course_Name": "Laravel", "Class": "12th", "Fee": 5000, "Instructor": "M. Shahvaiz", Image: course3 },
]

// Teachers
import teacher1 from '../assets/Images/teacher-1.jpg'
import teacher2 from '../assets/Images/teacher-2.jpg'
import teacher3 from '../assets/Images/teacher-3.jpg'
import teacher4 from '../assets/Images/teacher-4.jpg'

export const teacherData = [
    { "Name": "M. Abdullah", "Experience": "4 Years", "Qualification": "BS Software Engineering", Image: teacher1 },
    { "Name": "M. Shahvaiz", "Experience": "4 Years", "Qualification": "BS Software Engineering", Image: teacher2 },
    { "Name": "Ahmed Ali", "Experience": "4 Years", "Qualification": "BS Software Engineering", Image: teacher3 },
    { "Name": "Hakim Sulehria", "Experience": "4 Years", "Qualification": "BS Software Engineering", Image: teacher4 },
]