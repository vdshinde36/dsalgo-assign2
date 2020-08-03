


//iterative approach
	
			function checkPalindrome(str) {
				    let l = str.length;
				    for (let i = 0; i < l/2; i++) {
				     if (str[i] !== str[l - 1 - i]) {
				      return false;
				     }
				    }
				    return true;
				   }

				   console.log(checkPalindrome('vaibhav'))
				   
				   
//recursion approach 
	
			var checkPalindrome = function(str) {
					var strLen = str.length;
					    //base case
					    if (strLen === 0 || strLen === 1) {
						return true;
					    }
					    //recursion
					    if (str[0] === str[strLen - 1]) {
						return checkPalindrome( str.slice(1, strLen - 1) );
					    }
						
					    return false;
					};

					console.log(checkPalindrome('madam'));
					