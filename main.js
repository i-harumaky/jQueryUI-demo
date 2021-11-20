'use strict';

$(function() {
  $('#draggable > .block').draggable();

  $('#droppable > .dragme').draggable();
  $('#droppable > .target').droppable({
    drop: function(e, ui) {
      $(this).html('welcome!').css('background', 'red')
    },
    out: function() {
      $(this).html('target').css('background', 'white')
    }
  });

  $('#resizable > .block').resizable({
    animate: true,
    ghost: true,
  });

  $('#selectable > ol').selectable();

  $('#sortable > ul').sortable();

  $('#accordion .content').accordion();


  $( "#proglangs" ).autocomplete({
    source: [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ]
  });

  $('#menu > ul').menu();

  var circle = $( "#circle" );
  $( "#radius" ).selectmenu({
    change: function( event, data ) {
      circle.css({
        width: data.item.value,
        height: data.item.value
      });
    }
    });
  $( "#color" ).selectmenu({
    change: function( event, data ) {
      circle.css( "background", data.item.value );
    }
  });

  $('#default-slider').slider();

  // slider > color picker
  function hexFromRGB(r, g, b) {
    var hex = [
      r.toString( 16 ),
      g.toString( 16 ),
      b.toString( 16 )
    ];
    $.each( hex, function( nr, val ) {
      if ( val.length === 1 ) {
        hex[ nr ] = "0" + val;
      }
    });
    var result = hex.join( "" ).toUpperCase();
    $('#swatch').text(result)
    return result;
  }
  function refreshSwatch() {
    var red = $( "#red" ).slider( "value" ),
      green = $( "#green" ).slider( "value" ),
      blue = $( "#blue" ).slider( "value" ),
      hex = hexFromRGB( red, green, blue );
    $( "#swatch" ).css( "background-color", "#" + hex );
  }
  $( "#red, #green, #blue" ).slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshSwatch,
    change: refreshSwatch
  });
  $( "#red" ).slider( "value", 255 );
  $( "#green" ).slider( "value", 140 );
  $( "#blue" ).slider( "value", 60 );


  $("#dialog > div").dialog({
    autoOpen: false,
    show: "blind",
    hide: "highlight",
    buttons: {
      とじる: function() {
        $(this).dialog('close');
      }
    }
  });
  $( ".opendialog" ).click(function() {
    var target = $(this).data('target');
    $('#' + target).dialog('open');
    return false;
  });


});