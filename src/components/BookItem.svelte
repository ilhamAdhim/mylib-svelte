<script>
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import FaUndo from "svelte-icons-pack/fa/FaSolidUndo";
  import FaTrashAlt from "svelte-icons-pack/fa/FaTrashAlt";

    export let author
    export let year
    export let id
    export let title
    export let isCompleted
    export let imageURL
    export let handleDeleteBook
    export let handleMoveBookshelf
</script>

<div class="card_book">
    <img
      class="book_image"
      src={imageURL || "./assets/book_img_default.svg"}
      alt="default book pic"
    />
    <div class="book_title">{title}</div>
    <div class="book_details">
      <div class="book_author">By {author}</div>
      <div class="book_year">{year}</div>
    </div>
    <div class="book_actions">
      <button class="btn_delete" on:click={() => handleDeleteBook(id)}>
        <Icon src={FaTrashAlt} />
      </button>
      <button
        class="btn_done"
        on:click={
          isCompleted
            ? () => handleMoveBookshelf("bookList", id)
            : () => handleMoveBookshelf("finishedBooklist", id)
        }
      >
      {#if !isCompleted}
         ✔
      {:else}
        <Icon src={FaUndo} />
      {/if}
      </button>
    </div>
  </div>

