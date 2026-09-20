import Image from "next/image";
import React from "react";
import BookCard from "../shared/BookCard";
import { IBook } from "@/types/books.type";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  console.log(booksData);

  return (
    <section className="container mx-auto my-[70px] px-4">
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-500">
          Explore Books
        </p>

        <h1 className="text-3xl font-bold text-slate-800 md:text-4xl">
          Discover Your Next Favorite Book
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          Explore our collection of amazing books and find your next great
          read.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
         booksData.map((book: IBook, ind:number) => {
         return <BookCard key={ind} book={book} />;
        })}
      </div>
    </section>
  );
};

export default Books;