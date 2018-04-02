import { FETCH_DOCS, NEW_DOC } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_DOCS:
      return {
        ...state,
        items: action.docs
      };
    case NEW_DOC:
    return {
      ...state,
      item: action.doc
    };
    default:
      return state;
  }
}