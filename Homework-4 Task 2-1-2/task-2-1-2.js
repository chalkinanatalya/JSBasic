'use strict'
/* Task 4 Сделайте в стиле es6 примеры наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет
их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет
принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date.
Проинициализируйте эти свойства с помощью конструктора Post, чтобы не
дублировать код. Также в конструкторе AttachedPost должно создаваться свойство
highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted,
который будет назначать свойству highlighted значение true.*/

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    };

    edit() {
        alert(this.text);
    };
};

class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.hightlighted = false;
    };

    makeTextHighlighted() {
        this.highlighted = true;
        console.log(this.highlighted);
    };
};

const newPost = new AttachedPost('John', 'bye-bye', 20);
newPost.makeTextHighlighted();
