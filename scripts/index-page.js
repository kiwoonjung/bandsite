const commentData = [{
    name: "Connor Walton",
    date: "02/17/2021",
    comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
},
{
    name: "Emilie Beach",
    date: "01/09/2021",
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
},
{
    name: "Miles Acosta",
    date: "12/20/2020",
    comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
}];

const commentForm = document.getElementById('commentForm');
const commentEntriesElement = document.getElementById('comment-entries');

// function createDefultComment() {
//     commentEntriesElement.innerText = '';

//     for (let i = 0; i < commentData.length; i++) {

//         let commentListItem = document.createElement('div');

//         let commentTitle = document.createElement('h3');
//         commentTitle.innerText = commentData[i].name;

//         let commentDate = document.createElement('h3');
//         commentDate.innerText = commentData[i].date;

//         let commentContent = document.createElement('h3');
//         commentContent.innerText = commentData[i].comment;

//         commentListItem.appendChild(commentTitle);
//         commentListItem.appendChild(commentDate);
//         commentListItem.appendChild(commentContent);
//         commentEntriesElement.appendChild(commentListItem);
//     }
// }

// createDefultComment()


const currentDate = function () {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;

    return formattedToday;
}

// const commentForm = document.getElementById('commentForm');
// const commentEntriesElement = document.getElementById('comment-entries');
const commentEntries = commentData.map(data => ({ title: data.name, content: data.comment, date: data.date }));

function renderCommentEntries() {
    commentEntriesElement.innerText = '';

    for (let i = 0; i < commentEntries.length; i++) {

        let commentContainer = document.createElement('div');
        commentContainer.classList.add("default-container");

        let commentListItem = document.createElement('div');
        commentListItem.classList.add("name-date")

        let commentAvatar = document.createElement('div');
        commentAvatar.classList.add("default-avatar");

        let commentTitle = document.createElement('h3');
        commentTitle.classList.add("comment-name");
        commentTitle.innerText = commentEntries[i].title;

        let commentDate = document.createElement('h3');
        commentDate.classList.add("comment-date");
        commentDate.innerText = commentEntries[i].date;

        let commentContent = document.createElement('h3');
        commentContent.classList.add("default-content")
        commentContent.innerText = commentEntries[i].content;

        if (commentEntries[i].date === currentDate()) {
            commentAvatar.classList.add("avatar-icon");
        }

        commentEntriesElement.appendChild(commentContainer);
        commentEntriesElement.appendChild(commentAvatar);
        commentListItem.appendChild(commentTitle);
        commentListItem.appendChild(commentDate);
        commentEntriesElement.appendChild(commentListItem);
        commentEntriesElement.appendChild(commentContent);
        commentContainer.appendChild(commentAvatar);
        commentContainer.appendChild(commentListItem);
    }

    console.log(commentEntries);
}

commentForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('comment form submitted');

    if (event.target.title.value === '') {
        alert('please enter a title for the comment post');
        return;
    } else if (event.target.content.value === '') {
        alert('please enter a content for the comment post')
        return;
    };


    const newCommentEntry = {
        title: event.target.title.value,
        content: event.target.content.value,
        date: currentDate(),
    }

    commentEntries.unshift(newCommentEntry);
    renderCommentEntries();
    document.getElementById('commentForm').reset();
});

renderCommentEntries();