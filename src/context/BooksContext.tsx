'use client';
import {createContext, useState } from "react";
import { IBook } from "@/types/books.type";

interface BooksContextValue {
    readBooks: IBook[];
    setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
    wishlist: IBook[];
    setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<BooksContextValue | undefined>(undefined);

const BooksProvider = ({children}: {children: React.ReactNode}) => {
    const [readBooks, setReadBooks] = useState<IBook[]>([]);
    const [wishlist, setWishlist] = useState<IBook[]>([]);

    const sharedData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist
    }
    return (
        <div>
            <BooksContext.Provider value={sharedData}>
                {children}
            </BooksContext.Provider>
  

        </div>
    );
};

export default BooksProvider;