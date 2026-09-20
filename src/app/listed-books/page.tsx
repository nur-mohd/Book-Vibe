'use client';

import { useContext } from 'react';
import { BooksContext } from '@/context/BooksContext';

const ListedBooksPage = () => {
    const context = useContext(BooksContext);

    if (!context) {
        throw new Error('ListedBooksPage must be used inside BooksProvider');
    }

    const {readBooks} = context;
    console.log("Read Books from Context:", readBooks);
    return (
        <div>
            Listed Books Page
        </div>
    );
};

export default ListedBooksPage;