// $(function(){

//     chrome.storage.sync.get('limit',function(budget){
//         $('#limit').val(budget.limit);
//     });

//     $('#saveLimit').click(function(){
//         var limit = $('#limit').val();
//         if (limit){
//             chrome.storage.sync.set({'limit': limit}, function(){
//                 close();
//             });
//         }
//     });

//     $('#resetTotal').click(function(){
//         chrome.storage.sync.set({'total': 0});
//     });
// });

$(function(){
  $("button").click(function(){
    $.get("http://localhost:3000/api/v1/users/1.json".body, function(data){
        console.log(data);
      });
    });
});