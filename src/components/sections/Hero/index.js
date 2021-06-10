import React from 'react'
import { HeroContainer, HeroText, Subtitle, Title } from './styles'

export default () => {
  // useEffect(() => {
  //   const onResize = () => {
  //     const vh = window.innerHeight * 0.01
  //     document.documentElement.style.setProperty('--vh', `${vh}px`)
  //   }

  //   window.addEventListener('resize', onResize)

  //   onResize()
  // }, [])

  return (
    <HeroContainer>
      <HeroText>
        <Title>i'm ∇ictor.</Title>
        <Subtitle>
          passionate front-end engineer currently <br /> crafting web experiences at{' '}
          <a target="_blank" rel="noreferrer" href="https://livenation.com/?redirect=false">
            Live Nation
          </a>
          .
        </Subtitle>
      </HeroText>
    </HeroContainer>
  )
}
