class PrintEditionItem {
    static MAX_STATE = 100;

    set state(newState) {
        if (newState < 0) {
            this._state = 0
        } else if (newState > PrintEditionItem.MAX_STATE) {
            this._state = PrintEditionItem.MAX_STATE
        } else {
            this._state = newState
        }
    }

    get state() {
        return this._state;
    }

    constructor(
        name,
        releaseDate,
        pagesCount) {

        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;

        this.type = null;
        this.state = PrintEditionItem.MAX_STATE;
    }

    fix() {
        const FIX_KF = 1.5;
        this.state = this.state * FIX_KF;
    }
}

class Magazine extends PrintEditionItem {

    constructor(
        name,
        releaseDate,
        pagesCount) {

        super(name, releaseDate, pagesCount);

        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {

    constructor(
        author,
        name,
        releaseDate,
        pagesCount) {

        super(name, releaseDate, pagesCount);

        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {

    constructor(
        author,
        name,
        releaseDate,
        pagesCount) {

        super(author, name, releaseDate, pagesCount);

        this.type = 'novel';
    }
}


class FantasticBook extends Book {

    constructor(
        author,
        name,
        releaseDate,
        pagesCount) {

        super(author, name, releaseDate, pagesCount)

        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {

    constructor(
        author,
        name,
        releaseDate,
        pagesCount) {

        super(author, name, releaseDate, pagesCount);

        this.type = 'detective';
    }
}


class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        const MIN_STATE = 30;

        if (book instanceof PrintEditionItem) {
            if (book.state > MIN_STATE) {
                this.books.push(book);
                return true
            } else {
                return false
            }
        }
    }

    findBookBy(type, value) {
        const resArr = this.books.find((el) => {
            return el[type] == value;
        })
        if (!resArr) {
            return null;
        } else {
            return resArr;
        }
    }

    giveBookByName(bookName) {
        const resEl = this.findBookBy('name', bookName);

        if (resEl) {
            const resIdx = this.books.indexOf(resEl);

            this.books.splice(resIdx, 1);
        }
        return resEl;
    }
}






const myLib = new Library('Моя домашняя библиотека');

myLib.addBook(new NovelBook('Антон Чехов', 'Рассказы', 1919, 777));
myLib.addBook(new NovelBook('Лев Толстой', 'Повести', 2007, 999));
let bookEl = new FantasticBook('Говард Лавкрафт', 'Хребты Безумия', 2012, 300)
myLib.addBook(bookEl);
myLib.addBook(new Magazine('Наука и жизнь', 1999, 177));

const oldBook = myLib.findBookBy('releaseDate', 1919);
console.log(`Всего ${myLib.name} содержит ${myLib.books.length} книги`);
console.log(`${myLib.name} включает книгу ${oldBook.author}, "${oldBook.name}", изданную в 1919 году`);

const book = myLib.giveBookByName('Хребты Безумия');
console.log(`Книга "${book.name}" автора ${book.author} отдана другу`);
console.log(`${myLib.name} содержит ${myLib.books.length} книги`);

console.log(`Книга "${book.name}" была новенькой. Ее состояние было ${book.state}.`);
book.state = Math.floor(Math.random() * 30) + 10;
console.log(`Друг повредил книгу "${book.name}". Ее состояние стало ${book.state}.`);

let isReturnedBook = myLib.addBook(book);
if (!isReturnedBook) {
    book.fix();
    console.log(`Перед возвратом друг починил книгу "${book.name}". Ее состояние стало ${book.state}.`);
    isReturnedBook = myLib.addBook(book)
    while (!isReturnedBook) {
        book.fix();
        console.log(`Но, поскольку книга все еще была в плохом состоянии,  друг починил книгу "${book.name}" еще раз. Ее состояние стало ${book.state}.`);
        isReturnedBook = myLib.addBook(book)
    }
} else {
    console.log(`Ее состояние было еще ничего, и друг вернул книгу "${book.name}" без починки.`);
}

console.log(`Теперь ${myLib.name} снова содержит ${myLib.books.length} книги`);

