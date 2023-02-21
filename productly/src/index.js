// imd, (Article)
import { Article } from "./js/Article.js";
import { ArticleModal } from "./js/ArticleModal.js";
import { Modal } from "./js/Modal.js";
import img1 from "./img/strategies/1.jpg";
import img2 from "./img/strategies/2.jpg";
import img3 from "./img/strategies/3.jpg";

const data = [
  {
    id: 1,
    title: "Increasing Prosperity With Positive Thinking",
    urlToImage: img1,
    tags: ["Art", "Design"],
    content:
      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",
    date: "01.01.2020",
  },
  {
    id: 2,
    title: "Motivation Is The First Step To Success",
    urlToImage: img2,
    tags: ["Culture"],
    content:
      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",
    date: "01.01.2020",
  },
  {
    id: 3,
    title: "Success Steps For Your Personal Or Business Life",
    urlToImage: img3,
    tags: ["Culture", "Design", "Art"],
    content:
      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",
    date: "01.01.2020",
  },
];

/* functional style & cool naming */

window.onload = function () {
  console.log("hello");

  // Render Articles
  if (data) {
    renderArticlesToDom();
  }

  // Tags
  addTagsClickHandler();

  //Generate Base Modal from Modal Class
  addToolsClickHandler();
};

// nfn, anfn
const addTagsClickHandler = () => {
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

// nfn, fre
const showAllStrategies = () => {
  let strategies = document.querySelectorAll(".strategy-wrapper .strategy");
  strategies.forEach((strategy) => {
    strategy.classList.remove("strategy_hidden");
  });
};

// nfn, fre
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

// nfn, solid(single-resp)
const renderArticlesToDom = () => {
  let strategiesWrapper = getStrategiesContainer();
  generateArticles(data).forEach((article) => {
    strategiesWrapper.append(article.generateArticle());
  });

  addStrategyClickHandler();
};

// nfn
const getStrategiesContainer = () => {
  const starategiesContainer = document.querySelector(".strategy-wrapper");
  starategiesContainer.innerHTML = "";
  return starategiesContainer;
};

// nfn, fre
const generateArticles = (data) => {
  let articles = [];
  data.forEach((article) => {
    articles.push(new Article(article));
  });
  return articles;
};

const addToolsClickHandler = () => {
  document
    .querySelector(".tools__button .button")
    .addEventListener("click", () => {
      generateToolsModal();
    });
};

const generateToolsModal = () => {
  renderModalWindow("test content for tools modal");
};

const renderModalWindow = (content) => {
  let modal = new Modal("tools-modal");
  modal.buildModal(content);
};

const addStrategyClickHandler = () => {
  document.querySelector(".strategy-wrapper").addEventListener("click", (e) => {
    if (e.target.closest(".strategy")) {
      let clickedStrategyId = e.target
        .closest(".strategy")
        .getAttribute("data-id");
      let clickedStrategyData = getClickedStrategyData(clickedStrategyId);

      renderArticleModalWindow(clickedStrategyData);
    }
  });
};

const getClickedStrategyData = (id) => {
  return data.find((article) => article.id == id);
};

const renderArticleModalWindow = (article) => {
  let modal = new ArticleModal("article-modal", article);
  modal.renderModal();
};
