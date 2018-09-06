/*
Open a new tab, and load "my-page.html" into it.
*/
function openMyPage() {
   let firstTab;
   browser.tabs.create({
     "url": "https://www.pixiv.net/bookmark_new_illust.php"
   }).then((t) => {
        firstTab = t
        browser.tabs.create({
          "url": "https://www.pixiv.net/discovery"
        });
        browser.tabs.create({
        "url": "https://www.pixiv.net/ranking.php?mode=male"
        }).then((t) => browser.tabs.update(firstTab.id, { active: true }))
   });

}


/*
Add openMyPage() as a listener to clicks on the browser action.
*/
browser.browserAction.onClicked.addListener(openMyPage);
 


browser.contextMenus.create({
  id: "new-works",
  title: "New works",
  contexts: ["browser_action"]
});

browser.contextMenus.create({
  id: "discovery",
  title: "Discovery",
  contexts: ["browser_action"]
});

browser.contextMenus.create({
  id: "rankings",
  title: "Rankings",
  contexts: ["browser_action"]
});


browser.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "new-works":
      browser.tabs.create({
        "url": "https://www.pixiv.net/bookmark_new_illust.php"
      });
      break;
    case "discovery":
      browser.tabs.create({
        "url": "https://www.pixiv.net/discovery"
      });
      break;
    case "rankings":
      browser.tabs.create({
        "url": "https://www.pixiv.net/ranking.php?mode=male"
      });
      break;
  }
})