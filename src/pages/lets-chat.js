import React from 'react'
import styled, { keyframes } from 'styled-components'

import ChatForm from '../components/ChatForm'

const Container = styled.div`
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
`

const Heading = styled.div`
  display: flex
  flex-direction: column
  text-align: center
  justify-content: center
  align-items: center
`

const fadeOut = keyframes`
  from {
    opacity: 1
    position: absolute
  }

  85% {
    opacity: 1
    position: absolute
  }

  to {
    opacity: 0
    position: absolute
  }
`

const fadeIn = keyframes`
from {
  opacity: 0
  position: absolute
}

15% {
  opacity: 1
  position: absolute
}

85% {
  opacity: 1
  position: absolute
}

to {
  opacity: 1
  position: absolute
}
`

const fadeInAndOut = keyframes`
  from {
    opacity: 0
    position: absolute
  }

  15% {
    opacity: 1
    position: absolute
  }

  85% {
    opacity: 1
    position: absolute
  }

  to {
    opacity: 0
    position: absolute
  }
`

const TransitionBox = styled.div`
  display: flex
  flex-direction: row
  justify-content: center
  margin-bottom: 2rem
`

const TransitionHeading = styled.h1`
  margin: 0 auto
  opacity: 0
  position: absolute
  display: inline-block
  animation: ${props => (props.index===0) ? fadeOut : ((props.last) ? fadeIn : fadeInAndOut)} ${(props) => props.current && 'ease-in-out 1'}
  animation-duration: ${props => props.index===0 ? '7s' : '7.5s'}
  animation-delay: ${props => (props.index > 0) ? props.index*7.5+'s' : 0}
  animation-direction: normal
  animation-fill-mode: normal
  animation-play-state: running 5s
`

const generateHeadings = () => {
  const headings = [
    "Share Your Story",
    "Leave a Suggestion",
    "Ask Me Anything"
  ]
  for (let i=0; i<3; ++i) {
    let saved = headings[i]
    let value = Math.floor(Math.random()*3)
    headings[i] = headings[value]
    headings[value] = saved
  }
  return headings
}

const letsChat = () => (
  <Container>
    <Heading>
      <TransitionBox>
        {generateHeadings().map((heading, index, arr) => {
          //console.log("Random number ==> " + Math.random() * 10)
          return (
            <TransitionHeading index={index} current={false} key={index}>{heading}</TransitionHeading>
          )
        })}
        </TransitionBox>
    </Heading>

    <ChatForm />
  </Container>
)

export default letsChat
