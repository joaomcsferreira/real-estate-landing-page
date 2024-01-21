import styled from "styled-components"

export const Container = styled.div`
  height: 20.5625rem;
  background: linear-gradient(
    90deg,
    var(--color-g-aquamarine),
    var(--color-g-apricot)
  );
  border-radius: 0.9375rem;
  display: flex;
  justify-content: space-between;
  position: relative;
`

export const Image = styled.img`
  position: absolute;
  right: 0;
  top: -50px;
  height: 130%;
`

export const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  padding: 3rem;
  width: 60%;
`

export const Text = styled.p`
  font-size: 0.8rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 2.5rem;
  font-weight: 700;
`

export const InputContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  border-radius: 2.5rem;
  width: 70%;
`

export const Input = styled.input`
  border: none;
  background: none;
  padding-left: 2rem;

  &:focus {
    outline: none;
  }
`
