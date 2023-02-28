
const api = "http://localhost:3001/"

const service = {
    books: {
        getAll: () => fetch(api + "books?_expand=friend&_expand=category").then(response => response.json()),
        getByCategoryId: (id) => fetch(api + `books?categoryId=${id}`).then(response => response.json()),
    },
    categories: {
        getAll: () => fetch(api + "categories").then(response => response.json()),
        getById: (id) => fetch(api + "categories/" + id).then(response => response.json()),
        save: (category) => fetch(api + "categories/" + (category.id ?? ''), {
            method: category.id ? "PUT" : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(category) 
        }),
        remove: (id) => fetch(api + "categories/" + id, {
            method: "DELETE"            
        })
    },
    friends: {
        getAll: () => fetch(api + "friends").then(response => response.json()),
    }
}

export default service