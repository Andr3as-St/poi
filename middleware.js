const ExpressError = require("./utils/ExpressError");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    //store the url they are requesting!
    req.session.returnTo = req.originalUrl;
    req.flash("error", "You must be signed in first!");
    return res.redirect("/login");
  }
  next();
};

// module.exports.isAuthor = async (req, res, next) => {
//     const { id } = req.params;
//     const poi = await Poi.findById(id);
//     if (!poi.admin.equals(req.user._id)) {
//         req.flash('error', 'You do not have permission to do that!')
//         return res.redirect(`/pois/${id}`)
//     }
//     next();
// }
