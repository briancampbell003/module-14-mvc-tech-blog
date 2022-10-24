const newPostBtnHandler = (event) => {
    event.preventDefault();
    console.log("new post button has been pressed!!");
    document.location.replace('/newPost');
  };
  
  document
    .querySelector('.new-post-btn')
    .addEventListener('click', newPostBtnHandler);
  
  