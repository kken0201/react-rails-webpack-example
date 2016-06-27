import React from 'react';
// import IDInput from './IDInput';
import MailInput from './MailInput';

export default class FormApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="form-list">
        <li>
          <MailInput {...mail} onChange={this.setValue} />
        </li>
      </ul>
      <div className="saikou">{this.props.value}</div>
    );
  }
};

window.FormApp = FormApp;
