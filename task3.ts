interface IComment {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}

const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

const getData = async (url: string): Promise<IComment[]> => {
	const response = await fetch(url);

	return await response.json();
};

getData(COMMENTS_URL).then((data) => {
	data.forEach((item) => console.log(`ID: ${item.id}, Email: ${item.email}`));
});
