'use client';
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";



const WishListButton = ({book}: {book: IBook}) => {
    const context = useContext(BooksContext);

    if (!context) {
        throw new Error("WishListButton must be used inside BooksProvider");
    }

    const {wishlist, setWishlist} = useContext(BooksContext);

    const handleAddToWishlist = () => {
        console.log("Wishlist button clicked", book);
         setWishlist(([...wishlist, book]));
            alert(`You have added "${book.bookName}" to your wishlist!`);
    };
    return (
        <button className="btn btn-primary px-8" onClick={() => handleAddToWishlist()}>
            Add to Wishlist
          </button>
    );
};

export default WishListButton;