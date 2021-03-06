// Libs
import React, { useEffect } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

// Reducers
import { Creators } from './redux/blog'

export const DetailBase = ({ getBlogByIdRequest, blogData, match }) => {
  const { blog } = blogData
  const { title, content, createdAt } = blog || ''

  useEffect(() => {
    const { id } = match.params

    getBlogByIdRequest(id)
  }, [getBlogByIdRequest, match.params])

  return (
    <Container className="border detail">
      <h1 className="mt-4">{title}</h1>
      <p className="lead">
        by
        {' '}
        <a href="/">Start Bootstrap</a>
      </p>
      <hr />
      <p>
        Posted on
        {moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}
      </p>
      <hr />
      <img
        className="img-fluid rounded"
        src="http://placehold.it/900x300"
        alt={title}
      />
      <hr />
      <p className="lead detail__content">{content}</p>
    </Container>
  )
}

DetailBase.defaultProps = {
  getBlogByIdRequest: () => {},
  blogData: {
    blog: {
      title: '',
      content: '',
      createdAt: '',
    },
  },
  match: {
    params: {
      id: '1',
    },
  },
}

DetailBase.propTypes = {
  getBlogByIdRequest: PropTypes.func,
  blogData: PropTypes.shape({
    blog: PropTypes.shape({
      content: PropTypes.string,
      title: PropTypes.string,
      createdAt: PropTypes.string,
    }),
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}

const mapStateToProps = (state) => ({ ...state })

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...Creators }, dispatch)

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DetailBase),
)
