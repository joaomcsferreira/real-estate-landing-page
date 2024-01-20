import Button from "../utils/Button/Button"
import {
  BannerInfo,
  Container,
  Image,
  Input,
  InputContainer,
  Text,
  Title,
} from "./style"

const Banner = () => {
  return (
    <Container>
      <BannerInfo>
        <Text>Welcome to Realstate</Text>
        <Title>Manage Your Property</Title>
        <Text>
          Your will have everything nearby supermarket, buses, station, the
          carmen neighborhood, etc
        </Text>
        <InputContainer>
          <Input type="text" placeholder="Enter your email..." />
          <Button dark weight>
            Get a Quote
          </Button>
        </InputContainer>
      </BannerInfo>
      <Image src="./black-house.png" />
    </Container>
  )
}

export default Banner
