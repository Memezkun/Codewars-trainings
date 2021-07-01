"use strict";

function countDevelopers(list) {
  let result = list.filter(
    (x) => x.continent === "Europe" && x.language === "JavaScript"
  );
  return result.length;
}
