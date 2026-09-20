export interface IBook {
    bookId:number; 
    bookName: string;
    author: string;
    image: string;
    totalPages: number;
    rating: number;
    category: string;
    review: string;
    tags: string[];
    publisher: string;
    yearOfPublishing: number;
}