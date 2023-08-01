
<script>
	import Jumbotron from "./components/Jumbotron.svelte";
	import Searchbar from "./components/Searchbar.svelte";
	import Bookshelf from "./components/Bookshelf.svelte";
	
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
		/>
		<Bookshelf
			category="bookFinished"
			dataBooks={$isSearching ? filteredBooks : dataBooks}
			activeModal={activeModal}
			handleOpen={handleOpen}
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