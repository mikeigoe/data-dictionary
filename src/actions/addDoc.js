import { NEW_DOC } from './types';

export const addDoc = (docData) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(docData)
  })
    .then(res => res.json())
    .then(doc => dispatch({
      type: NEW_DOC,
      doc: doc
    }));
}