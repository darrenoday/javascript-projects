// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbnNumber, pages, checkOuts, discardStatus ) {
       this.title = title;
       this.author = author;
       this.copyrightDate = copyrightDate
       this.isbnNumber = isbnNumber
       this.pages = pages
       this.checkOuts = checkOuts
       this.discardStatus = discardStatus

    }
    //define methods
     checkout(uses=1) {
        this.checkOuts += uses;
 }
}
// Define your Manual and Novel classes here:
class Manual extends Book{
    constructor(title, author, copyrightDate, isbnNumber, pages, checkOuts, discardStatus) {
        super(title, author, copyrightDate, isbnNumber, pages, checkOuts, discardStatus);

    }
    discard(thisYear){
    if (thisYear - this.copyrightDate > 5 ){
        this.discardStatus = "Yes"
    } 
   }
}

class Novel extends Book{
    constructor(title, author, copyrightDate, isbnNumber, pages, checkOuts, discardStatus) {
        super(title, author, copyrightDate, isbnNumber, pages, checkOuts, discardStatus);
    }
    discard(){
        if(this.checkOuts > 100){
            this.discardStatus = "Yes"
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let pridePrejudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432, 32, 'No')
let topSecret = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, "No")
    
// Code exercises 4 & 5 here:
topSecret.discard(2024)
console.log(topSecret)
pridePrejudice.checkout(5)
pridePrejudice.discard()
console.log(pridePrejudice)