// every error handle threw exception handling...

// An exception is created using throw keyword.

// in nodeJs we don't throw strings, We throw error objects.


// throw new Error('Fix this error')

// we can also handle error using try and catch method...
/* try {
    // lines of code
    console.log('Inside try block');
    // not defined variable...
    number;
    console.log('after undefine variable');
} catch (e) {
    console.log('Error in catch');
    console.log(e);
} */

// we can also handle error using promises...
/* 
doSomething()
    .then(() => {
        return doSomething2().catch(err => {
            // Handle error
            throw err   // break the chain!
        })
    }).then(() => {
        return doSomething2().catch(err => {
            // Handle error
            throw err // break the chain!
        })
    }).catch(err => console.log(err))
 */


// error handling using async and await...
/* async function SomeFunction() {
    try {
        await someOtherFunction()
    } catch (err) {
        console.error(err.message);
    }
} */