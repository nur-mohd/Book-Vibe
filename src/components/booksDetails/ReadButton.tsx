'use client';
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";


const ReadButton = ({book}: {book: IBook}) => {
    const context = useContext(BooksContext);

    if (!context) {
        throw new Error("ReadButton must be used inside BooksProvider");
    }

    const {readBooks, setReadBooks} = context;

    const handleReadBook = () => {
        if (readBooks.some((readBook) => readBook.bookId === book.bookId)) {
            toast.info(`"${book.bookName}" is already marked as read.`);
            return;
        }

        setReadBooks((currentBooks) => [...currentBooks, book]);
        toast.success(`You have marked "${book.bookName}" as read!`);
    };
    return (
        <button className="btn btn-primary px-8" onClick={handleReadBook}>
            Read Now
          </button>
    );
};

export default ReadButton;