//2)factorial of a number 
     //Iterative 
     


 					function factorialOfNumber(num){
					    let factorial = 1;
					    if(num===0|| num===1){
						return factorial;
						}
					    else{
						for(var i = num; i >= 1; i--){
							 factorial = factorial * i;
						   }
						   return factorial;
						   }
					     } 
					    
					console.log(factorialOfNumber(5))
					
                    
                    //Recursion 
			  function factorialOfNumber(x) {
				    // TERMINATION
				    if (x < 0) return "not a valid number";  
				    // BASE
				    if (x === 0) return 1; 
				     // RECURSION
				    return x * factorialOfNumber(x - 1);
				  }
				  
				  console.log(factorialOfNumber(5));
				  // 120