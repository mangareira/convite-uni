import { useState } from 'react';
import { Guest } from 'core';
import GuestItem from './GuestItem';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const ITEMS_PER_PAGE = 5;

export default function GuestList(props: { guests: Guest[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(props.guests.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentGuests = props.guests.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const getVisiblePages = () => {
    const visiblePages = [];
    let startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(startPage + 4, totalPages);
    
    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }
    return visiblePages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex flex-col gap-4">
      <ul className="flex flex-col gap-2">
        {currentGuests.map((guest) => (
          <GuestItem key={guest.id} guest={guest} />
        ))}
      </ul>

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                className={
                  currentPage === 1 
                    ? "opacity-50 cursor-not-allowed pointer-events-none" 
                    : "cursor-pointer"
                }
                href="#"
                aria-disabled={currentPage === 1}
              />
            </PaginationItem>
            
            {visiblePages.map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => setCurrentPage(page)}
                  isActive={page === currentPage}
                  href=""
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext
                onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                className={
                  currentPage === totalPages 
                    ? "opacity-50 cursor-not-allowed pointer-events-none" 
                    : "cursor-pointer"
                }
                href="#"
                aria-disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}