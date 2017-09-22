
const func = function ( s1, s2, s3) {
 return s1 + s2 + s3 ;
 };
 const result = func (4, 2,3) + func (2, 3, 1);

 
 const number = function ( ) {
 return 22;
 };
 
 const add = function (num1, num2) {
  num1 + num2 ;
  };
  
  
  const FullName = function (fName, lName) {
   return fName + " " + lName ;
   };
 
 const length = function (s1, s2, s3) {
	 if ( s1.length > s2.length && s1.length > s3.length)
		 return s1;
	 if (s2.length > s1.length && s2.length > s3.length )
		 return s2;
	 if (s3.length > s1.length && s3.length > s2.length)
		 return s3;
 };

 
	  const compare = function (num1, num2) {
		  if (num1 === num2 )
			  return 0;
		  if  (num1 > num2 )
			  return 1;
		  if (num1 < num2 )
			  return -1;
	  };
	  
	 const isTruethy = function ( num1, num2, num3) {
        if (num1)
return num1;
        if (num2)
return num2;
        if (num3)
return num3;
		};
		
