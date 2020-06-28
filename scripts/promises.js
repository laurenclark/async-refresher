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
            const error = true;
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
