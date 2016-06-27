import React from 'react';
import BaseInput from './BaseInput';
import Immutable from 'immutable';

export default class IDInput extends BaseInput {
  constructor(props) {
    super(props);
    this.isOnceChanged = false;
  }
  checkValue(event) {
    this.isOnceChanged = true;

    let value = event.target.value;
    let message = [];
    let valid = false;

    if (!value.match(/^([a-zA-Z0-9_¥-])+$/)) {
      message.push("半角英数字と-_で入力してください");
      valid = false;
    } else {
      valid = true;
    }

    this.props.onChange('name', valid, value, message);
  }
  render() {
    return (
      <div className="form-content">
        <input type="text" name="name" placeholder="ID"
          className="input"
          value={this.props.value}
          onChange={this.checkValue.bind(this)}
          required
          style={this.getBorderStyle(this.props.valid, this.isOnceChanged)}
        />
        {this.props.error.map((error) => <p className="message" key={error.id}>{error}</p>)}
      </div>
    );
  }
}
