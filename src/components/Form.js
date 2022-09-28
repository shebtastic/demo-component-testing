import styled from "styled-components";

function Form({ className, onSubmit }) {
  const send = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    
    onSubmit(Object.fromEntries(formData))
  }

  return (
    <form className={className} onSubmit={send}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="email">E-Mail:</label>
        <input type="email" id="email" name="email" />
      </div>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  )
}

const StyledForm = styled(Form)`
  background: lightgoldenrodyellow;
`

export default StyledForm
