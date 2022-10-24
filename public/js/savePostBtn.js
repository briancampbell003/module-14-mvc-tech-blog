const savePostBtnHandler = async (event) => {
    event.preventDefault();
    console.log("save post button has been pressed!!");
    let today = new Date().toLocaleDateString();
    const newPost = {
      title: document.querySelector('#new-post-title').value.trim(),
      content : document.querySelector('#new-post-content').value.trim(),
      date : today,
    }
      
    console.log(newPost);
    if (newPost) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        console.log("JS COMMENT RESPONSE OKAYYYYYYYYYYYYYYYY");
        document.location.replace('/dashboard');
      } else {
        alert('Failed to post your new post.');
      }
    }
  };
  
  document
    .querySelector('.save-post-form')
    .addEventListener('submit', savePostBtnHandler);
  