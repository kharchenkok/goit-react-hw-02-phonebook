import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from './ContactFormStyles.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };
  handleChangeNumber = event => {
    this.setState({ number: event.target.value });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    const contacts = this.props.contacts;
    // console.log('props',this.props);
    const { name } = this.state;
    if (contacts.find(el => el.name === name)) {
      alert(`"${name}" is alredy in contacts `);
    } else {
      this.props.addUserContact(this.state.name, this.state.number);
    }
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form className={Styles.form__style}onSubmit={this.handleFormSubmit}>
        <label>
          <input
          className={Styles.input__style}
            type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
          ></input>
        </label>
        <label>
          <input
          className={Styles.input__style}
            type="number"
            value={this.state.number}
            onChange={this.handleChangeNumber}
          ></input>
        </label>
        <button className={Styles.addbtn__style}type="submit" onSubmit={this.handleFormSubmit}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.array,
  addUserContact: PropTypes.func,
};

// FeedbackOptions.propTypes = {
//   options: PropTypes.shape({
//     good: PropTypes.number,
//     neutral: PropTypes.number,
//     bad: PropTypes.number,
//   }).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
