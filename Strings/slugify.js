function slugify(title) {
  return title.replace(/[^\w\s]|_/g, "")
       .toLowerCase().replace(' ', '-');
}

module.exports = slugify;
