// this prompt displays when the page first loads. 
// user is prompted to select an option
const message = prompt('Choose an Option \n1. Show Messages'+ 
                    '\n2. Add a Message \n3. Delete a message \n0. Quit');

// create an array with 5 elememnts inside. 
let message_list = ['message 01','message 02','message03','message04','message 05'];


// function that calls other functions based on the input the user has provided.
function determineOutput()
{
    switch (message)
    {   
        // user input 0
        case '0':
            alert('Your input is: ' + message);
            quit();
            break;

        // user input 1
        case '1':
             alert('Your input is: ' + message);
            showMessages();
            break;

        // user input 2
        case '2':
            alert('Your input is: ' + message);
            addMessage();

            // new message is added to the end of the array. Function call to display it is here. 
            showMessages();
            break;

        // user input 3
        case '3':
            alert('Your input is: ' + message);
            deleteMessage();
            showMessages();
            break;

        // user input some invalid value
        default: 
            alert('Your input is: ' + message+' is invalid');
            invalidInput();


    } 
}


// user input 0
// Output will display "Good Bye"
function quit ()
{
    document.getElementById("output").innerHTML = "Good Bye!";
}

// user input 1
// Output will display an ordered list of all the messages in the array
function showMessages()
{
    let result = " ";
    
    // append the index and the message to a variable. 
    for(i = 0; i < message_list.length; i++)
    {
        result+=`${i+1}. `+message_list[i]+'<br />';
    }
    
    // output will display the 'result' variable.
    document.getElementById("output").innerHTML = result;

}

// user input 2
// the user will be prompted to type a message
function addMessage()
{
    let new_message = prompt('Enter a new message: ');
    message_list.push(new_message);
}

// user input 3
// the user will be prompted to select an index between 1 - 5
// if that input was invalid, then prompt the user to select another input. 
function deleteMessage()
{
    // declare a variable to represent the index to be removed. 
    let remove_index;
   
    remove_index = prompt('Enter the message index between 1'+' - '+`${message_list.length}`+' to remove');
            
    while((remove_index > 5 ) || (remove_index < 1)  )
    {
        remove_index = prompt('Invalid input. Enter the message index between 1'+' - '+`${message_list.length}`+' to remove');
    }
    
    // first parameter in splice is the index to remove.
    // removal index is (remove_index - 1) because the message output displays 
    // from 1 - ... while array index goes from 0 - ...
    message_list.splice(remove_index - 1, 1);
    
}

// user input some invalid value.
// Output will prompt the user that they need to provide a valid input. 
function invalidInput()
{
    document.getElementById("output").innerHTML = "Please refresh and select a valid command.";
}


