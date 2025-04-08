# 📚 Your Books Collection 📚

A beautiful, interactive way to showcase your personal book collection with a password-protected interface!

## ✨ Features

- 🔐 **Password Protection**: Keep your collection private
- 📖 **Book Details**: Display comprehensive information about each book
- 🌈 **Beautiful UI**: Elegant design with book cover backgrounds
- 📱 **Responsive**: Works on desktop, tablet, and mobile devices
- ⬅️ **Easy Navigation**: Simple controls to browse through your collection

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML, CSS, and JavaScript (to customize)

### Setup

1. **Clone** this repository to your computer:
   ```bash
   git clone https://github.com/422442/w-book.git
   ```
2. **Open the folder** containing the files
3. **Customize your collection** by:
   - Adding your book cover images to the `images` folder
   - Updating the `booksData` array in `script.js` with your books

### Running the App

1. Simply open `index.html` in your web browser
2. Enter the password when prompted (default: `Books@123`)
3. Enjoy browsing your book collection!

## 🛠️ Project Structure

- `index.html` - The main HTML structure
- `style.css` - All styling and animations
- `script.js` - JavaScript for functionality and book data
- `images/` - Directory containing book cover images

## 📋 How to Add Your Own Books

1. Add your book cover image to the `images` folder
2. Open `script.js` and locate the `booksData` array
3. Add a new book entry following this format:

```javascript
{
    title: "Your Book Title",
    author: "Author Name",
    description: "Book description goes here...",
    coverImage: "images/yourimage.jpg",
    rating: "4.5",
    dateRead: "January 1, 2023",
    goodreadsLink: "https://www.goodreads.com/book/show/your-book-link"
}
```

## 🔒 Changing the Password

1. Open `script.js`
2. Find the line: `const correctPassword = "Books@123";`
3. Change `"Books@123"` to your desired password

## 📱 Navigation Tips

- Use the Previous/Next buttons to move between books
- On mobile, you can also swipe up/down to navigate
- On desktop, use the left/right arrow keys

## 🎨 Customization Ideas

- Change background images
- Modify color schemes in CSS
- Add new fields to your book entries
- Create book categories or filters

## 📝 Note

This is a front-end only application - your book data is stored in the JavaScript file. If you need to preserve your collection across different devices, you'll need to copy your `script.js` file.

Enjoy your personal digital bookshelf! 📚✨
