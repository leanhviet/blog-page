// Libs
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Services
import { setPager, getPager } from './services'

// Components
import Button from '../Button'

const initPagination = {
  totalRecords: '',
  pageLimit: '',
  totalPages: '',
  currentPage: '',
  initialPage: '',
  pagesToShow: '',
}

export const PaginationBase = ({
  totalRecords,
  pageLimit,
  pagesToShow,
  initialPage,
  onChangePage,
}) => {
  const [pagination, setPagination] = useState(initPagination)
  const pager = getPager(pagination)

  useEffect(() => {
    setPagination({
      totalRecords,
      pageLimit,
      totalPages: Math.ceil(totalRecords / pageLimit),
      pagesToShow,
      currentPage: initialPage,
    })
  }, [totalRecords, pageLimit, pagesToShow, initialPage])

  const setPage = (page) => {
    const pageOption = setPager(page, pagination)

    setPagination({
      ...pagination,
      currentPage: pageOption.page,
    })

    onChangePage({
      pageLimit: pageOption.pageLimit,
      totalPages: pageOption.totalPages,
      page: pageOption.page,
    })
  }

  if (!pagination.totalRecords || pagination.totalPages === 1) return null

  return (
    <ul className="pagination">
      <li className="page-item">
        <Button
          className="btn btn-outline-primary"
          disabled={pager.currentPage === 1}
          onClick={() => setPage(pager.currentPage - 1)}
          label="Previous"
        />
      </li>
      {pager.pages.map((page, index) => (
        <li className="page-item" key={`pager${index}`}>
          <Button
            className={`btn btn-outline-primary ${
              pager.currentPage === page ? 'active' : ''
            }`}
            onClick={() => setPage(page)}
            label={`${page}`}
          />
        </li>
      ))}
      <li className="page-item">
        <Button
          className="btn btn-outline-primary"
          disabled={pager.currentPage === pager.totalPages}
          onClick={() => setPage(pager.currentPage + 1)}
          label="Next"
        />
      </li>
    </ul>
  )
}

PaginationBase.defaultProps = {
  pageLimit: 5,
  initialPage: 1,
  pagesToShow: 3,
  onChangePage: () => {},
}

PaginationBase.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  initialPage: PropTypes.number,
  pagesToShow: PropTypes.number,
  onChangePage: PropTypes.func,
}

export default React.memo(PaginationBase)
