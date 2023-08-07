
<script>
	
	import Jumbotron from "./components/Jumbotron.svelte";
	import Searchbar from "./components/Searchbar.svelte";
	import Bookshelf from "./components/Bookshelf.svelte";
	import { onMount} from "svelte";
	
	import { useDisclosure } from "./hooks/useDisclosure";
	import { dataBooks, activeModal, isSearching, filteredBooks } from './store'

	import "./styles/stylePage.css"
	import "./styles/buttons.css"
	import "./styles/animation.css"
	import "./styles/modals.css";
	import "./styles/bookItem.css";
	import "./styles/form.css";
	
  import ModalAddBook from "./components/Modals/ModalAddBook.svelte";
  import ModalValidation from "./components/Modals/ModalValidation.svelte";
  import { writable } from "svelte/store";

  let data = writable([]);
const { isOpen, handleClose, handleOpen } = useDisclosure();




	const handleClearFinished = () => {
		dataBooks.update(prev =>  prev.filter((item) => !item.isCompleted))
		handleClose();
	};

	const handleAddBook = (bookItem) => {
		dataBooks.update(prev =>  [...prev, bookItem])
		handleClose();
	};

	$: { 
		console.log("isOpen" , $isOpen )
		console.log("dataBooks", $dataBooks)
		console.log("dataFromApi", $data)

		
	}

	 onMount(() => {
 	 fetchData() 
  });





	
async function fetchData() {
    try {
      const response = await fetch('https://64d06be2ff953154bb78e11f.mockapi.io/books');
      const json = await response.json();
	data.set(json)	
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


</script>

<div id="root">
	<Jumbotron />
	<Searchbar isSearching={isSearching} dataBooks={dataBooks} filteredBooks={filteredBooks} />
	<section id="content">
		<Bookshelf
			category="bookList"
			dataBooks={$isSearching ? filteredBooks : dataBooks}
			activeModal={activeModal}
			handleOpen={handleOpen}
			handleAddBook={handleAddBook}
			
		/>
		<Bookshelf
			category="bookFinished"
			dataBooks={$isSearching ? filteredBooks : dataBooks}
			activeModal={activeModal}
			handleOpen={handleOpen}
			handleAddBook={handleAddBook}
		/> 
	</section>
	<section>
		<div class="title_book_related">
			<h3 style="padding: 20px">Books Related</h3>
		</div>
		<Bookshelf
			category={"bookAPI"}
			dataBooks={data}
			activeModal={activeModal}
			handleOpen={handleOpen}
			handleAddBook={handleAddBook}
		/>

	
	
	
	</section>
	{#if $isOpen && $activeModal === "add" }
		<ModalAddBook onClose={handleClose} addBook={handleAddBook} />
	{:else if $isOpen && $activeModal === "remove"}
		<ModalValidation
			onClose={handleClose}
			removeList={handleClearFinished}
		/>
	{/if}
	
</div>