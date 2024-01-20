import styled from "styled-components"

interface ButtonProps {
  dark?: boolean
  weight?: boolean
}

export const Container = styled.button<ButtonProps>`
  border: 2px solid;
  width: 9.875rem;
  height: 3.75rem;
  border-radius: 2.5rem;
  font-weight: ${({ weight }) => weight && 700};
  font-size: 0.9rem;
  color: ${({ dark }) =>
    dark ? "var(--color-g-white)" : "var(--color-g-black)"};
  border-color: ${({ dark }) =>
    dark ? "var(--g-colorGray700)" : "var(--g-colorGray500)"};
  background-color: ${({ dark }) =>
    dark ? "var(--g-colorGray700)" : "var(--color-g-white)"};

  cursor: pointer;

  &:hover {
    background: linear-gradient(
      90deg,
      var(--color-g-aquamarine),
      var(--color-g-apricot)
    );

    color: var(--color-g-black);
    border-color: var(--color-g-white);
  }
`
