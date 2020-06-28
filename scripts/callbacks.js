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
    setTimeout(function () {
        posts.push(postObj);
        console.log(posts);
    }, 2000);
}

getPosts();
createPost({ title: 'Post Three', body: 'This is post three' });
