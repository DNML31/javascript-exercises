const findTheOldest = function(array) {
  
    const years = array.map(function (obj) {   
        if ("yearOfDeath" in obj) {
            return (obj.yearOfDeath - obj.yearOfBirth); 
        } else {
            const date = new Date();
            obj.yearOfDeath = date.getFullYear();
        }
    }); 
  
    const calcAge = array.map(function (obj) {
        return (obj.yearOfDeath - obj.yearOfBirth);     
    });

    console.log(calcAge);
  
    const compare = function (calcAge) {
      if (calcAge[0] > calcAge[1] && calcAge[0] > calcAge[2]) {
        return array[0];
      } else if (calcAge[1] > calcAge[0] && calcAge[1] > calcAge[2]) {
        return array[1];
      } else if (calcAge[2] > calcAge[0] && calcAge[2] > calcAge[1]) {
        return array[2];
      }
   };
};

// Do not edit below this line
module.exports = findTheOldest;
