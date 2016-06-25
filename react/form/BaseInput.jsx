import React from 'react';
import Immutable from 'immutable';

export default class BaseInput extends React.Component {
  constructor(props) {
    super(props);
  }
  getBorderStyle(valid, isOnceFocused) {
    // console.log(this.isOnceFocused);
    if (valid) {
      return { border: '2px solid #ccc' }
    } else if (!isOnceFocused) {
      this.isOnceFocused = true;
      return { border: '2px solid #ccc' }
    } else {
      return { border: '2px solid #b71c1c' }
    }
  }
}
