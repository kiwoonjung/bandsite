
const commentForm = document.getElementById('commentForm');
const commentEntriesElement = document.getElementById('comment-entries');

function getComment() {
    axios.get(`https://project-1-api.herokuapp.com/comments?api_key=34d522bf-3d18-4dcc-8deb-3f56b9df2c40`)
        .then(function (response) {
            console.log(response);
            const getUsers = response.data;
            commentEntriesElement.innerText = ''
            for (let i = getUsers.length - 1; i >= 0; i--) {

                let commentContainer = document.createElement('div');
                commentContainer.classList.add("default-container");

                let commentListItem = document.createElement('div');
                commentListItem.classList.add("name-date")

                let commentAvatar = document.createElement('div');
                commentAvatar.classList.add("default-avatar");

                let commentTitle = document.createElement('h3');
                commentTitle.classList.add("comment-name");
                commentTitle.innerText = getUsers[i].name;

                let commentDate = document.createElement('h3');
                commentDate.classList.add("comment-date");
                commentDate.innerText = new Date(getUsers[i].timestamp).toLocaleDateString();

                let commentContent = document.createElement('h3');
                commentContent.classList.add("default-content")
                commentContent.innerText = getUsers[i].comment;

                // if (commentEntries[i].date === currentDate()) {
                //     commentAvatar.classList.add("avatar-icon");
                // }

                commentEntriesElement.appendChild(commentContainer);
                commentEntriesElement.appendChild(commentAvatar);
                commentListItem.appendChild(commentTitle);
                commentListItem.appendChild(commentDate);
                commentEntriesElement.appendChild(commentListItem);
                commentEntriesElement.appendChild(commentContent);
                commentContainer.appendChild(commentAvatar);
                commentContainer.appendChild(commentListItem);
            }
        })
        .catch(function (error) {
            console.log(error);
        })
}

getComment()

commentForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('comment form submitted');

    axios
        .post(`https://project-1-api.herokuapp.com/comments?api_key=34d522bf-3d18-4dcc-8deb-3f56b9df2c40`, {
            name: event.target.title.value,
            comment: event.target.content.value
        })
        .then(() => getComment())

    if (event.target.title.value === '') {
        alert('please enter a title for the comment post');
        return;
    } else if (event.target.content.value === '') {
        alert('please enter a content for the comment post')
        return;
    };

    document.getElementById('commentForm').reset();
});
