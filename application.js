var minesweeper = {}

minesweeper.play = function(){

  var initialize = function(board, handle){
    minesweeper.display(board, handle)
  }

  var loadNewGame = function(){
    return $.ajax({
      url: 'http://localhost:4567/new',
      type: 'get',
      dataType: 'json',
      async: false
    }).done(function(response){
      initialize(response, '#mine-field')
    }).error(function(){
      console.log('Error')
    })
  }

  loadNewGame()

}

minesweeper.display = function(boardArray, handle){

  var clearBoard = function(handle){
    $(handle).empty()
  }

  var renderBoard = function(boardArray, handle){
    clearBoard(handle)
    var domBoard = $(handle)
    var modelBoard = boardArray
    for(var y = 0; y < modelBoard.length; y++){
      var row = document.createElement('div')
      row.className += 'row'
      for(var x = 0; x < modelBoard[y].length; x++){
        var modelTile = modelBoard[y][x]
        var tile = document.createElement('div')
        switch(modelTile){
          case '_':
            tile.className += 'tile'
          case '*':
            tile.className += 'tile mine'
            break
          default:
            tile.className += 'tile'
            tile.innerHTML = modelTile
            break
        }
        row.appendChild(tile)
      }
    domBoard.append(row)
    }
  }

  renderBoard(boardArray, handle)
}