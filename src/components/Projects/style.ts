import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Text = styled.p`
  font-size: 0.8rem;
`

export const Title = styled.h1`
  font-size: 3rem;
`

export const Cards = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: center;
`

export const Card = styled.div`
  display: flex;
  width: 29.9375rem;
  flex-direction: column;
`
export const CardImageContainer = styled.div`
  display: grid;
  grid-template-areas: "image";
  width: 100%;
`

export const CardImageBackground = styled.div`
  grid-area: image;
  width: 100%;
  height: 15rem;
  background: linear-gradient(
    120deg,
    var(--color-g-aquamarine) 0%,
    transparent 40%,
    transparent 75%,
    var(--color-g-apricot) 100%
  );
  z-index: 2;
`
export const CardImage = styled.img`
  grid-area: image;
  width: 100%;
  height: 15rem;
`

export const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  border: 1px solid;
  border-color: var(--g-colorGray400);
  border-top-color: transparent;
  border-radius: 0 0 0.5rem 0.5rem;
`

export const CardTitle = styled.h3``

export const CardDescription = styled.p`
  font-size: 0.8rem;
`

export const CardStars = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Stars = styled.img``
