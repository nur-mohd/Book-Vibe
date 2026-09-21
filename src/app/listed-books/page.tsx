"use client";

import { useContext } from "react";
import { BooksContext } from "@/context/BooksContext";
import ListedBooksCard from "@/components/shared/ListedBookCard";
import { IBook } from "@/types/books.type";

const ListedBooksPage = () => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("ListedBooksPage must be used inside BooksProvider");
  }

  const { readBooks, wishlist } = context;
  return (
    <div className="container mx-auto px-4 py-2.5">
      <h2 className="text-2xl font-bold mb-4 bg-amber-100 text-center py-8 my-8">
        Listed Books
      </h2>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {readBooks.length > 0 ? (
            readBooks.map((book: IBook) => (
              <ListedBooksCard key={book.bookId} book={book} />
            ))
          ) : (
            <p className="text-center text-gray-500">No read books found.</p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist (${wishlist.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {wishlist.length > 0 ? (
            wishlist.map((book: IBook) => (
              <ListedBooksCard key={book.bookId} book={book} />
            ))
          ) : (
            <p className="text-center text-gray-500">No books in wishlist.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooksPage;
