const posts = [
    {
        title: 'Post One',
        body: 'This is post one'
    },
    {
        title: 'Post Two',
        body: 'This is post two'
    }
];

function getPosts() {
    setTimeout(function () {
        let output = posts.map((post) => `<li>${post.title}</li>`).join('');
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(postObj) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            posts.push(postObj);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong.');
            }
        }, 2000);
    });
}

createPost({
    title: 'Post Three',
    body: 'This is post three'
})
    .then(getPosts)
    .catch((error) => console.error(error));

// Resolve multiple promises with Promise.all()
// const promise1 = Promise.resolve('Hello World!');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Bye!');
// });
// const promise4 = fetch(
//     'https://jsonplaceholder.typicode.com/users'
// ).then((res) => res.json());

// // Takes as long as the longest promise, waits for resolution, and actions thenable function
// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//     console.log(values)
// );
