
async function commentFormHandler(event) {
  event.preventDefault();
console.log('button clicked')

  const postId = document.querySelector('input[name="post-id"]').value;
  const comment_text = document.querySelector('textarea[name="comment-body"]').value;

  if (comment_text) {
    console.log('this is working now!!!');

    const commentFetch=await fetch('/api/comment', {

      method: 'POST',
      body: JSON.stringify({
        postId,
        comment_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // if (commentFetch.ok){
    // const commentResult=await commentFetch.json()

    // console.log('maybe its working');
    // console.log({commentResult});
    // }
    document.location.reload();
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);
