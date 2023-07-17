<script>
  import BookItem from "./BookItem.svelte";

    export let category;
    export let dataBooks;
    export let activeModal;
    export let handleOpen;

    const displayModalAddBook = () => {
      console.log("Book added");
      activeModal.set("add")
      handleOpen();
    };

    const displayModalClearFinished = () => {
      console.log("Book clear");
      activeModal.set("remove")
      handleOpen();
    };

    const handleMoveBookshelf = (target, id) => {
      dataBooks.update((prev) =>
        prev.map((book) =>
          book.id === id
            ? { ...book, isCompleted: target === "bookList" ? false : true }
            : book
        )
      );
    };
    
  const handleDeleteBook = (id) => {
    dataBooks.update((prev) => prev.filter((item) => item.id !== id));
  };

  console.log($dataBooks)
</script>

<div id="card_bookshelves">
    <div class="card_bookshelves_header">
      <div class="book_category">
        {category === "bookFinished" ? "Finished" : "Book List"}
      </div>
      <button
        id="button_clear_finished"
        class={
          category === "bookFinished"
            ? "button_card_header"
            : "button_card_header_clear"
        }
        on:click={
          category === "bookFinished"
            ? () => displayModalClearFinished()
            : () => displayModalAddBook()
        }
      >
        <span>{category === "bookFinished" ? "Clear" : "Add Book"}</span>
      </button>
    </div>
    <div id={category === "bookFinished" ? "finished_book_list" : "book_list"}>
    {#if $dataBooks.length === 0}
    Data Kosong
    {:else}
      {#each $dataBooks as book}
        <BookItem
          author={book.author}
          year={book.year}
          id={book.id}
          title={book.title}
          isCompleted={book.isCompleted}
          imageURL={book.imageURL}
          key={book.id}
          handleDeleteBook={handleDeleteBook}
          handleMoveBookshelf={handleMoveBookshelf}
        />
        {/each}
    {/if}
    </div>
</div>