 function friends(friend){
   //your code here
   const notNum = isNaN(friend);
   const equals4 = friend.length === 4;
   let noSpace = true;
   for(let i = 0; i < friend.length;i++){
     if(friend[i] === " "){
       noSpace = false;

     }
   }

   const result = notNum && equals4 && noSpace;

   return result;
   }



const oldFriends = ['love','joy','pain','1','2','22','Mar '];

const newFriends = oldFriends.filter(friend => friend.length === 4  );

console.log(newFriends);
