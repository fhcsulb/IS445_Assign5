const message = prompt('Choose an Option \n1. Show Messages'+ 
                    '\n2.Add a Message \n3.Delete a message \n0. Quit');

let message_list = ['message 01','message 02','message03','message04','message 05'];

// alert('Your input is: ' + message)

// const output = document.getElementById("output")
// output.innerHTML = 'Your message is ' + message

function determineOutput()
{
    switch (message)
    {   
        case '0':
            quit();
            break;

        case '1':
            showMessages();
            break;

        case '2':
            addMessage();
            showMessages();
            break;

        case '3':
            deleteMessage();
            showMessages();
            break;

        default: 
            invalidInput();





    } 
}



function quit ()
{
    document.getElementById("output").innerHTML = "Good Bye!";
}

function showMessages()
{
    let result = " ";
    
    for(i = 0; i < message_list.length; i++)
    {
        result+=`${i+1}. `+message_list[i]+'<br />';
    }
    
    document.getElementById("output").innerHTML = result;

}

function addMessage()
{
    let new_message = prompt('Enter a new message: ');
    message_list.push(new_message);
}

function deleteMessage()
{
    let remove_index;

   
    remove_index = prompt('Enter the message index between 1'+' - '+`${message_list.length}`);
            
    while((remove_index > 5 ) || (remove_index < 1)  )
    {
        remove_index = prompt('Invalid input. Enter the message index between 1'+' - '+`${message_list.length}`);
    }
    
    //first parameter in splice is the index to remove.
    message_list.splice(remove_index - 1, 1);

   
    
}


function invalidInput()
{
    document.getElementById("output").innerHTML = "Please refresh and select a valid command.";
}


