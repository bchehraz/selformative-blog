
import React from 'react'
import styled, { keyframes } from 'styled-components'

const Form = styled.form`
  padding: 2em
  text-align: center
  width: 100%
  max-width: 500px
`

const FormHeader = styled.h3`
  padding: 0
  margin: 0
`

const TextInput = styled.input`
  margin: 1em auto
`

const MessageField = styled.textarea`
  width: 100%
  padding: 1em
  margin: 0 auto
`

const CharLimit = styled.div`
  border-radius: 5px
  display: inline
  padding: 0.5em
  color: #fff
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

        <MessageField
          placeholder="Max characters: 512"
          maxLength={maxLength}
          onChange={this.handleTextAreaChange}
        />

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
      </Form>
    )
  }
}

export default ChatForm
