import React from 'react';
import IDInput from './IDInput';
import MailInput from './MailInput';
import Immutable from 'immutable';

class FormApp extends React.Component {
  constructor(props) {
    super(props);
    this.setValue = this.setValue.bind(this);
    this.checkAllStatus = this.checkAllStatus.bind(this);

    this.state = {
      data: Immutable.Map(
        {
          complete: false,
          forms: Immutable.Map({
            mail: {
              require: true,
              valid: false,
              value: '',
              error: Immutable.List()
            },
            name: {
              require: true,
              valid: false,
              value: '',
              error: Immutable.List()
            }
          })
        }
      )
    }
  }
  setValue(type, valid, value, message) {
    let newState = this.state.data.setIn(['forms', type], {valid: valid, value: value, error: message});
    this.setState({data: newState});
    this.checkAllStatus();
  }
  checkAllStatus() {
    let allStatus = this.state.data.get("forms").every((i) => i.valid == true);
    this.setState({complete: allStatus});
  }
  render() {
    let name = this.state.data.getIn(['forms', 'name']);
    let mail = this.state.data.getIn(['forms', 'mail']);

    return (
      <ul className="form-list">
        <li>
          <IDInput {...name} onChange={this.setValue} />
        </li>
        <li>
          <MailInput {...mail} onChange={this.setValue} />
        </li>
      </ul>
    );
  }
};

window.FormApp = FormApp;
