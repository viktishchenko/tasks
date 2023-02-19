/* functional style & cool naming */

window.onload = function () {
  console.log("hello");

  // Tags
  addTagClickHandler();
};

// nfn, anfn
const addTagClickHandler = () => {
  document.querySelector(".strategies__tags").addEventListener("click", (e) => {
    if (e.target.classList.contains("tag")) {
      let clickedTag = e.target;
      removeSelectedTags();
      selectClickedTag(clickedTag);
      if (clickedTag.innerText === "All") {
        showAllStrategies();
      } else {
        filterStrategyBySelectedTag(clickedTag.innerText);
      }
    }
  });
};

// nfn, fre (single responsibility foo)
const removeSelectedTags = () => {
  let tags = document.querySelectorAll(".strategies__tags .tag");
  tags.forEach((tag) => {
    tag.classList.remove("tag_selected");
    tag.classList.add("tag_bordered");
  });
};

// nfn
const selectClickedTag = (clickedTag) => {
  clickedTag.classList.remove("tag_bordered");
  clickedTag.classList.add("tag_selected");
};

// nfn
const showAllStrategies = () => {
  let strategies = document.querySelectorAll(".strategy-wrapper .strategy");
  strategies.forEach((strategy) => {
    strategy.classList.remove("strategy_hidden");
  });
};

// nfn
const filterStrategyBySelectedTag = (selectedTag) => {
  let strategies = document.querySelectorAll(".strategy-wrapper .strategy");
  strategies.forEach((strategy) => {
    strategy.classList.add("strategy_hidden");
    strategy.querySelectorAll(".tag").forEach((tag) => {
      if (tag.innerText === selectedTag) {
        strategy.classList.remove("strategy_hidden");
      }
    });
  });
};
