<script>
  import BookItem from "./BookItem.svelte";

    export let category;
    export let dataBooks;
    export let activeModal;
    export let handleOpen;
    export let handleAddBook;




    let mapCategory = category === 'bookFinished' ? true : false

    let filterDataBook;

    $: {
      filterDataBook = $dataBooks.filter(item => item.isCompleted === mapCategory) 
      
      console.log("test", filterDataBook, category);
    }

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


</script>

<div id="card_bookshelves">
    <div class="card_bookshelves_header"> 
      {#if category !=='bookAPI'}
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
       {/if}
   

    </div>
    <div id={category === "bookFinished" ? "finished_book_list" : "book_list"}>
    {#if $dataBooks.length === 0}
    Data Kosong
    {:else}
      {#each filterDataBook as book}
        <BookItem
          {...book}
          key={book.id}
          handleDeleteBook={handleDeleteBook}
          handleMoveBookshelf={handleMoveBookshelf}
          handleAddBook={handleAddBook}
          category={category}
        />
        {/each}
    {/if}
    </div>
</div>