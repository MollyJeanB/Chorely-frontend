import React from "react"
import { reduxForm, Field } from "redux-form"
// import { reducer as formReducer } from "redux-form"


export class HouseHoldMemberForm extends React.Component {
  onSubmit(name) {
    console.log(name)
  }
  render() {
    return (
      <form>
        <Field name="colorSelect" component="select">
          <option />
          <option value="#ff0000">Red</option>
          <option value="#00ff00">Green</option>
          <option value="#0000ff">Blue</option>
        </Field>
      </form>
    )
  }
}

export default reduxForm({ form: "formReducer" })(HouseHoldMemberForm)
