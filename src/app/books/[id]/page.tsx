import { IBook } from '@/types/books.type';
import Image from 'next/image';

interface IBookDetailsPageProps {
    params: Promise < {
        id: string;
    }>;
}

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const BookDetailsPage = async ({params}: IBookDetailsPageProps) => {
    const {id} = await params;
    const booksData = await getBooks();
    const book = booksData.find(
        (book:IBook) => String(book.bookId) === String(id)) as IBook;
    console.log('Book ID:', book);
   return (
  <div className="container mx-auto my-[70px] px-4">
    <div className="card lg:card-side bg-base-100 shadow-xl border border-base-200 overflow-hidden">
      
      {/* Book Image */}
      <figure className="lg:w-2/5 bg-base-200">
        <Image
          src={book.image}
          alt={book.bookName}
          width={500}
          height={700}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Book Details */}
      <div className="card-body lg:w-3/5 p-6 lg:p-10">

        {/* Category */}
        <div>
          <span className="badge badge-primary badge-outline">
            {book.category}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold mt-2">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="text-base-content/60 text-lg">
          by <span className="font-semibold text-base-content">{book.author}</span>
        </p>

        {/* Rating */}
        <div className="flex items-center gap-3 mt-2">
          <div className="rating rating-sm">
            {[1, 2, 3, 4, 5].map((star) => (
              <input
                key={star}
                type="radio"
                name="book-rating"
                className="mask mask-star-2 bg-orange-400"
                aria-label={`${star} star`}
                checked={Math.round(book.rating) === star}
                readOnly
              />
            ))}
          </div>

          <span className="font-semibold">
            {book.rating}
          </span>
        </div>

        {/* Description */}
        <div className="divider"></div>

        <p className="text-base-content/70 leading-7">
          {book.review}
        </p>

        {/* Book Information */}
        <div className="grid grid-cols-2 gap-4 mt-4">

          <div className="bg-base-200 rounded-xl p-4">
            <p className="text-sm text-base-content/50">
              Total Pages
            </p>
            <p className="font-bold text-lg">
              {book.totalPages}
            </p>
          </div>

          <div className="bg-base-200 rounded-xl p-4">
            <p className="text-sm text-base-content/50">
              Published
            </p>
            <p className="font-bold text-lg">
              {book.yearOfPublishing}
            </p>
          </div>

          <div className="bg-base-200 rounded-xl p-4">
            <p className="text-sm text-base-content/50">
              Publisher
            </p>
            <p className="font-bold text-lg">
              {book.publisher}
            </p>
          </div>


        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-5">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="badge badge-ghost px-3 py-3"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Action */}
        <div className="card-actions justify-end mt-6">
          <button className="btn btn-primary px-8">
            Listen
          </button>
        </div>

      </div>
    </div>
  </div>
);
};

export default BookDetailsPage;