'use strict';

$(function() {
  // dataでsectionを編集（小文字化）
  $('.uis section').each(function() {
    var section_name = $(this).data('name') || 'title';
    var lower = section_name.toLowerCase();
    var reference = $(this).data('ref') || 'https://jqueryui.com/';
    var title = $('<h3 class="uititle">');
    
    $(this).addClass(lower);
    $(this).attr('id', lower);
    title.text(section_name);
    title.append(`<a href="${reference}">Doc</a>`);

    $(this).prepend(title)
  });


  $('#color-toggle').on('change', function() {
    var root = document.querySelector(':root')
    if ($(this).prop('checked')) {
      root.style.setProperty("--text", "#e5e5e5");
      root.style.setProperty("--contrast", "#000");
      root.style.setProperty("--bg", "#211F1D");
    } else {
      root.style.setProperty("--text", "#211F1D");
      root.style.setProperty("--contrast", "#fff");
      root.style.setProperty("--bg", "#e5e5e5");
    }
  })
});