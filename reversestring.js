//Reverse of a string
	
//iterative

    function reverseOfString(str){
        let reverse ='',
            for(let i = str.length-1; i>=0;i--){
            
                reverse = reverse+str[i]
            }
            return reverse;
        }
        
        
        reverseOfString('hello');
        
    //Recursion

    var reverseOfString = function(str) {
        if (string === "") {
          return "";
        } else {
       
          return reveseOfString(str.substr(1)) + str.charAt(0);
        }
      }
      console.log(reverseOfString('hello'))
      