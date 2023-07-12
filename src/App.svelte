
<script>
	import Jumbotron from "./components/Jumbotron.svelte";
	import Searchbar from "./components/Searchbar.svelte";

	import "./styles/stylePage.css"
	import "./styles/buttons.css"
	import "./styles/animation.css"
	import { writable } from "svelte/store";
	import { useDisclosure } from "./hooks/useDisclosure";
  import Bookshelf from "./components/Bookshelf.svelte";
  import { onMount } from "svelte/types/runtime/internal/lifecycle";

	const { isOpen, handleClose, handleOpen } = useDisclosure();

	const dataBooks = writable([])
	const activeModal = writable("")
    const isSearching = writable(false)
  	const filteredBooks = writable([])
	
	const handleClearFinished = () => {
		dataBooks.update(prev =>  prev.filter((item) => !item.isCompleted))
		handleClose();
	};

	const handleAddBook = (bookItem) => {
		dataBooks.update(prev =>  [...prev, bookItem])
		handleClose();
	};

	onMount(() => {
		dataBooks.set([
		{
			id: 1634376225400,
			title: "Harry Potter and the Philosopher's Stone",
			author: "Ilham Rowling",
			imageURL:
			"https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg?h=375&resize=fit&w=250",
			year: "2000",
			isCompleted: true,
		},
		{
			id: 1634391145501,
			title: "Rich Dad Poor Dad",
			author: "Robert Kiyosaki",
			year: "2017",
			imageURL:
			"https://images-na.ssl-images-amazon.com/images/I/81dQwQlmAXL.jpg",
			isCompleted: true,
		},
		{
			id: 1634391847252,
			title: "Atomic Habits",
			author: "James Clear",
			year: "2018",
			imageURL:
			"https://images.tokopedia.net/img/cache/700/VqbcmM/2021/6/6/5105a9a3-3e95-4639-ba4e-b7ca91db8f4f.jpg",
			isCompleted: false,
		},
		{
			id: 1634392008893,
			title: "How to Win Friends and Influence People",
			author: "Dale Carnegie",
			year: "1936",
			imageURL:
			"https://miro.medium.com/max/644/1*2jWzEpx7pPLD4hTiXrGroQ.jpeg",
			isCompleted: false,
		},
		{
			id: 1634392102756,
			title: "Future We Choose",
			author: "Christiana Figueres",
			year: "2020",
			imageURL:
			"https://images-na.ssl-images-amazon.com/images/I/4135O-8cnmL._SX329_BO1,204,203,200_.jpg",
			isCompleted: true,
		},
		{
			id: 1634392125165,
			title: "Coba judul",
			author: "Saya sendiri",
			year: "2000",
			imageURL: "",
			isCompleted: false,
		},
		])
	})

</script>

<Jumbotron />
<Searchbar />
<section id="content">
	 <Bookshelf
	  category="bookList"
	  books={(isSearching ? filteredBooks : dataBooks).filter(
		(item) => !item.isCompleted
	  )}
	  activeModal={activeModal}
	  handleOpen={handleOpen}
	/>
	<Bookshelf
	  category="bookFinished"
	  books={(isSearching ? filteredBooks : dataBooks).filter(
		(item) => item.isCompleted
	  )}
	  activeModal={activeModal}
	  handleOpen={handleOpen}
	/> 
  </section>
<style></style>