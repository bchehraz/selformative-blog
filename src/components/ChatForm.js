
import React from 'react'
import styled, { keyframes } from 'styled-components'

const Form = styled.form`
  padding: 2em
  text-align: center
  width: 100%
  max-width: 500px
  z-index: 0
  background-color: #fff
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
`

const FormHeader = styled.h3`
  padding: 0
  margin: 0
  color: black
`

const TextInput = styled.input`
  margin: 1em auto
  width: 100%
  padding: 1em
  color: white
  background-color: #333
  border: none
  margin-bottom: ${props => props.beganTyping ? '4rem' : '0'}
`

const MessageField = styled.textarea`
  width: 100%
  padding: 1em
  margin: 0 auto
  color: white
  background-color: #333
  border: none
  min-height: 200px
`

const CharLimit = styled.div`
  border-radius: 5px
  display: inline
  padding: 0.5em
`

const SendButton = styled.input`
  width: 100%
  color: white
  background-color: #4e85ad
  padding: 1em
  margin-top: 1em
`

const CharCountContainer = styled.div`
  paddingBottom: 1
  -webkit-transition: all 500ms ease-in-out;
  -moz-transition: all 500ms ease-in-out;
  -ms-transition: all 500ms ease-in-out;
  -o-transition: all 500ms ease-in-out;
  transition: all 500ms ease-in-out;
  opacity: ${props => props.beganTyping ? 1 : 0}
  margin: 0 auto
  grid-column: 1;
  grid-row: 1;
`

const MessageFieldLabel = styled.h3`
  opacity: ${props => props.beganTyping ? 0 : 1}
  grid-column: 1;
  grid-row: 1;
  -webkit-transition: all 500ms ease-in-out;
  -moz-transition: all 500ms ease-in-out;
  -ms-transition: all 500ms ease-in-out;
  -o-transition: all 500ms ease-in-out;
  transition: all 500ms ease-in-out;
`

class ChatForm extends React.Component {
  constructor(props) {
    super(props)

    const MAXIMUM_MESSAGE_LENGTH = 512

    this.state = {
      email: "",
      message: "",
      maxLength: MAXIMUM_MESSAGE_LENGTH,
      remaining: MAXIMUM_MESSAGE_LENGTH
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this)
    this.selectColorBasedOnRemaining = this.selectColorBasedOnRemaining.bind(this)
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  handleTextAreaChange(event) {
    this.setState({
      message: event.target.value,
      remaining: this.state.maxLength - event.target.value.length
    })
  }

  selectColorBasedOnRemaining() {
    const { remaining } = this.state;
    return `rgb(255, ${remaining > 150 ? 255 : remaining+100}, ${remaining > 200 ? 255 : remaining})`
  }

  render() {
    const { maxLength, remaining } = this.state

    return (
      <Form>
        <FormHeader>{`Let's Chat`}</FormHeader>
        <TextInput
          type="email"
          placeholder="youremail@email.com"
          onChange={this.handleEmailChange}
        />


        <div style={{ display: 'grid' }}>
          <MessageFieldLabel beganTyping={remaining !== 512}>
            {'Your Message'}
          </MessageFieldLabel>
          <CharCountContainer
            beganTyping={remaining !== 512}
          >
            <h2>{`Characters Remaining: `}
              <CharLimit
                status={maxLength - this.state.message.length}
                style={{
                  backgroundColor: this.selectColorBasedOnRemaining(),
                  color: `${(remaining > 68) ? 'black' : 'white'}`
                }}
              >
                {`${maxLength - this.state.message.length}`}
              </CharLimit>
            </h2>
          </CharCountContainer>
        </div>
        <MessageField
          placeholder=""
          maxLength={maxLength}
          onChange={this.handleTextAreaChange}
          beganTyping={remaining !== 512}
        />

        <SendButton type="button" value="Send" />
      </Form>
    )
  }
}

export default ChatForm
