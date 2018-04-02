import { FETCH_DOCS } from './types';

export const fetchDocs = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(docs => dispatch({
        type: FETCH_DOCS,
        docs: docs
      }));
}