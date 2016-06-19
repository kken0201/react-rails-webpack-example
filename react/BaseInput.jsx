import React from 'react';
import Immutable from 'immutable';

export default class BaseInput extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange(event) {
    let type = event.target.name;
    let val = event.target.value;
    this.props.onChange(type, val, event);
  }
  getBorderStyle(valid) {
    if (valid) {
      return { border: '2px solid #ccc' }
    } else {
      return { border: '2px solid #b71c1c' }
    }
  }
}
