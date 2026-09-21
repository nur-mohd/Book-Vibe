"use client";

import { useContext, useState, type ReactElement } from "react";
import { BooksContext } from "@/context/BooksContext";
import ListedBooksCard from "@/components/shared/ListedBookCard";
import { IBook } from "@/types/books.type";

const ListedBooksPage = (): ReactElement => {
  const context = useContext(BooksContext);



  if (!context) {
    throw new Error("ListedBooksPage must be used inside BooksProvider");
  }

  const { readBooks, wishlist } = context;
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  const sortBooks = (books: IBook[]): IBook[] => {
    const sortedBooks = [...books];

    if(sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if(sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if(sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    } 
    return sortedBooks;
  }

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishlist);



  return (
    <div className="container mx-auto px-4 py-2.5">
      <h2 className="text-2xl font-bold mb-4 bg-amber-100 text-center py-8 my-8">
        Listed Books
      </h2>

      <div className="text-center mb-4">
        <select
         value={sortBy}
         onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")}
         defaultValue="Pick a Runtime" className="select select-success">
          <option disabled={true}>Sort by</option>
          <option value={"rating"}>Rating</option>
          <option value={"pages"}>Number of pages</option>
          <option value={"year"}>Publication year</option>
        </select>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${sortedReadBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedReadBooks.length > 0 ? (
            sortedReadBooks.map((book: IBook) => (
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
          aria-label={`Wishlist (${sortedWishlist.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedWishlist.length > 0 ? (
            sortedWishlist.map((book: IBook) => (
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
