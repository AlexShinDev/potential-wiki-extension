 //Grabs Article Title in current tab
 let articleTitle = "";
 let articleHighlight = "";
chrome.tabs.executeScript( {
  code: "window.document.getElementById('firstHeading').innerHTML;"
}, function(title) {
  document.getElementById("fHeadingEx").innerHTML = title;

  articleTitle = title[0]

});

//Grabs selection in current tab
chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    document.getElementById("highlight").innerHTML = selection[0];

    articleHighlight = selection[0];
});

$(function() {
  let processedUri = encodeURIComponent(articleTitle);
  $('#sendInfo').on('click', function() {
    console.log("hi");
    $.post("http://localhost:3000/api/v1/highlights/extension/" + processedUri,
    {
      selection: articleHighlight
    });
  });
});



