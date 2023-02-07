

var defaultThreads2 = [
    {
        id: 3,
        title: "Thread 3",
        author: "Moderator",
        date: Date.now(),
        content: "Thread content 3",
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
        id: 4,
        title: "Thread 4",
        author: "Moderator",
        date: Date.now(),
        content: "Thread content 4",
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

var threads = defaultThreads2
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads2;
    localStorage.setItem('threads', JSON.stringify(defaultThreads2));
}