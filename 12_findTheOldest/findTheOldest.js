const findTheOldest = function(array) {
  
    const years = array.map(function (obj) {   
      if ("yearOfDeath" in obj) {
          return (obj.yearOfDeath - obj.yearOfBirth); 
      } else {
          const date = new Date();
          obj.yearOfDeath = date.getFullYear();
          return (obj.yearOfDeath - obj.yearOfBirth);     
      }
    }); 
  
    const calcAge = array.map(function (obj) {
      return (obj.yearOfDeath - obj.yearOfBirth);     
    });
  
    const compare = function (x) {
      if (x[0] > x[1] && x[0] > x[2]) {
        return array[0];
      } else if (x[1] > x[0] && x[1] > x[2]) {
        return array[1];
      } else if (x[2] > x[0] && x[2] > x[1]) {
        return array[2];
      }
    };
  
    return (compare(calcAge));

};

// Do not edit below this line
module.exports = findTheOldest;
