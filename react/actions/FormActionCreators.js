import Dispatcher from '../dispatcher/AppDispatcher';

class ActionCreator {}

ActionCreator.setValue = (value) => {
  Dispatcher.dispatch({
    type: 'SET_VALUE',
    todo: value
  });
};

// ActionCreator.updateTodo = (todo) => {
//   Dispatcher.dispatch({
//     type:  'UPDATE_TODO',
//     todo: todo
//   });
// };
//
// ActionCreator.addTodo = (todo) => {
//   Dispatcher.dispatch({
//     type:  'ADD_TODO',
//     todo: todo
//   });
// };
//
//
// ActionCreator.closeTodo = (index) => {
//   Dispatcher.dispatch({
//     type:  'CLOSE_TODO',
//     index: index
//   });
// };

export default ActionCreator;
