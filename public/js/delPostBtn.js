const delPostBtnHandler = async (event) => {
    event.preventDefault();
    console.log("delete post button has been pressed!!");
    console.log(event.target.parentElement.firstElementChild);
    console.log(delPost);
    if (delPost) {
      const response = await fetch('/api/posts', {
        method: 'DELETE',
        body: JSON.stringify(delPost),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        console.log("JS COMMENT RESPONSE OKAYYYYYYYYYYYYYYYY");
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete your post.');
      }
    }
  };
  
  document
    .querySelector('.del-post-btn')
    .addEventListener('click', delPostBtnHandler);
  