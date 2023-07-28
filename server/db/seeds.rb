
# Genres
GENRES = [
  'Science Fiction', 'Fantasy', 'Romance', 'Mystery', 'Thriller',
  'Horror', 'Historical Fiction', 'Contemporary Fiction', 'Memoir',
  'Biography', 'Cooking', 'Travel', 'Art', 'Poetry', 'Graphic Novel',
  'Young Adult', 'Children\'s Literature', 'Business', 'Self-help',
  'Science'
]
GENRES.each do |genre_name|
  Genre.create!(name: genre_name)
end



Book.create!(
  title: "Pride and Prejudice",
  author: "Jane Austen",
  description: "When Elizabeth Bennet meets Mr. Darcy, she is repelled by his haughty manner. But gradually, as she discovers his true nature, she begins to respect and admire him--and eventually, to love him.",
  cover_image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41FEoMd5E9L._SX324_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.",
  cover_image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51IXWZzlgSL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
)
Book.create!(
  title: "1984",
  author: "George Orwell",
  description: "Written in 1948, 1984 was George Orwell’s chilling prophecy about the future. And while 1984 has come and gone, its message remains...",
  cover_image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41aM4xOZxaL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
)

Book.create!(
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  description: "Jay Gatsby is the man who has everything. But one thing will always be out of his reach....",
  cover_image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41NssxNlPlS._SX331_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  description: "Holden narrates the story of a couple of days in his sixteen-year-old life, just after he's been expelled from prep school.",
  cover_image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/518dVCGFuhL._SX323_BO1,204,203,200_.jpg"
)
Book.create!(
  title: "Harry Potter and the Philosopher's Stone",
  author: "J.K. Rowling",
  description: "Harry Potter begins his journey as an orphaned boy wizard to become the hero of a generation.",
  cover_image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51xJbFMRsxL.jpg"
)
Book.create!(
  title: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
  description: "In a sleepy village in Shire, a young hobbit is entrusted with an immense task.",
  cover_image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41Gk-Srm7QL.jpg"
)

7.times do |i|
  book = Book.find(i+1)
  book.book_genres.create!(genre_id: rand(1..20))
end