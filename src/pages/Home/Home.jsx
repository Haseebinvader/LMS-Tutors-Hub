import Courses from "../../views/Home/Courses"
import Hero from "../../views/Home/Hero"
import Teachers from "../../views/Home/Teachers"
import AuthRoute from "../../views/Home/authRoute"

const Home = () => {
  return (
    <>
      <Hero />
      <Courses />
      <Teachers />
      <AuthRoute />
    </>
  )
}

export default Home