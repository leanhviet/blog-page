// Libs
import React from 'react'
import { Container } from 'react-bootstrap'

const Detail = () => (
  <Container>
    <h1 className="mt-4">Post Title</h1>
    <p className="lead">
      by
      <a href="/">Start Bootstrap</a>
    </p>
    <hr />
    <p>Posted on January 1, 2019 at 12:00 PM</p>
    <hr />
    <img
      className="img-fluid rounded"
      src="http://placehold.it/900x300"
      alt=""
    />
    <hr />
    <p className="lead">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero,
      obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam
      quia corporis eligendi eos magni recusandae laborum minus inventore?
    </p>
  </Container>
)
export default Detail
