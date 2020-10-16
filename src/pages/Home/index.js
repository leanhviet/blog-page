// Libs
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'

// Reducers
import { Creators } from './redux/blogs'

// Components
import Pagination from '../../components/Pagination'
import Header from '../../components/Header'
import FeatureGroup from './components/FeatureGroup'
import BlogItem from './components/BlogItem'

const Home = ({ getBlogsRequest, getTotalRecordsRequest, mainData }) => {
  const { totalRecords, blogs } = mainData

  const [param, setParam] = useState({
    page: 1,
    limit: 3,
    option: {},
  })

  useEffect(() => {
    // Get total records
    getTotalRecordsRequest(param.option?.search)
  }, [param.option, param.option.search, getTotalRecordsRequest])

  useEffect(() => {
    const { page, limit, option } = param

    const params = {
      page,
      limit,
      ...option,
    }

    // Get list blogs by current page and limit
    getBlogsRequest(params)
  }, [param, param.option, getBlogsRequest])

  const onChangePage = (data) => {
    setParam({
      ...param,
      page: data.page,
      limit: data.pageLimit,
    })
  }

  const handleSearch = (text) => {
    setParam({
      ...param,
      page: 1,
      option: {
        search: text,
      },
    })
  }

  const handleSortBy = (fieldChoosen, order) => {
    setParam({
      ...param,
      page: 1,
      option: {
        ...param.option,
        sortBy: fieldChoosen,
        order,
      },
    })
  }

  return (
    <Container className="border home">
      <Header />
      <FeatureGroup handleSearch={handleSearch} handleSortBy={handleSortBy} />
      {blogs?.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
      {!!totalRecords && (
        <Pagination
          totalRecords={totalRecords}
          pageLimit={param.limit || 3}
          initialPage={param.page || 1}
          pagesToShow={3}
          onChangePage={onChangePage}
        />
      )}
    </Container>
  )
}

Home.defaultProps = {
  getBlogsRequest: () => {},
  getTotalRecordsRequest: () => {},
  mainData: {
    blogs: [],
    totalRecords: 0,
  },
}

Home.propTypes = {
  getBlogsRequest: PropTypes.func,
  getTotalRecordsRequest: PropTypes.func,
  mainData: PropTypes.shape({
    blogs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        content: PropTypes.string,
        title: PropTypes.string,
      }),
    ),
    totalRecords: PropTypes.number,
  }),
}

const mapStateToProps = (state) => ({ ...state })

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...Creators }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
