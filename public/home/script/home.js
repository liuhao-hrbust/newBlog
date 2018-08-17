'use strict';


let blackboard = document.getElementsByClassName('blackb')[0];
window.onload = async function () {
  blackboard.className = 'onimg ' + 'blackb';
  try {
    await $.ajax({
      url: "/getList",
      method: "get",
      success: function (wen) {
        wen = JSON.parse(wen);
        var div;
        var article;
        var p;
        var btn;
        var button;
        var contentField
        for (let i = 0; i < parseInt(wen.length); i++) {
          contentField = document.getElementsByClassName('contentField')[0]
          div = document.createElement("div");
          article = document.createElement("article");
          p = document.createElement('p');
          article.innerHTML = wen[i].title;
          p.innerHTML = wen[i].description;
          div.appendChild(article);
          div.appendChild(p);
          contentField.appendChild(div);
          div.className = 'col-md-8 list';
          var tags = new Array();
          tags = wen[i].tags.split(' ');
          for (var j = 0; j < tags.length; j++) {
            btn = document.createElement('button');
            btn.className = 'btn btn-group-sm btnpad';
            btn.innerHTML = tags[j];
            div.appendChild(btn);
          }
          button = document.createElement('button');
          button.innerHTML = 'Learn More';
          button.className = 'btn btn-default learn';
          div.appendChild(button);
          div.setAttribute("filename", `${wen[i].filename}`);
        }
      }
    });
  } catch (error) {
    return;
  }
  $('.temptext').hide();

  $(".learn").click(function () {
    $(".list").hide();
    var filename = this.parentNode.getAttribute('filename');
    $.get(`../files/${filename}`, (data) => {
      var converter = new showdown.Converter();
      var htm = converter.makeHtml(data);
      $('.temptext').html(function () {
        return $('.temptext').html() + htm;
      });
    });
    $('.temptext').show();
  });
  $("#backs").click(function () {
    console.log('aaa')
  })
};
