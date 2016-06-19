import React from 'react';
import BaseInput from './BaseInput';
import Immutable from 'immutable';

export default class MailInput extends BaseInput {
  constructor(props) {
    super(props);
  }
  checkValue(event) {
    let value = event.target.value;
    let message = [];
    let valid = false;

    if (!value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      message.push("有効なメールアドレスを入力してください");
      valid = false;
    } else {
      valid = true;
    }

    this.props.onChange('mail', valid, value, message);
  }
  render() {
    return (
      <li>
        <input type="email" name="mail" placeholder="メールアドレス"
          className="input"
          value={this.props.value}
          onChange={this.checkValue.bind(this)}
          required
          style={this.getBorderStyle(this.props.valid)}
        />
        {this.props.error.map((error) => <p className="message" key={error.id}>{error}</p>)}
      </li>
    );
  }
}
