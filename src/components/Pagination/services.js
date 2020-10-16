/**
 *
 * @param {*} page
 * @param {*} pagination
 */
export const setPager = (page, pagination) => {
  const { pageLimit, totalPages } = pagination

  if (page < 1) {
    page = 1
  } else if (page > totalPages) {
    page = totalPages
  }

  return {
    pageLimit,
    totalPages,
    page,
  }
}

/**
 *
 * @param {*} pagination
 */
export const getPager = (pagination) => {
  let { pagesToShow, currentPage, totalPages } = pagination
  let pages = []
  let startFromNumber

  if (totalPages <= pagesToShow) {
    startFromNumber = 1
    pagesToShow = totalPages
  } else if (currentPage <= Math.ceil(pagesToShow / 2)) {
    startFromNumber = 1
  } else if (currentPage + Math.floor((pagesToShow - 1) / 2) >= totalPages) {
    startFromNumber = totalPages - (pagesToShow - 1)
  } else {
    startFromNumber = currentPage - Math.floor(pagesToShow / 2)
  }

  for (let i = 1; i <= pagesToShow; i++) {
    pages.push(startFromNumber++)
  }

  return {
    currentPage,
    totalPages,
    pages,
  }
}
