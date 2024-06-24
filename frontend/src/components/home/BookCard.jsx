import React from 'react';
import BookSoloCard from './BookSoloCard';

function BookCard({books}) {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {books.map((book)=><BookSoloCard key={book._id} book={book}/>)}
    </div>
  )
}

export default BookCard