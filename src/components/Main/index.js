import { useState } from 'react';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import Header from "../Header";
import Panel from "../Panel";
const Book1 = require("../../assets/books/book1/sample_book 1.txt");
const Book2 = require("../../assets/books/book2/sample_book 2.txt");
const Book3 = require("../../assets/books/book3/sample_book3.txt");
const Book4 = require("../../assets/books/book4/sample_book4.txt");


function Main() {

    const [modal, setModal] = useState(false);
    const [content, setContent] = useState("");
    const [page, setPage] = useState(0);

    const recommended = [
        {
            file: Book1,
            title: "Lorem Ipsum Book1",
            cover: "https://www.readriordan.com/wp-content/uploads/2022/02/Lightning-Thief-flat-cover.png"
        },
        {
            file: Book2,
            title: "Lorem Ipsum Book2",
            cover: "https://www.readriordan.com/wp-content/uploads/2022/02/Monsters-flat-cover.png",
        }
    ];

    const topselling = [
        {
            file: Book3,
            title: "Lorem Ipsum Book3",
            cover: "https://www.readriordan.com/wp-content/uploads/2022/02/Last-Olympian-flat-cover.png",
        },
        {
            file: Book4,
            title: "Lorem Ipsum Book4",
            cover: "https://www.readriordan.com/wp-content/uploads/2022/02/Labyrinth-flat-cover.png",
        },
    ];

    return (
        <div id="main">
            <Header />

            <Modal
                isOpen={modal}
                toggle={() => {
                    setModal(!modal);
                    setPage(0);
                }}
                fade={false}
                style={{ maxWidth: "70%" }}
                id="book-content"
            >
                <ModalHeader>
                    {content.title}
                </ModalHeader>
                <ModalBody>
                    {
                        (page == 0)
                            ? content.intro
                            : content.pages[page - 1]
                    }
                </ModalBody>
                <ModalFooter>
                    <span onClick={() => {
                        if (page != 0) {
                            setPage(page - 1);
                        }
                    }}> {"<"} </span>

                    <em>{(page == 0)?"INTRO":page}</em> out of <em>{(content.hasOwnProperty("pages")) ? content.pages.length : 0}</em> pages

                    <span onClick={() => {
                        if (page < content.pages.length) {
                            setPage(page + 1);
                        }
                    }}> {">"} </span>

                </ModalFooter>
            </Modal>

            <div className="app-body">

                <Panel title="Recommended For You" books={recommended} toggle={(index) => {
                    setModal(!modal);

                    fetch(recommended[index].file)
                        .then(response => response.text())
                        .then(text => {

                            var splitted = text.split("\r\n\r\n\r\n");
                            var context = splitted[0].split("\r\n\r\n");

                            setContent({
                                title: context[0],
                                intro: context[1],
                                pages: splitted[1].split("\r\n\r\n")
                            });

                        });

                }} />

                <Panel title="Top Selling Books" books={topselling} toggle={(index) => {
                    setModal(!modal);

                    fetch(topselling[index].file)
                        .then(response => response.text())
                        .then(text => {

                            var splitted = text.split("\r\n\r\n\r\n");
                            var context = splitted[0].split("\r\n\r\n");

                            setContent({
                                title: context[0],
                                intro: context[1],
                                pages: splitted[1].split("\r\n\r\n")
                            });

                        });

                }} />

            </div>

            {/* <Footer /> */}
        </div>
    );
}

export default Main;
