$( document ).ready(function() {
  
function isTriangle(a,b,c){

  function meetsInequality(){ return (a+b>c && a+c>b && b+c>a); }
  
  function getType(){
      return (a===b && b===c) ? "equilateral"
              : (a===b || a===c || b===c) ? "isosceles"
              : "scalene";
  }
  
  return {
      kind : function(){
          if (meetsInequality()){
              return getType();
          }
          throw new Exception("These are not the droids you're looking for.");
      }
  };
  };
  
  function getTriangleType(a,b,c) {
    return (a === b && b === c) && 'equilateral' ||
      (a === b || a === c || b === c) && 'isosceles' ||
      'scalene';
  }
  
  console.log(getTriangleType(15,15,15));
  console.log(getTriangleType(10,20,10));
  console.log(getTriangleType(12,13,14));

  ts.ui.Notification.warning(getTriangleType(15,15,15));

  ts.ui.Notification.warning(getTriangleType(10,20,10));
  
  ts.ui.Notification.warning(getTriangleType(12,13,14));
});