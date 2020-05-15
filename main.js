

const search = document.getElementById("search") ;
	let url = "https://www.googleapis.com/books/v1/volumes?q=";


	async function getData() {
		const data =  await fetch(url)
						.then(res => res.json())
						.catch(err => console.log(err))
						.then(console.log(data));

	getData();

