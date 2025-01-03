// Middleware વિશે:
// Middleware એ એપ્રલિકેશનના રિક્વેસ્ટ-પ્રોસેસિંગ પાઇપલાઇનનો એક મહત્વપૂર્ણ હિસ્સો છે. Middleware ફંક્શન્સ એ સર્વર પર આ રિક્વેસ્ટને પ્રાપ્ત કરે છે, પ્રોસેસ કરે છે, અને જવાબ આપે છે. Middleware નમ્ર રીતે માન્યતા આપે છે, લોગિંગ, સેટિંગ હેડર્સ, અથવા ઉપયોગકર્તાની ઓળખ ચકાસવા જેવા કાર્યો કરે છે.


// 1. Middleware શું છે?
// Middleware એ તે ફંક્શન છે જે રિક્વેસ્ટ અને રિસ્પોન્સ વાવલતાની વચ્ચે ચાલે છે.
// ઉદાહરણ:
// Facebook Post Request (Middleware for User Information): જ્યારે યુઝર ફેસબુક પર પોસ્ટ મોકલે છે, ત્યારે Middleware એ તેની ઓળખ તપાસી શકે છે, જેથી યોગ્ય routes અને responses વિધિમાં પ્રોસેસ થાય.
// Flow:
// Fb Post Request → Middleware (User Information) → Routes → Server
// Server Response → Routes → Middleware (User Information) → Show Response


// 2. Middleware નો ઉપયોગ કેમ કરવો?
// Middleware નો ઉપયોગ એ માહિતી પ્રોસેસિંગ, યૂઝરનો ઓથેન્ટિકેશન, અથવા કસ્ટમ રિક્વેસ્ટ હેન્ડલિંગ માટે થાય છે.
// app.use(): Middleware એપ્લિકેશન લેગિગલી યૂઝ કરવાની પદ્ધતિ છે.


// 3. Next Middleware Function નો ઉપયોગ
// next() ફંક્શનનો ઉપયોગ કિસ્સામાં કરવો પડે છે જયારે તમે એક Middleware ફંક્શન પૂરેપૂરું એન્ડ કરવાની તૈયારી રાખી રહ્યા છો અને પ્રોસેસને પછીના Middleware ફંક્શન તરફ મોકલવો હોય છે.
// Example:
// javascript
// Copy code
// const express = require('express');
// const app = express();

// // Middleware to log user info
// app.use((req, res, next) => {
//   console.log('User Information:', req.headers['user-info']);
//   next();  // Allow the request to proceed to the next middleware
// });

// app.get('/', (req, res) => {
//   res.send('Page Loaded!');
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });


// 4. Page Not Reloading - Loading Only
// Middleware નો ઉપયોગ પેજ લોડ કર્યા વગર માત્ર લોડિંગ કરવા માટે કરવામાં આવે છે. For example, API calls or data fetching can happen through middleware without reloading the page.


// 5. Why Use next()?
// next() નું ઉપયોગ એ માટે છે કે જ્યારે તમે એક Middleware વિધિથી પ્રોસેસ પૂર્ણ કરી લો છો અને રિક્વેસ્ટને બીજું Middleware અથવા Route Handler તરફ મોકલવા માંગો છો.
// Multiple Middleware Functions: તમે એકથી વધુ Middleware functions બનાવી શકો છો.
// Example:
// javascript
// Copy code
// app.use((req, res, next) => {
//   console.log('First Middleware');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('Second Middleware');
//   next();
// });
// Middleware નો ઉપયોગ Route-level, Application-level, અને Error-handling માટે કરી શકાય છે. Middleware એક્સપ્રેસ એપ્રલિકેશન્સને પાવરફૂલ અને વધુ મલ્ટિફંક્શન બનાવે છે.

// Request & Response Handling - Frontend અને Backend વચ્ચે:
// Frontend (URL) -> Backend (Server Work) -> Frontend (Show Design)

// Frontend (જેમ કે બ્રાઉઝર) એ વેબપેજનો હિસ્સો છે જે વપરાશકર્તાને દેખાય છે, અને તેનો URL એ તેના લોકેશનને દર્શાવે છે.
// Backend (સર્વર) એ આ URL પર આવેલી રિક્વેસ્ટને પ્રોસેસ કરે છે. સર્વર કામ કરે છે (જેમ કે ડેટાબેસ સાથે વાતચીત, રિસ્પોન્સ તૈયાર કરવું, વગેરે) અને પછી Frontend પર બતાવવાના માટે ડિઝાઇન અને ડેટા મોકલે છે.
// Request & Response Flow:
// Frontend (URL):

// વપરાશકર્તા બ્રાઉઝર માં URL માં મંગાવેલા પાનું અથવા API કે ડેટાને લોડ કરે છે.
// Backend (Server Work):

// સર્વર તે URL પર આવી રિક્વેસ્ટને ઓળખે છે.
// સર્વર પછી આ રિક્વેસ્ટ પર આધારિત ડેટા, ડિઝાઇન અથવા અન્ય કાર્યો પર કામ કરે છે.
// અહીં, Middleware, Controller, અને Routes રિક્વેસ્ટને પ્રોસેસ કરે છે.
// Frontend (Show Design):

// Backend દ્વારા મોકલવામાં આવેલ જવાબ (જેમાં HTML, CSS, JSON ડેટા વગેરે હોઈ શકે છે) ને Frontend (એપ્લિકેશન, વેબ પેજ, API) પર પ્રદર્શિત કરે છે.
// Example:
// Frontend (Request):

// વપરાશકર્તા URL ને બ્રાઉઝરમાં દાખલ કરે છે: http://example.com/products
// Backend (Processing):

// સર્વર URL પર આવી રિક્વેસ્ટને માને છે અને રિક્વેસ્ટને પ્રોસેસ કરવા માટે તે તેની ડેટાબેસ અથવા અન્ય સ્ત્રોતોને ચકાસે છે.
// માનો કે સર્વર પ્રોડક્ટની માહિતી ડેટાબેસમાંથી લાવે છે.
// Frontend (Response):

// સર્વર પ્રોડક્ટ માહિતી સાથેનો જવાબ આપે છે, જેમ કે JSON ફોર્મેટમાં: [{product1}, {product2}, {product3}]
// પછી, Frontend આ ડેટાને પેજ પર પ્રદર્શિત કરે છે, જેમ કે HTML ટેબલ કે લિસ્ટ.
// આ રીતે, Frontend અને Backend વચ્ચેની Request & Response હેન્ડલિંગ પ્રક્રિયા એ સોફ્ટવેર વિકાસમાં મહત્વપૂર્ણ છે, જેમાં વપરાશકર્તાની વિનંતી પર સર્વરનો યોગ્ય પ્રતિસાદ પરત આપે છે.