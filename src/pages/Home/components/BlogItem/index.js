// Libs
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// Components
import { Row, Col } from 'react-bootstrap'

export const BlogItemBase = ({ blog }) => (
  <Row className="blog-item">
    <Col xs={5} sm={2} className="blog-item__wrapper-image">
      <img
        src="https://dummyimage.com/150x150/5a5a5a/ffffff"
        alt={blog.title}
        className="img-thumbnail"
      />
    </Col>
    <Col xs={7} sm={10} className="blog-item__content">
      <h4 className="text-primary">
        <Link className="link" to={`/${blog.id}`}>
          {blog.title}
        </Link>
      </h4>
      <p>{blog.content}</p>
    </Col>
  </Row>
)

BlogItemBase.defaultProps = {
  blog: {},
}

BlogItemBase.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
    title: PropTypes.string,
  }),
}

export default React.memo(BlogItemBase)
