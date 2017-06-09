#IPO
I - A number data type
P - Conditional if else statements
O - String of user responses

#The known
 #Whats available to us
- an array of user guesses that hold a key value
- In the array, the user guesses are in a string data type
- We have access to the prototype methods on the array
- We know that the state is an object console.log(typeof(this.state.guessesTaken))

#What do we need to return
- We need to return is a user game status response
- A message on duplicate entries
- A winning message

#Initial setup
- [ ] We need to set up a new property in the state that generates a random number
- [ ] We need to set up our variables
  - [ ] const for random generated number
  - [ ] const for the number that was guessed
  - [ ] const for guesses taken so we can compare it to duplicate entries
  - [ ] const for all the winning messages
- [ ] Form validation for entries that are not numbers
- [ ] Return something

#Kindergarten steps
1. [ ] Eli would go over the initial steps and execute on those first
2. [ ] Eli would first test the user input and make sure we are receiving it via console.log and convert alpha to number
3.  [ ]Eli would test the newly random generated number to make sure it has been implemented correctly
4.  [ ]Eli would do a spike test to run the newly generate number vs the number guessed and get a response out of it
5.  [ ]Eli would do another spike test to check for duplicate numbers being inserted and returning a response
6.  [ ]Eli needs to figure out how to calculate the difference between the number and the randomly generated number
  - [ ] create a const of different
  - [ ] take the guessed number and subtract is with the randomly generated number
  - [ ] store that in a const and used it as your base comparison number in the conditionals
  - [ ] run a spike test on codepen to be sure logic is correct
7. [ ] Stub out the conditional statements
  - [ ]if currentGuess === this.state.guessesTaken[value] return sorry duplicate number
  - [ ]if currentGuess === NaN setState to new message
  - [ ]if currentGuess === randomNumber return You win
  - [ ]if difference <= 10 setState 'fucking hot'
  - [ ]if difference <= 25 setState 'kind of hot'
  - [ ]if difference <= 35 setState 'kind of warm'
  - [ ]if difference <= 40 setState 'cooling off'
  - [ ]if difference <= 50 setState 'kind of cool'
  - [ ]if difference <= 65 setState 'cold'
  - [ ]if difference <= 80 setState 'ice ice baby'
