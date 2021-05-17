const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

// Your job is to write a function that takes the array and returns an
// array of titles:

// getTheTitles(books) // ['Book','Book2']
const getTheTitles = function(array) {
    return array.map(book => book.title)
  };
