// function declaration - hoisted
function greet(){
    console.log('hello there')    
}
// function expression - cant be hoisted
const speak = function(){ 
  console.log('good day!');  
};
greet();
greet();
speak();