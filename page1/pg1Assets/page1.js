

var defaultThreads = [
    {
        id: 1,
        title: "Thread 1",
        author: "Moderator",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Moderator",
                date: Date.now(),
                content: "Hi Guys!!"
            },
            {
                author: "Modrator",
                date: Date.now(),
                content: "Use this thread to talk about your tip's and tricks for indoor plant care"
            }
        ]
    },
    {
        id: 2,
        title: "Thread 2",
        author: "Moderator",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Moderator",
                date: Date.now(),
                content: "Hi Guys!!"
            },
            {
                author: "Moderator",
                date: Date.now(),
                content: "Use this thread to talk about your tip's and tricks for Outdoor plant care"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}