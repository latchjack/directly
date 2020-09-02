import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class Form extends React.Component {

  state = {
    userData: {
      firstName: '',
      lastName: '',
      email: '',
      telephone: '',
      dropdown: '',
      password: '',
      passwordConfirmation: ''
    },
    errors: {}
  }

  // this handles all of the inputted data in the input boxes. didn't have time to add onSelect functionality for the dropdown to be stored
  handleChange = e => {
    const userData = { ...this.state.userData, [e.target.name]: e.target.value }
    // eslint-disable-next-line no-restricted-globals
    const errors = { ...this.state.errors, [name]: '' }
    this.setState({ userData, errors })
  }

  // when the submit button is pressed this stops the page refreshing and then runs the validation function before logging the user's stored data to the console.
  handleSubmit = async e => {
    e.preventDefault()
    this.formValidation()
    console.log(this.state.userData)
  }

  formValidation() {
    const { email, password, passwordConfirmation } = this.state.userData

    // 1. checks if the email address is a valid i.e hotmail, gmail, yahoo, company address.
    // 2. checks if the password is longer than 5 chars.
    // 3. checks if the password contains numbers.
    // 4. checks if the password contains letters.
    // 5. checks if the password and password confirmation match.

    if (email.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      console.log("PLEASE ENTER A VALID EMAIL ADDRESS")
    } else if (password.length < 5) { 
      console.log("YOUR PASSWORD MUST BE LONGER THAN 5 CHARACTERS")
    } else if (password.search(/\d/) === -1) {
      console.log("YOU PASSWORD MUST CONTAIN A NUMBER")
    } else if (password.search(/[a-zA-Z]/) === -1) {
      console.log("YOU PASSWORD MUST CONTAIN A LETTER")
    } else if (password !== passwordConfirmation) {
      console.log('PASSWORDS DO NOT MATCH, PLEASE TRY AGAIN')
    } else {
      console.log ("VALIDATION CONFIRMED")
    }

  }

  render() {
    const options = [
      'Employee referral', 'LinkedIn', 'Google', 'Glassdoor', 'Monster', 'Other'
    ];

    return(
      <section className="section">
        <div className="container">
        <div className="columns">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title is-2 has-text-centered">Register</h2>
            <div className="form-container">
              <label>
                First Name:
                <input
                  className="input"
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  onChange={this.handleChange} 
                />
              </label>

              <label>
                Last Name:
                <input
                  className="input"
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  onChange={this.handleChange}
                />
              </label>

              <label>
                Telephone:
                <input
                  className="input"
                  placeholder="Telephone"
                  type="tel"
                  name="telephone"
                  onChange={this.handleChange}
                />
              </label>

              <label>
                Email:
                <input
                  className="input"
                  placeholder="Email"
                  type="text"
                  name="email"
                  onChange={this.handleChange}
                />
              </label>

              <label>
                Password:
                <input
                  className="input"
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                />
              </label>

              <label>
                Password Confirmation:
                <input
                  className="input"
                  placeholder="Confirm Password"
                  type="password"
                  name="passwordConfirmation"
                  onChange={this.handleChange}
                />
              </label>

              <Dropdown 
                className="input dropdown-styles"
                options={options}
                label="dropdown"
                placeholder="Select an option"
                value={this.state.userData.dropdown}
                // onSelect={this.handleChange}
              />

              <div className="button-div">
              <input
                className="submit-button"
                type="submit"
                value="Submit"
              />
              </div>
            </div>
          </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Form