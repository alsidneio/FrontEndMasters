var favoriteBooks = [];
let addFavoriteBook = (bookName) => {
   var lowerBookName = bookName.toLowerCase();
   if(!lowerBookName.includes("great")) {
      favoriteBooks.push(bookName);
   }
}

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

let printFavoriteBooks = () => {
   console.log(`Favorite Books:`)
   favoriteBooks.forEach(element => {
      console.log(element);
   });
};

printFavoriteBooks(); 
//===================================
class Bookshelf{
   constructor(){
      this.favoriteBooks = [];
   }

   addFavoriteBook (bookName){
      var lowerBookName = String(bookName.toLowerCase());
      if(!lowerBookName.includes("great")) {
         this.favoriteBooks.push(bookName);
      }
   }

   printFavoriteBooks(){
      console.log(`Favorite Books:`)
      this.favoriteBooks.forEach(element => {
         console.log(element);
      });
   };
} 

let myBookShelf = new Bookshelf();

myBookShelf.addFavoriteBook("A Song of Ice and Fire");
myBookShelf.addFavoriteBook("The Great Gatsby");
myBookShelf.addFavoriteBook("Crime & Punishment");
myBookShelf.addFavoriteBook("Great Expectations");
myBookShelf.addFavoriteBook("You Don't Know JS");
myBookShelf.printFavoriteBooks(); 