// Express.js માં Routes વિશે:
// Routes એ HTTP વિનંતીઓ માટે નિયત પાથ અને કોડના ભાગો છે. Routes એ HTTP વપરાશકર્તાની વિનંતી (જેમ કે GET, POST) અને તેના સંકળાયેલા હેન્ડલર ફંક્શન વચ્ચેનો સંકేతક છે. Routes એ જણાવે છે કે જ્યારે ચોક્કસ URL પાથ પર વિનંતી આવે ત્યારે કયો કોડ ચાલે.

// 1. Express Install
// Express.js પ્રોજેક્ટમાં ઇન્સ્ટોલ કરવા માટે:
// bash
// Copy code
// npm install express


// 2. GET Method (Route Example)
// GET મેડથોડ એ સર્વર પરનો ડેટા મેળવવા માટેનો HTTP મેડથોડ છે. Express.js માં, તમે get મેડથોડનો ઉપયોગ કરીને routes ડિફાઇન કરી શકો છો.
// ઉદાહરણ:
// javascript
// Copy code
// const express = require('express');
// const app = express();

// // GET route
// app.get('/', (req, res) => {
//   res.send('હેલો, દુનિયા!');
// });

// app.listen(3000, () => {
//   console.log('સર્વર 3000 પોર્ટ પર ચાલી રહ્યો છે');
// });


// 3. Changes not applied because server not restart (nodemon):
// nodemon એ એવી ટૂલ છે જે એપ્રલિકેશનની ફાઈલો અને કોડમાં થતા બદલાવને ટ્રેક કરે છે અને આપમેળે સર્વર રિસ્ટાર્ટ કરે છે.
// nodemon ઇન્સ્ટોલ:
// bash
// Copy code
// npm install nodemon -g
// આ કમાન્ડ કાર્ય કરતી નથી તો npx નો ઉપયોગ કરો:
// bash
// Copy code
// npx nodemon filename.js


// 4. Run using nodemon filename.js
// nodemonનો ઉપયોગ સર્વરને રિફ્રેશ કરવા માટે થાય છે, જેથી જ્યારે તમે કોડમાં ફેરફાર કરો, ત્યારે સર્વર ફરીથી ચાલુ થઈ જાય.


// 5. Error Solution for nodemon (Set-ExecutionPolicy Unrestrict)
// ક્યારેક Windows પર nodemonનો ઉપયોગ કરતાエએ ખોટી Permission એરેર્સ આવે છે.
// Sol: આ ખોટી સેટિંગ્સને ઠીક કરવા માટે આ કમાન્ડ ચલાવશો:
// bash
// Copy code
// Set-ExecutionPolicy Unrestricted -Scope CurrentUser
// આ કમાન્ડ તમારી પાવરશેલ એપ્રમિશન્સને યોગ્ય રીતે સેટ કરી આપશે.


// 6. Video Link (Solution):
// વધુ માટે આ YouTube Video જોઈ શકો છો, જ્યાં તે nodemon થી સંબંધિત સામાન્ય ત્રુટિઓ અને ઉકેલ આપતો છે.
// આ રીતે, nodemon અને routesનો ઉપયોગ તમારી Express.js એપ્રલિકેશનને કાર્યક્ષમ અને સરળ બનાવે છે.