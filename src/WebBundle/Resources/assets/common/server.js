export const send = (url,callback,data=null,type="POST") =>{
  $.ajax({
    url:url,
    type:type,
    data: data,
    success: function(res){
      (callback && typeof(callback) === "function") && callback(res);
    },  
    error: function(){
      (callback && typeof(callback) === "function") && callback([{
        value:1,
        test:'ad',
      }]);
    },  
    complete: function(){
      (callback && typeof(callback) === "function") && callback([{
        value:1,
        test:'ad',
      }]);
    }  
  });
}