import {
  Card,
  CardDescription,
  CardImage,
  CardTitle,
  Cards,
  Container,
  Text,
  Title,
} from "./style"

const cardsContent = [
  {
    image: "./messages.svg",
    title: "Answer questions",
    description:
      "Streamline your home-buying journey by reaching out to us with any inquiries.",
  },
  {
    image: "./sms.svg",
    title: "Select a quote",
    description:
      "Choose from a range of personalized quotes tailored to your dream home preferences.",
  },
  {
    image: "./edit.svg",
    title: "Get registered",
    description:
      "Take the first step towards your new home—register now for exclusive updates and offerings.",
  },
]

const Contact = () => {
  return (
    <Container>
      <Text>Three steps. Three minutes.</Text>
      <Title>Everything should be this easy.</Title>
      <Cards>
        {cardsContent.map((card, index) => (
          <Card key={index}>
            <CardImage src={card.image} />
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </Card>
        ))}
      </Cards>
    </Container>
  )
}

export default Contact
