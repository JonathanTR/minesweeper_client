getNewMineSweeperGame = function(){
  $.ajax({
    url: 'http://localhost:4567/new',
    type: 'get',
    dataType: 'json'
  }).done(function(response){
    console.log(response)
  }).error(function(){
    console.log('Error')
  })
}