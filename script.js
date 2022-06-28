const likes = [0,0,0];
const like_statements = [
    document.querySelector("#post_1"),
    document.querySelector("#post_2"),
    document.querySelector("#post_3"),
];

function like(id) {
    likes[id] ++
    if (likes[id] == "1") {
        // like_statements[id].innerText = `${likes[id]} like`;
        like_statements[id].innerText = likes[id] + " like";
    } else {
        // like_statements[id].innerText = `${likes[id]} likes`;
        like_statements[id].innerText = likes[id] + " likes";
    }
}
