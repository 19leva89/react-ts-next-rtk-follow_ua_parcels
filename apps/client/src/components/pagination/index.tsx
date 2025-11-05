import ReactPaginate from 'react-paginate'

import styles from './pagination.module.css'

interface Props {
	currentPage: number
	totalPages: number
	onChangePage: (page: number) => void
}

export const Pagination = ({ currentPage, totalPages, onChangePage }: Props) => {
	return (
		<ReactPaginate
			className={styles.root}
			breakLabel='...'
			nextLabel='>'
			onPageChange={(e) => onChangePage(e.selected)}
			pageRangeDisplayed={4}
			pageCount={totalPages}
			previousLabel='<'
			forcePage={currentPage}
		/>
	)
}
