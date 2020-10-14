// Libs
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Reducers
import {
  Container, Row, Col, Button,
} from 'react-bootstrap'
import { Creators } from './redux/blogs'

// Components

const Home = () => (
  <Container className="border home">
    <Row>
      <Col xs={5} sm={2}>
        <img
          src="https://dummyimage.com/150x150/5a5a5a/ffffff"
          alt="Dummyimage"
          className="img-thumbnail"
          width="150px"
        />
      </Col>
      <Col xs={7} sm={10}>
        <h4 className="text-primary">Post Title</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non
        </p>
        <Button>Read more</Button>
      </Col>
    </Row>
  </Container>
)

Home.defaultProps = {
  getBlogsRequest: () => {},
}

const mapStateToProps = (state) => ({ ...state })

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...Creators }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
