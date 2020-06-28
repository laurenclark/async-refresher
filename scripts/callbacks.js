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

// Call back TO the function we want to run AFTER
function createPost(postObj, callback) {
    setTimeout(function () {
        posts.push(postObj);
        // Placeholder for where you want the callback argument function to go.
        // Order is important.
        callback();
    }, 2000);
}

//Reference the function we want to run after the function we're calling.
createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
