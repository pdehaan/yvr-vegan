module.exports = cfg => {
  cfg.addCollection("rest", collection =>
    collection.getFilteredByTag("restaurants").sort((a, b) => {
      const slugA = a.template.fileSlugStr;
      const slugB = b.template.fileSlugStr;
      return slugA.localeCompare(slugB);
    })
  );
};
