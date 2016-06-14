import React from 'react';
import BaseInput from './BaseInput';

export default class MailInput extends BaseInput {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        <input type="email" name="mail" placeholder="メールアドレス"
          className="input"
          value={this.props.mail}
          onChange={this.handleChange.bind(this)}
          onBlur={this.handleChange.bind(this)}
          required
          //style={(this.props.error) ? this.style.invalid : this.style.valid}
        />
        <p className="message">{this.props.error}</p>
      </li>
    );
  }
}
