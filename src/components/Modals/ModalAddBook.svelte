<script>
    export let addBook
    export let onClose

    let name;
    let year;
    let imageURL;
    let author;

</script>

<div id="modal_form" class="modal">
    <div class="modal_content">
      <div class="modal_header">
        <span>
          Add Book to <u> Book List </u>
        </span>
        <span class="close" on:click={onClose}>
          &times;
        </span>
      </div>
      <div class="modal_body">
        <div class="form_content">
          <form id="form_new_book" autoComplete="off">
            <div class="form_element">
              <label class="required">Book Title</label>
              <input
                bind:value={name}
                required
                type="text"
              />
              <span class="separator"> </span>
              <span class="validatorTitle"> </span>
            </div>
            <div class="form_element">
              <label class="required">Author Name</label>
              <input
               bind:value={author}
                required
                type="text"
              />
              <span class="separator"> </span>
              <span class="validatorAuthor"> </span>
            </div>
            <div class="form_element">
              <label class="required">Year</label>
              <input
                bind:value={year}
                required
                type="number"
              />
              <span class="separator"> </span>
              <span class="validatorYear"> </span>
            </div>
            <div class="form_element">
              <label>Image URL</label>
              <input
                bind:value={imageURL}
                type="text"
              />
              <span class="separator"> </span>
            </div>
          </form>
        </div>
      </div>
      <div class="modal_footer">
        <button
          on:click={() =>
            addBook({
              year,
              author,
              imageURL,
              isCompleted: false,
              title: name,
              id: +new Date(),
            })
          }
          class="submit_add_book"
        >
          <span>Submit</span>
        </button>
      </div>
    </div>
  </div>