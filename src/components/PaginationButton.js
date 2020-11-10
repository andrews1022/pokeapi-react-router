import React from 'react';

const PaginationButton = ({ direction, pageChange }) => (
	<i
		className={`pagination__icon pagination__icon--${direction} fas fa-chevron-${direction}`}
		onClick={pageChange}
	/>
);

export default PaginationButton;
