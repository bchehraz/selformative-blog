import React from 'react'
import styled, { keyframes } from 'styled-components'

import BgImg from '../components/BgImage'
import ChatForm from '../components/ChatForm'

const Container = styled.div`
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  margin: 0 auto
  height: auto
`

const Heading = styled.div`
  display: flex
  flex-direction: column
  text-align: center
  justify-content: center
  align-items: center
`

const fadeOut = keyframes`
  25% {
    opacity: 1
  }

  30% {
    opacity: 0
  }

  93.75% {
    opacity: 0
  }

  to {
    opacity: 1
  }
`

const fadeInAndOut = keyframes`
  from, to {
    opacity: 0
  }

  15%, 85% {
    opacity: 1
  }
`

const wait = keyframes`
  from, to {
    opacity: 0
  }
`

const TransitionBox = styled.div`
  display: flex
  flex-direction: row
  justify-content: center
  margin-bottom: 5rem
`

const TransitionHeading = styled.h1`
  margin: 0 auto
  opacity: ${props => props.index === 0 ? 1 : 0}
  position: absolute
  padding: 2rem 0
  display: inline-block
  animation: ${props => (props.index===0) ? fadeOut : fadeInAndOut} ease-in-out 1
  animation-duration: ${props => props.index===0 ? '24s' : '7.5s'}
  animation-delay: ${props => (props.index > 0) ? props.index*7.5+'s' : 0}
  animation-direction: normal
  animation-fill-mode: normal
  animation-play-state: running
  color: white
  width: 100%
`

class LetsChat extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      headings: []
    }

    this.generateHeadings = this.generateHeadings.bind(this)
  }

  componentWillMount() {
    this.setState({
      headings: this.generateHeadings()
    })
  }

  generateHeadings() {
    const headings = [
      "Share Your Story.",
      "Leave a Suggestion.",
      "Ask Me Anything."
    ]
    for (let i=0; i<3; ++i) {
      let saved = headings[i]
      let value = Math.floor(Math.random()*3)
      headings[i] = headings[value]
      headings[value] = saved
    }
    return headings
  }

  render() {
    const { data } = this.props;

    return(
      <Container>
        <BgImg
          image={data.chatImage}
        />
        <Heading>
          <TransitionBox>
            {this.state.headings.map((heading, index, arr) => {
              //console.log("Random number ==> " + Math.random() * 10)
              return (
                <TransitionHeading index={index} key={index}>{heading}</TransitionHeading>
              )
            })}
            </TransitionBox>
        </Heading>
        <ChatForm />
      </Container>
    )
  }
}

export default LetsChat

export const query = graphql`
  query ChatPageQuery {
    chatImage: imageSharp(id: { regex: "/chat/" }) {
      sizes(maxWidth: 2000) {
          ...GatsbyImageSharpSizes
      }
    }
  }
`
