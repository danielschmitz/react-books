
const api = "http://localhost:3001/"

const service = {
    books: {
        getAll: () => fetch(api + "books?_expand=friend&_expand=category").then(response => response.json()),
    },
    categories: {
        getAll: () => fetch(api + "categories").then(response => response.json()),
    },
    friends: {
        getAll: () => fetch(api + "friends").then(response => response.json()),
    }
}

export default service