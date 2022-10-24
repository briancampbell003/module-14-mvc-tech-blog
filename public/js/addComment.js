const commentFormHandler = async (event) => {
    event.preventDefault();
    console.log("save comment button has been pressed!!");
    // today = new Date;
    const newComment = {
      content : document.querySelector('#new-comment').value.trim(),
      date : "10/23/2022",
      // post_id : location.pathname,
    }
      
    console.log(newComment);
    if (newComment) {
      const response = await fetch('/api/comments/', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(req);
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
  
  