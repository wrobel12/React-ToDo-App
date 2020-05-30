
import { ADD_TODO, TOGGLE_TODO } from '../actions/types/index'

export const todos = (state = [], action) => {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          {
            text: action.text,
            id: Date.now(),
            checked: false
          }
        ];
      case TOGGLE_TODO:
      return state.map((element) => {
        if (element.id == action.id)
        {
          return { ...element, checked: !element.checked }
        }
       return element
      });
      default:
        return state;
    }
  };