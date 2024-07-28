import React from 'react'

function Book(props) {
    const book = props.book
    return (
        <div key={book.title}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.pages}</p>
        </div>
    )
}

export default Book