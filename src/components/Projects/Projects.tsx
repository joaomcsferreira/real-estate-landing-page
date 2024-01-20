import {
  Card,
  CardContent,
  CardDescription,
  CardImage,
  CardImageBackground,
  CardImageContainer,
  CardStars,
  CardTitle,
  Cards,
  Container,
  Stars,
  Text,
  Title,
} from "./style"

const cardsContent = [
  {
    image: "./white-orange-house.png",
    title: "Modern Retreat",
    description:
      "Explore sleek designs and contemporary living spaces in our modern home collection.",
    stars: 4.83,
  },
  {
    image: "./white-blue-house.png",
    title: "Cozy Family Haven",
    description:
      "Discover warm and inviting atmospheres for family gatherings in our cozy home selection.",
    stars: 4.96,
  },
  {
    image: "./blue-brow-house.png",
    title: "Elegant Forest Living",
    description:
      "Embrace the tranquility of nature in our contemporary forest cabins.",
    stars: 4.51,
  },
]

const Projects = () => {
  return (
    <Container>
      <Text>Best Project of the Years</Text>
      <Title>Our recent projects</Title>

      <Cards>
        {cardsContent.map((card, index) => (
          <Card key={index}>
            <CardImageContainer>
              <CardImageBackground />

              <CardImage src={card.image} />
            </CardImageContainer>

            <CardContent>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
              <CardStars>
                <Stars src="./stars.svg" />
                <Text>{card.stars}</Text>
              </CardStars>
            </CardContent>
          </Card>
        ))}
      </Cards>
    </Container>
  )
}

export default Projects
