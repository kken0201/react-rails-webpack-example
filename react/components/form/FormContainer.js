import React from 'react';
import {Container} from 'flux/utils';
import FormStore from '../../stores/FormStore';
import FormUI from './FormUI';

class _FormContainer extends React.Component {
  static getStores() {
    return [FormStore];
  }

  static calculateState() {
    return FormStore.getState();
  }

  render() {
    return <FormUI value={this.state} />;
  }
}

const FormContainer = Container.create(_FormContainer);
export default FormContainer;

window.FormContainer = FormContainer;
