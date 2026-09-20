import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";

interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <div
      key={book.bookId}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Book Image */}
      <div className="relative h-72 overflow-hidden bg-slate-100">
        <Image
          src={book.image}
          alt={book.bookName}
          width={800}
          height={300}
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
          {book.category}
        </span>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1 text-sm font-semibold text-white backdrop-blur">
          <span className="text-yellow-400">★</span>
          {book.rating}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Book Name */}
        <h2 className="truncate text-xl font-bold text-slate-800">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-slate-500">
          By <span className="font-medium text-slate-700">{book.author}</span>
        </p>

        {/* Review */}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
          {book.review}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Book Info */}
        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
          <div>
            <p className="text-xs text-slate-400">Pages</p>
            <p className="mt-1 text-sm font-semibold text-slate-700">
              {book.totalPages}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Published</p>
            <p className="mt-1 text-sm font-semibold text-slate-700">
              {book.yearOfPublishing}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Publisher</p>
            <p className="mt-1 truncate text-sm font-semibold text-slate-700">
              {book.publisher}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Rating</p>
            <p className="mt-1 text-sm font-semibold text-slate-700">
              {book.rating} / 5
            </p>
          </div>
        </div>

        {/* Button */}
        <Link href={`/books/${book.bookId}`}>
          <button className="mt-5 w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
