import styled from "styled-components"

export const Container = styled.div`
  background-color: var(--g-colorGray100);
  height: 5.625rem;
  border-radius: 4.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
`

export const Logo = styled.img`
  align-self: center;
`

const Nav = styled.nav`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  border-radius: 4.375rem;
`

export const Menu = styled(Nav)`
  padding: 1.375rem 2rem;
  background-color: var(--color-g-white);
`

const LinkItem = styled.a`
  font-size: 0.8rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const MenuItem = styled(LinkItem)``

export const SubMenu = styled(Nav)``

export const SubMenuItem = styled(LinkItem)``
