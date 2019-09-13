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