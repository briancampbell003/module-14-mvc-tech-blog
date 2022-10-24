const commentFormHandler = async (event) => {
    event.preventDefault();
    console.log("comment button has been pressed!!");
    const newComment = {
      content : document.querySelector('#new-comment').value.trim(),
      date : "10/23/2022",
      user_id : 3,
      post_id : 2,
    }
      
    console.log(newComment);
    if (newComment) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        console.log("JS COMMENT RESPONSE OKAYYYYYYYYYYYYYYYY");
        // document.location.replace('/');
      } else {
        alert('Failed to post comment.');
      }
    }
  };
  
  document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);
  
  