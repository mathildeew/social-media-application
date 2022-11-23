import * as storage from "../../storage/localStorage.mjs";

export function comments(post) {
  const commentsContainer = document.querySelector("#comments");

  const comments = post.comments;
  console.log(post);

  if (comments.length !== 0) {
    for (let i = 0; i < comments.length; i++) {
      const date = new Date(comments[i].created).toLocaleDateString();
      commentsContainer.innerHTML += `
                                    <div class="rounded form-control d-flex flex-column ">
                                        <div class="d-flex justify-content-between">
                                            <h3>${comments[i].owner}</h3>
                                            <p class="text-muted">${date}</h4>
                                        </div>
                                        <p>${comments[i].body}</p>
                                    </div>
                                    `;
    }
  } else {
    commentsContainer.innerHTML = `
    <div class="rounded form-control d-flex align-items-center">
        <p>No comments yet. Be the first one!</p>
    </div>
   `;
  }
}
