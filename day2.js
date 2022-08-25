/**
 * ========= === practice Problem filter mp and find=== =================
 * 
 * 

 * 
 * ============================================
 */

        // 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
        // Now convert this array into an even array (array with even
        // numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
        // method. Hints: add one to any odd number and it will become an even
        // number. 
 

        const numbers = [ 1, 3, 5, 7, 9 ];
        const evenNumber = numbers.map(number=> number+1)


 //       2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
  //      return/get all the elements which are divisible by 10 using
   //     array.filter() method.

   const arr =  [33, 50, 79, 78, 90, 101, 30 ]

   const devide10 = arr.filter(number=> number%10 === 0)
   //alternative way
   const devideFind = arr.find(number=> number%10 === 0)

/**
 * ========= === Practice Problem reduce()=== =================
 * 
 
 * ============================================
 */
/**
 * 1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method. 

 */

const sumAll = (numbers)=>{

       // formula of reduce 

       // Array.reduce(function  ,initial value)

       const sum = numbers.reduce((privious,current)=> privious+current,0)
       return sum


}


// 1) Challenging Follow above array of objects. So, you have 3 objects as
// array element. Can you find out the total sum from here?
// 20 + 15 + 22 = 57 . The output will be 57
// What are you thinking? Yeah! Do it with for loop. I know you can do it.
// But! Wait !! Wait !!! Do the same task using array.reduce() method. 


const peoples = [
       {name:'meena',age:20},
       {name:'rajia',age:32},
       {name:'rina',age:11},
]


const ageTotal = (persons)=>{

       const totalAge = persons.reduce((privious,current)=> privious + current.age ,0)
       return totalAge
}

console.log(ageTotal(peoples))



