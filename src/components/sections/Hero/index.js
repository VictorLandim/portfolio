import React, { useEffect } from 'react'
import { HeroContainer, HeroText, Title, Subtitle } from './styles'

export default () => {
  useEffect(() => {
    const onResize = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    window.addEventListener('resize', onResize)

    onResize()
  }, [])

  return (
    <HeroContainer>
      <HeroText>
        <Title>hi! i'm ∇ictor.</Title>
        <Subtitle>
          passionate full-stack developer and student <br /> currently crafting web experiences at{' '}
          <a target="_blank" href="https://aulascolmeia.com.br">
            Colmeia
          </a>
          .
        </Subtitle>
      </HeroText>
    </HeroContainer>
  )
}
