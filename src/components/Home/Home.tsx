import { Container } from "./style"

import Header from "../Header/Header"
import Banner from "../Banner/Banner"
import Contact from "../Contact/Contact"
import Projects from "../Projects/Projects"
import Newsletter from "../Newsletter/Newsletter"

const Home = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Contact />
      <Projects />
      <Newsletter />
    </Container>
  )
}

export default Home
