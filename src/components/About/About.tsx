import Button from "../utils/Button/Button"
import {
  Actions,
  Container,
  Image,
  Info,
  State,
  StateInfo,
  StatesContainer,
  SubTitle,
  Text,
  Title,
  Wrapper,
} from "./style"

const states = [
  {
    id: 1,
    title: "12+",
    type: "Customers",
  },
  {
    id: 2,
    title: "14+",
    type: "Offices",
  },
  {
    id: 3,
    title: "10+",
    type: "Students",
  },
]

const About = () => {
  return (
    <Container>
      <Title>We are a global, boutique real estate brokerage</Title>

      <Wrapper>
        <Info>
          <SubTitle>The transfer of real estate</SubTitle>
          <Text>
            As experts in the field, we provide comprehensive services to
            clients around the world, ensuring a seamless and efficient process
            for the buying and selling of properties. Whether you are looking to
            acquire a new home, invest in commercial real estate, or sell a
            property, our team is dedicated to delivering personalized and
            professional assistance at every step.
          </Text>

          <Actions>
            <Button dark>Book Now!</Button>
            <Button>Read More</Button>
          </Actions>

          <StatesContainer>
            {states.map((stat) => (
              <State key={stat.id}>
                <StateInfo>{stat.title}</StateInfo>
                <Text>{stat.type}</Text>
              </State>
            ))}
          </StatesContainer>
        </Info>

        <Image src="./customers.png" />
      </Wrapper>
    </Container>
  )
}

export default About
