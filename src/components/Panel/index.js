
function Panel({ title, books, toggle }) {

    // const ReadFile = async (file) => {
    //     var content = "";

    //     var f = await fetch(file)
    //         .then(response => response.text())
    //         .then(text => { content = text });

    // };


    return (
        <div id="panel">
            <div className="title">
                <span>{title}</span>
            </div>
            <div id="books-area">

                {
                    books.map((book, i) => {

                        return (
                            <div
                                key={"book-" + i}
                                className="book"
                                style={{
                                    backgroundImage: 'url(" ' + book.cover + ' ")',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                onClick={() => {
                                    toggle(i);
                                }}
                            >
                                <div className="book-title">
                                    {book.title}
                                </div>
                            </div>
                        )
                    })
                }

            </div>

            <hr />
        </div>
    );
}

export default Panel;
