import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDocs } from '../../actions/fetchDocs';

class Docs extends Component {
  componentWillMount() {
    this.props.fetchDocs();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const docItems = this.props.docs.map(doc => (
      <div key={doc.id}>
        <h3>{doc.title}</h3>
        <p>{doc.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Documents</h1>
        {docItems}
      </div>
    )
  }
}

Docs.propTypes = {
  fetchDocs: PropTypes.func.isRequired,
  docs: PropTypes.array.isRequired,
  newDoc: PropTypes.object
}

const mapStateToProps = state => ({
  docs: state.docs.items,
  newDoc: {} //state.doc.item
})

export default connect(mapStateToProps, { fetchDocs })(Docs);