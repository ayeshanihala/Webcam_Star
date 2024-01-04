
//array
var arr1 = ["PHP", "JAVA", "PYTHON"];
var arr2 = ["PHP", "RUBY", ".NET"];
var arr3 = ["ANGULAR", "JAVASCRIPT", "TYPESCRIPT"];
var arr4 = ["ECMASCRIPT", "JAVA", "PYTHON"];

var res = [...new Set([...arr1, ...arr2, ...arr3, ...arr4])];

console.log(res);
//array end


//stars
const stars = document.querySelectorAll(".stars i");


stars.forEach((star, index1) => {
   
  star.addEventListener("click", () => {
    
    stars.forEach((star, index2) => {
    
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});


//star end