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

const Newsletter = () => {
  return (
    <Container>
      <BannerInfo>
        <Title>Subscribe Our Newsletter</Title>
        <Text>
          Ready to supercharge your journey towards finding the perfect home?
          Look no further! By subscribing to our newsletter, you'll gain access
          to a world of exclusive perks and stay ahead in the quest for your
          dream abode.
        </Text>
        <InputContainer>
          <Input type="text" placeholder="Enter your email..." />
          <Button dark weight>
            Get a Quote
          </Button>
        </InputContainer>
      </BannerInfo>
      <Image src="./white-brown-house.png" />
    </Container>
  )
}

export default Newsletter
