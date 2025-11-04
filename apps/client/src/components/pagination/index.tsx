import ReactPaginate from 'react-paginate'

import styles from './pagination.module.css'

type Props = {
  onChangePage: (page: number) => void
  currentPage: number
  totalPages: number
}

export const Pagination: React.FC<Props> = ({ onChangePage, totalPages, currentPage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChangePage(e.selected)}
      pageRangeDisplayed={4}
      pageCount={totalPages}
      previousLabel="<"
      forcePage={currentPage}
    />
  )
}
