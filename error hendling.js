// Express.js માં Error Handling:
// Error handling એ એપ્લિકેશનમાં આવી રહેલી ત્રુટિઓ અને ભૂલોને યોગ્ય રીતે સંભાળવાનું પ્રોસેસ છે. Express.js માં, તમે કસ્ટમ error handlers લખી શકો છો અને રીક્વેસ્ટ-પ્રોસેસિંગ પાઇપલાઇનના અંતે તેની મદદથી ત્રુટિઓને મેનેજ કરી શકો છો.

// Express.js Error Handling
// Basic Error Handling:

// Express.js એ default error handling mechanism આપે છે, પરંતુ તમે કસ્ટમ error handlers પણ રચી શકો છો.
// Writing Error Handlers:

// Error-handling middleware ના દ્વારા તમે request/response cycle દરમિયાન ખોટી સ્થિતિઓને સંભાળી શકો છો.
// Steps to Write Error Handlers:
// Basic Error Handler:

// Express માં, error handler એક middleware છે, અને તેને app.use() સાથે ઉમેરવામાં આવે છે.
// Example:
// javascript
// Copy code
// const express = require('express');
// const app = express();

// // Example route that generates an error
// app.get('/', (req, res, next) => {
//   const error = new Error('Something went wrong!');
//   next(error);  // Passing the error to the error handler
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);  // Log the error
//   res.status(500).send('Something broke!');  // Send a response to the client
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });
// Error Handler with Status Code:

// તમે error handlersને status code સાથે પ્રિસેટ કરી શકો છો.
// Example:
// javascript
// Copy code
// app.use((err, req, res, next) => {
//   if (err.status) {
//     res.status(err.status).send(err.message);
//   } else {
//     res.status(500).send('Internal Server Error');
//   }
// });
// Custom Error Handler:

// તમે કસ્ટમ error classes બનાવી શકો છો અને તેનો ઉપયોગ error handling માટે કરી શકો છો.
// Example:
// javascript
// Copy code
// class NotFoundError extends Error {
//   constructor(message) {
//     super(message);
//     this.status = 404;
//   }
// }
 
// // Use custom error
// app.get('/user', (req, res, next) => {
//   const user = null;  // Simulating no user found
//   if (!user) {
//     return next(new NotFoundError('User not found'));
//   }
//   res.send(user);
// });
// Express.js Error Handling Workflow:
// Route Handlers: First, Express attempts to process the request through route handlers.
// Error Handler: If there’s an error, it passes to the error-handling middleware.
// Response: The error handler sends an appropriate response to the client, based on the error type and status.
// Conclusion:
// Express.js માં error handling માટે ખાસ app.use() error handling middleware લખવાનું મહત્વપૂર્ણ છે. જ્યારે પણ એપ્રલિકેશનમાં કોઈ ખોટ આવી જાય, તે next() ફંક્શન સાથે error ને error handler સુધી પહોંચાડી શકે છે, અને પછી તે ગ્રાહકને યોગ્ય જવાબ મોકલે છે.

// આ રીતે, તમે એપ્રલિકેશનમાં આવી રહેલી ભૂલોને સારી રીતે સંભાળી શકો છો.