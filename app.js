

var i; ///Declaring the variable - 'i' is shorthand for counter

for(i = 1; i <= 100; i++){  // Declaring a 'for loop' with a counter variable, a condtional test 
                            // and a way of changing the counter variable. In this case, adding 1
                            // usind 'i++'

    if (i % 3 === 0){               // Use of an 'if' statement to test if the current variable
        document.write("Fizz<br>"); // going through the loop when divided by 3, the remainder is
                                    // equal to 0. If it is true, write 'Fizz' to the page.

        continue;                   // The continue statement tells the interpreter to immediately 
                                    // start the next iteration of the loop and skip remaining code block.
                                    // When a continue statement is encountered, program flow will 
                                    // move to the loop check expression immediately and if condition 
                                    // remain true then it will start next iteration otherwise comes 
                                    // out of the loop.
                                    //   (i.e it won't print the number 3 as well as printing 'Fizz')
    };                               

    if (i % 5 === 0){               // Use of an 'if' statement to test if the current variable
        document.write("Buzz<br>"); // going through the loop when divided by 5, the remainder is
                                    // equal to 0. If it is true, write 'Buzz' to the page.

         continue;

    };

    if (i % 3 === 0 && i % 5 === 0){
        document.write("FizzBuzz<br>")   // Use of an 'if' statement to test if the current variable
                                         // going through the loop when divided by 15, the remainder is
                                        // equal to 0. If it is true, write 'FizzBuzz' to the page.
    }

    document.write(i + "<br>"); // Call the function 'document.write' and print it to the web page
}