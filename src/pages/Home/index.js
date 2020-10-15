// Libs
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// Reducers
import { Container, Row, Col } from 'react-bootstrap'
import { Creators } from './redux/blogs'

// Components

const Home = ({ getBlogsRequest, mainData }) => {
  const { blogs } = mainData

  useEffect(() => {
    getBlogsRequest()
  }, [getBlogsRequest])

  return (
    <Container className="border home">
      {blogs
        && blogs.map((item) => (
          <Row key={item.id}>
            <Col xs={5} sm={2}>
              <img
                src="https://dummyimage.com/150x150/5a5a5a/ffffff"
                alt={item.title}
                className="img-thumbnail"
                width="150px"
                height="150px"
              />
            </Col>
            <Col xs={7} sm={10}>
              <h4 className="text-primary">
                <Link className="link" to={`/${item.id}`}>
                  {item.title}
                </Link>
              </h4>
              <p>{item.content}</p>
            </Col>
          </Row>
        ))}
    </Container>
  )
}

Home.defaultProps = {
  getBlogsRequest: () => {},
  mainData: {
    blogs: [],
  },
}

Home.propTypes = {
  getBlogsRequest: PropTypes.func,
  mainData: PropTypes.shape({
    blogs: PropTypes.arrayOf({
      id: PropTypes.string,
      content: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
}

const mapStateToProps = (state) => ({ ...state })

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...Creators }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
