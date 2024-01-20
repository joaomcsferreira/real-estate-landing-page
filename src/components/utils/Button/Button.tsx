import React from "react"
import { Container } from "./style"

interface ButtonProps {
  children: React.ReactNode
  dark?: boolean
  weight?: boolean
}

const Button = ({ children, dark, weight }: ButtonProps) => {
  return (
    <Container dark={dark} weight={weight}>
      {children}
    </Container>
  )
}

export default Button
