import { ReduceStore } from 'flux/utils';
import Dispatcher from '../dispatcher/AppDispatcher';

class FormStore extends ReduceStore {  
  getInitialState() {
    return {
      complete: false,
      forms: {
        mail: {
          require: true,
          valid: false,
          value: 'aaaaa',
          error: []
        },
        name: {
          require: true,
          valid: false,
          value: '',
          error: []
        }
      }
    };
  }

  reduce(state, action) {
    // switch (action.type) {
    //
    // case 'SET_VALUE':
    //   // if( !action.todo ) return state;
    //   //
    //   // const list = state.todoList.slice();
    //   // list.push(action.todo);
    //   return Object.assign({}, state, {
    //     value: action.value
    //     // todoList: list
    //   });
    //
    // // case 'CLOSE_TODO':
    // //   state.todoList = state.todoList.filter((item, index)=>{
    // //     return index !== action.index;
    // //   });
    // //   return Object.assign({}, state);
    //
    // default:
    //   return state;
    // }
  }

  getFormStatus() {
    return this.getState().forms;
  }

  getCompleteStatus() {
    return this.getState().complete;
  }
}

export default (new FormStore(Dispatcher));
