import React from 'react'
import Proptypes from 'prop-types'
import './Pagination.css'

const Pagination = (props) => {


    const { page, totalPages, handlePaginationClick } = props;

    return (
        <div className="Pagination">
            <button
                className="Pagination-button"
                onClick={() => handlePaginationClick('prev')}
                disabled={page <= 1}>&larr;</button>
            <span className="Pagination-info">
                page {page}  of {totalPages}</span>
            <button
                className="Pagination-button"
                onClick={() => handlePaginationClick('next')}
                disabled={page >= totalPages}>&rarr;</button>
        </div>
    )
}

Pagination.proptype = {
    totalPages: Proptypes.number.isRequired,
    page: Proptypes.number.isRequired,
    handlePaginationClick: Proptypes.func.isRequired
}

export default Pagination;