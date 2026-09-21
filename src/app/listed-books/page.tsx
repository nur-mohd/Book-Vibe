'use client';

import { useContext } from 'react';
import { BooksContext } from '@/context/BooksContext';

const ListedBooksPage = () => {
    const context = useContext(BooksContext);

    if (!context) {
        throw new Error('ListedBooksPage must be used inside BooksProvider');
    }

    const {readBooks, wishlist} = useContext(BooksContext);
    console.log("Read Books from Context:", readBooks);
    console.log("Wishlist from Context:", wishlist);
    return (
        <div>
            Listed Books|Total Read Books: {readBooks.length} <br/> | Total Wishlist Books: {wishlist.length}
        </div>
    );
};

export default ListedBooksPage;