const { nanoid } = require('nanoid');
const books = require('./books');

const addBookHandler = (request, h) => {
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
    const id = nanoid();
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const finished = pageCount === readPage;

    const newBook = {
        id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt
    }


    if(name === undefined) {
        const response = h.response({
            status: "fail",
            message: "Gagal menambahkan buku. Mohon isi nama buku"
        });
        response.code(400);
        return response;
    } else if (readPage > pageCount) {
        const response = h.response({
            status: "fail",
            message: "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
        });
        response.code(400);
        return response;
    }
    
    books.push(newBook);
    const isSuccessAdd = books.filter(book => book.id == id).length > 0;
    if(isSuccessAdd) {
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: id
            }
        })
        response.code(201);
        return response;
    }
    const response = h.response({
        status: "error",
        message: "Buku gagal ditambahkan"
    });
    response.code(500);
    return response;
}

const getAllBooksHandler = (request, h) => {

    const { name, reading, finished} = request.query;
    if(name) {
        const bookFilterName = books.filter(book => book.name.toLowerCase().includes(name.toLowerCase()))
                                    .map(book => {
                                        return { 
                                            id: book.id,
                                            name: book.name, 
                                            publisher: book.publisher
                                        }
                                    });
        const response = h.response({
            status: "success",
            data: {
                books: bookFilterName
            }
        });
        return response;
    } else if(reading !== undefined) {
        if(reading == 1) {
            const bookFilterReading = books.filter(book => book.reading == true)
                                            .map(book => {
                                                return {
                                                    id: book.id,
                                                    name: book.name,
                                                    publisher: book.publisher,
                                                }
                                            });
            const response = h.response({
                status: "success",
                data: {
                    books: bookFilterReading
                }
            });
            return response;
        } else {
            const bookFilterReading = books.filter(book => book.reading == false)
                                            .map(book => {
                                                return {
                                                    id: book.id,
                                                    name: book.name,
                                                    publisher: book.publisher,
                                                }
                                            });
            const response = h.response({
                status: "success",
                data: {
                    books: bookFilterReading
                }
            });
            return response;
        }
    } else if(finished !== undefined) {
        if(finished == 1) {
            const bookFilterFinished = books.filter(book => book.finished == true)
                                            .map(book => {
                                                return {
                                                    id: book.id,
                                                    name: book.name,
                                                    publisher: book.publisher,
                                                }
                                            });
            const response = h.response({
                status: "success",
                data: {
                    books: bookFilterFinished
                }
            });
            return response;
        } else {
            const bookFilterFinished = books.filter(book => book.finished == false)
                                            .map(book => {
                                                return {
                                                    id: book.id,
                                                    name: book.name,
                                                    publisher: book.publisher,
                                                }
                                            });
            const response = h.response({
                status: "success",
                data: {
                    books: bookFilterFinished
                }
            });
            return response;
        }
    } else {
        const response = h.response({
            status: "success",
            data: {
                books: books.map(book => {
                                    return { 
                                        id: book.id,
                                        name: book.name, 
                                        publisher: book.publisher
                                    }
                                })
            }
        });
        return response;
    }
}

const getBookByIdHandler = (request, h) => {
    const { id } = request.params;

    const book = books.filter(book => book.id === id)[0];
    if(book) {
        return {
            status: "success",
            data: {
                book
            }
        }
    }
    
    const response = h.response({
        status: "fail",
        message: "Buku tidak ditemukan"
    });
    response.code(404);
    return response;
}

const editBookByIdHandler = (request, h) => {
    const { id } = request.params;
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
    const updatedAt = new Date().toISOString();

    const index = books.findIndex(book => book.id === id);

    if(name === undefined) {
        const response = h.response({
            status: "fail",
            message: "Gagal memperbarui buku. Mohon isi nama buku"
        })
        response.code(400);
        return response;
    } else if(readPage > pageCount) {
        const response = h.response({
            status: "fail",
            message: "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
        })
        response.code(400);
        return response;
    } else if(index === -1) {
        const response = h.response({
            status: "fail",
            message: "Gagal memperbarui buku. Id tidak ditemukan"
        })
        response.code(404);
        return response;
    } else {
        books[index] = {
            ...books[index],
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
            updatedAt,
        };

        const response = h.response({
            status: 'success',
            message: 'Buku berhasil diperbarui'
        });
        response.code(200);
        return response;
    }
}

const deleteBookByIdHandler = (request, h) => {
    const { id } = request.params;
    // console.log(id);
    const index = books.findIndex(book => book.id === id);
    if(index !== -1) {
        books.splice(index, 1);
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil dihapus'
        });
        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Buku gagal dihapus. Id tidak ditemukan'
    });
    response.code(404);
    return response;
}

module.exports = {
    addBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    editBookByIdHandler,
    deleteBookByIdHandler
}