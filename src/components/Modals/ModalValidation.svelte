<script>
    export let onClose
    export let removeList
</script>

<div id="modal_validation" class="modal">
    <div class="modal_content">
      <div class="modal_header">
        <span>Delete All</span>
        <span class="close" on:click={onClose}>
          &times;
        </span>
      </div>
      <div class="modal_body">
        <img src="./assets/delete_finished_books.svg" alt="" />
        <p>
          Are you sure want to <b> delete all </b> finished books ?{" "}
        </p>
      </div>
      <div class="modal_footer">
        <button on:click={removeList} class="yes_clear">
          <span>Yes</span>
        </button>
      </div>
    </div>
  </div>