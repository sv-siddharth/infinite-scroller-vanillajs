let listElm = document.querySelector("#infinite-list");

// Add 20 items;

let nextItem = 1;
let loadMore = function () {
  for (let i = 0; i < 20; i++) {
    let item = document.createElement("li");
    item.innerText = `item ` + nextItem++;
    listElm.appendChild(item);
  }
};

//Detect when scrolled to bottom

listElm.addEventListener("scroll", function () {
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    //when user scroll to bottom then it will add more
    loadMore();
  }
});

//initially load some items;

loadMore();
