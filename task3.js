"use strict";
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
const getData = async (url) => {
    const response = await fetch(url);
    return await response.json();
};
getData(COMMENTS_URL).then((data) => {
    data.forEach((item) => console.log(`ID: ${item.id}, Email: ${item.email}`));
});
