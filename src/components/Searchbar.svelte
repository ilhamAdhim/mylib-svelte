<script>
    export let dataBooks
    export let filteredBooks
    export let isSearching
    let inputSearchValue

    const handleSearch = () => {
      isSearching.update(true);
      filteredBooks.update(dataBooks.filter((book) => book.title.toLowerCase().includes(inputSearch.toLowerCase())))
    }

    const handleChange = (e) => {
      console.log(e.target.value)
      inputSearchValue = e.target.value
        if (e.target.value === "") isSearching.update(false);
    };


    // @ts-ignore
    const searchBookByEnter = (e) => {
    if (e.key == "Enter") {
        handleSearch()
    }
}
</script>

<div id="search_section">
    <input
      type="text"
      id="search_input"
      class="search_input"
      placeholder="Search books . . ."
      on:change={handleChange}
      on:keypress={searchBookByEnter}
    />
    <button id="btn_search" on:click={handleSearch}>
      Cari
    </button>
  </div>