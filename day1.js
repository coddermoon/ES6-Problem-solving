/**
 * ========= === practice Problem 1=== =================
 * 
 * 

 * 
 * ============================================
 */

    // 1) Write an arrow function that will take 3 parameters, will multiply
    // the parameters and will return the result.


    const arrowThreeParams = (num1,num2,num3)=> num1*num2*num3
        
    // 2) Write the following sentence in three lines and print the result:
    // I am a web developer. I love to code. I love to eat biryani.

    const printThreeLine = `
    I am a Web Developer
    I Love Code
    O Love to Eat beriany`
  

    /*
     3) Write an arrow function that will take 2 parameters: One parameter
    will come from you and the other parameter will be a default
    parameter. Add these two parameters and return the result.

    */

    const deafult = (num1,num2=6)=> num1+num2

    /**
 * ========= === practice Problem 2=== =================
 * 
    * Write an arrow function where it will do the following:
    a) It will take an array where the array elements will be the
    name of your friends
    b) Check if the length of each element is even, push elements
    with even length to a new array and return the result
    Print the result. 

 * 
 * ============================================
 */

    const evenLengthFriends = (friends)=>{
        const friendList = []
        
        for(const friend of friends){
          
            if (friend.length % 2===0) {
                friendList.push(friend)
            }
        }
        return friendList

    }

    // console.log(evenLengthFriends(['ak','rakib','sakib','asasas','dabo']))


  
    