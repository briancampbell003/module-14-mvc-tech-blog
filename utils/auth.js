const withAuth = (req, res, next) => {
  console.log("middleware present");
  // TODO: If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
