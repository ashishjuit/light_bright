$(document).ready(function(){
  var container = $('.container');
  var numOfRows;
  var numOfCols;
  var currentColor = 0;
  var colorClasses= ['white', 'red', 'green', 'blue'];

  inputRows();
  inputColumns();
  initGrid();
  addClickHandlers();

  function inputRows(){
    var rows = prompt("Please enter the number of rows");
    numOfRows = rows;
  }

  function inputColumns(){
    var cols = prompt("Please enter the number of columns");
    numOfCols = cols;
  }



  function changeColor(){
    if(currentColor<colorClasses.length){
      $(this).removeClass(colorClasses.join(' '));
      $(this).addClass(colorClasses[currentColor]);
      currentColor +=1;
    }else{
      currentColor=0;
      changeColor();
    }
  }


  function addClickHandlers(){
    var cells = $('.cell');
    for(var counter =0; counter<cells.length; counter +=1){
      var cell = cells[counter];
      $(cell).on('mouseenter', changeColor);
    }

  }

  function initGrid(){
    for(var i = 0; i<numOfRows; i +=1){
      var row = $('<div></div');
      row.addClass('row');
      for(var j=0; j< numOfCols; j +=1){
        var cell = $('<div></div>');
        cell.addClass('cell border');
        row.append(cell);
      }
      container.append(row);
    }
  }
});
