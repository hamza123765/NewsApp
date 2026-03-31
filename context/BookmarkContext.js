import React, { createContext, useContext, useState } from "react";

const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (news) => {
    const exists = bookmarks.find((item) => item.id === news.id);
    if (!exists) {
      setBookmarks([...bookmarks, news]);
    }
  };

  const removeBookmark = (id) => {
    setBookmarks(bookmarks.filter((item) => item.id !== id));
  };

  const isBookmarked = (id) => {
    return bookmarks.some((item) => item.id === id);
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export const useBookmarks = () => useContext(BookmarkContext);