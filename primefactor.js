
		
			const primeFactors = (number) => {
				    var factors = [],
					divisor = 2;
				while(number > 2) {
				    if(number % divisor === 0) {
					factors.push(divisor);
					number = number/divisor;
				    } else{
					divisor++;
				    }
				}

				return factors;

				}

				console.log(primeFactors(80))