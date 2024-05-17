const about = (req, res) => {
    const pageTitle = process.env.npm_package_description + " - About";
    res.render("about", { title: pageTitle });
};

module.exports = {
    about,
};
