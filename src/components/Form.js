import React from 'react';

export default function Form() {
  return (
    <div>
      <h1>ADD NEW BOOK</h1>
      <form>
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="author" />
        <button type="button">ADD BOOK</button>
      </form>
    </div>
  );
}
