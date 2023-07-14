export const booksUrl = '/books';

export const bookUrl = (id: string) => `/books/${id}`;

export const publisherBooksUrl = (id: string) => `/publishers/${id}/books`;

export const authorBooksUrl = (id: string) => `/authors/${id}/books`;

export const buyBookUrl = (id: string) => `/books/${id}/buy`;

export const addBookToLibraryUrl = (id: string) => `/books/${id}/addToLibrary`;

export const boughtBooksByUserUrl = (userId: string) =>
  `/users/${userId}/boughtBooks`;

export const boughtBooksUrl = () => `/books/boughtBooks`;

export const searchBooksUrl = '/search';

export const putPageNumberBookUrl = (bookId: any) =>
  `books/${bookId}/pageNumber`;
