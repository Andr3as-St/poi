const User = require("../models/user");
const { authSchema } = require("../schemas");

module.exports.renderRegister = (req, res) => {
  res.render("users/register");
};

module.exports.register = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const result = await authSchema.validateAsync(req.body);

    const user = new User({ email, username, password });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      req.flash("success", "Welcome to covid detection app!");
      res.redirect("/pois");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("register");
  }
};

module.exports.renderLogin = (req, res) => {
  res.render("users/login");
};

module.exports.login = (req, res) => {
  req.flash("success", `welcome back! ${req.body.username}`);
  const redirectUrl = req.session.returnTo || "/pois";
  delete req.session.returnTo;
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res) => {
  req.logout();
  req.flash("success", `Goodbye  ${res.locals.currentUser.username}`);
  res.redirect("/pois");
};
