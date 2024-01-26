import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../button/Button';

const PaginationBar = ({ setSearchParams, searchValue, currentPage, pages }) => {
    return (
        <div className="flex flex-row-reverse px-2 md:px-8 gap-2 md:gap-4 lg:gap-8 border-y-2 bg-neutral">
            <div className="flex flex-row-reverse gap-2">
                <Button
                    onClick={() => {
                        setSearchParams({
                            page: currentPage + 1,
                            search: searchValue,
                        });
                    }}
                    className={
                        "btn-secondary w-20" +
                        (currentPage >= pages ? " opacity-60 pointer-events-none" : "")
                    }
                >
                    <FontAwesomeIcon icon={faAngleRight} />
                </Button>
                <Button
                    onClick={() => {
                        setSearchParams({
                            page: currentPage - 1,
                            search: searchValue,
                        });
                    }}
                    className={
                        "btn-secondary w-20" +
                        (currentPage > 1 ? "" : " opacity-60 pointer-events-none")
                    }
                >
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Button>
            </div>
            <div className="flex items-center">Pages: {pages}</div>
            <div className="flex items-center">Current Page: {currentPage}</div>
        </div>
    )
}

export default PaginationBar