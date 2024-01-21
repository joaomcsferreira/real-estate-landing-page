import { Container } from "./style"

import Header from "../Header/Header"
import Banner from "../Banner/Banner"
import Contact from "../Contact/Contact"
import Projects from "../Projects/Projects"
import Newsletter from "../Newsletter/Newsletter"
import About from "../About/About"

const Home = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Contact />
      <Projects />
      <About />
      <Newsletter />
    </Container>
  )
}

export default Home
