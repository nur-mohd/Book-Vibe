'use client';
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";



const WishListButton = ({book}: {book: IBook}) => {
    const context = useContext(BooksContext);

    if (!context) {
        throw new Error("WishListButton must be used inside BooksProvider");
    }

    const {wishlist, setWishlist} = context;

    const handleAddToWishlist = () => {
        if (wishlist.some((wishlistBook) => wishlistBook.bookId === book.bookId)) {
            toast.info(`"${book.bookName}" is already in your wishlist.`);
            return;
        }

        setWishlist((currentBooks) => [...currentBooks, book]);
        toast.success(`You have added "${book.bookName}" to your wishlist!`);
    };
    return (
        <button className="btn btn-primary px-8" onClick={handleAddToWishlist}>
            Add to Wishlist
          </button>
    );
};

export default WishListButton;