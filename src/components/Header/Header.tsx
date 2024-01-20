import { Container, Logo, Menu, MenuItem, SubMenu, SubMenuItem } from "./style"
import Button from "../utils/Button/Button"

const Header = () => {
  return (
    <Container>
      <Logo src="./logo.svg" />

      <Menu>
        <MenuItem>About us</MenuItem>
        <MenuItem>Projects</MenuItem>
        <MenuItem>Agents</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>Listings</MenuItem>
      </Menu>

      <SubMenu>
        <SubMenuItem>Other services</SubMenuItem>
        <Button>Contact us</Button>
      </SubMenu>
    </Container>
  )
}

export default Header
