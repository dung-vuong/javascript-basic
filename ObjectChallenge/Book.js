class Book{
    constructor(
        name,
        pages,
        color,
        age
    )
    {
        this.name = name;
        this.pages = pages;
        this.color = color;
        this.age = age;
    }
    changeColor(newColor){
        this.color = newColor
    }
}
export default Book;