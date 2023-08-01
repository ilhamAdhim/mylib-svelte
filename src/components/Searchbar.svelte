<script>
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import FiSearch from "svelte-icons-pack/fi/FiSearch";

    export let dataBooks
    export let filteredBooks
    export let isSearching
    let inputSearchValue

    const handleSearch = () => {
      isSearching.set(true);
      filteredBooks.set($dataBooks.filter((book) => book.title.toLowerCase().includes(inputSearchValue.toLowerCase())))
    }

    const handleChange = (e) => {
      inputSearchValue = e.target.value
        if (e.target.value === "") isSearching.set(false);
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
      on:input={handleChange}
      on:keypress={searchBookByEnter}
    />
    <button id="btn_search" on:click={handleSearch}>
      <Icon src={FiSearch} />
    </button>
  </div>