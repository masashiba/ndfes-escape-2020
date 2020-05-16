$(function () {
  //模範解答群
  var correct_answers_set = [
    ['google','GOOGLE','ｇｏｏｇｌｅ','ＧＯＯＧＬＥ'],
    ['stayhome', 'stay home', 'STAYHOME', 'STAY HOME', 'ｓｔａｙｈｏｍｅ', 'ｓｔａｙ ｈｏｍｅ', 'ＳＴＡＹＨＯＭＥ', 'ＳＴＡＹ ＨＯＭＥ', 'stay　home', 'STAY　HOME', 'ｓｔａｙ　ｈｏｍｅ', 'ＳＴＡＹ　ＨＯＭＥ'],
    ['vivid','VIVID','ｖｉｖｉｄ','']
  ];
  //Answerって押したら
  $(".ansbutton").click(function () {
    var i = $(".ansbutton").index($(this));
    correct_answers = correct_answers_set[i];
    var textinput = $(".ansinput").eq(i);
    var userans = textinput.val();
    var ansbutton = $(".ansbutton").eq(i);
    if (correct_answers.indexOf(userans) >= 0) {
      alert("正解")
      if (i === 0 || i === 1) {
        $(".question").eq(i+1).slideDown();
        $("html,body").animate({
          scrollTop: $(".question").eq(i + 1).offset().top
        });
      } else {
        window.location.href ="clear.html"
      };
      textinput.prop("disabled", true);
      ansbutton.prop("disabled", true);
      ansbutton.removeClass("validbutton");
    } else {
      alert("不正解");
    }
  });
  //入力フォーム上でエンター押したら
  $(".ansinput").keypress(function (e) {
    var i = $(".ansinput").index($(this));
    if (e.which == 13) {
      $(".ansbutton").eq(i).click();
    }
  });
  //アコーディオン実装
  $(".hint-header").click(function () {
    if ($(this).hasClass('open')) {
      $(this).next(".hint-content").slideUp();
      $(this).removeClass("open");
    } else {
      $(this).next(".hint-content").slideDown();
      $(this).addClass("open");
    }
  });
});