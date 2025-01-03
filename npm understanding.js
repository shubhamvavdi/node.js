// NPM (Node Package Manager) અને તેના ઉપયોગ વિશે વિગતવાર સમજાવું છું:

// NPM નો પૂર્ણ સ્વરૂપ:
// Node Package Manager
// 1. Appstore અને Playstore નું ઉદાહરણ
// Appstore (iOS) અને Playstore (Android) એ એપ્રલિકેશન્સ માટે પેકેજ મૅનેજર્સ જેવા છે, જેમ કે NPM એ Node.js માટે પેકેજ મૅનેજર છે. અહીં, તમે એપ્લિકેશન્સ અથવા પેકેજો ડાઉનલોડ અને ઇન્સ્ટોલ કરી શકો છો.



// 2. React, Angular જેવા પેકેજો મેળવવા માટે NPM ઉપયોગ કરવો
// તમે NPM થી React, Angular અને અન્ય ઘણા પેકેજો ઇન્સ્ટોલ કરી શકો છો.
// ઉદાહરણ:
// bash
// Copy code


// npm install react
// npm install angular

// 3. Module અને Package શું છે?
// Module: Node.js એના કાર્ય માટે વિભિન્ન modules પર આધાર રાખે છે, જેમ કે http, fs, વગેરે. Modules એ JavaScript ફાઈલ્સ છે જેમણે ખાસ કાર્યને અમલમાં મૂકવું હોય છે.
// Package: પેકેજ એ Node.js અથવા JavaScript લાઇબ્રેરીનું ગ્રુપ છે જે પેકેજ.json ફાઇલ દ્વારા મેનેજ થાય છે. પેકેજમાં dependencies, modules અને અન્ય નોડ પેકેજો હોઈ શકે છે.


// 4. Text to Speech Package Example (Accessibility Package)
// Accessibility માટે text-to-speech પેકેજ ઉપલબ્ધ છે.
// ઉદાહરણ:
// bash
// Copy code

// npm install text-to-speech-js

// આ પેકેજ વાઇઝ ટેક્સ્ટને સ્પીચમાં ફેરવવામાં મદદ કરે છે.

// 5. પેકેજ ઇન્સ્ટોલ, અનઇન્સ્ટોલ અને વર્ઝન-વિઝ પેકેજ મેનેજમેન્ટ
// Install (ઇન્સ્ટોલ કરવું):
// bash
// Copy code

// npm install packagename
// Uninstall (અનઇન્સ્ટોલ કરવું):
// bash
// Copy code

// npm uninstall packagename
// વર્સન વાઇઝ ઇન્સ્ટોલ:
// bash
// Copy code
// npm install packagename@version
// ઉદાહરણ: npm install react@16.8.0


// 6. Node_modules શું છે?
// node_modules એ તમારા પ્રોજેક્ટ માટે ઇન્સ્ટોલ કરેલા બધાં પેકેજો અને તેમના dependencies ને સાચવતો ફોલ્ડર છે.
// જ્યારે તમે એક પેકેજ (જેમ કે express) ઇન્સ્ટોલ કરો છો, ત્યારે એ પેકેજ અને તેના dependency પેકેજો node_modules ફોલ્ડરમાં સંગ્રહિત થાય છે.

// 7. NPM - Package Install/Uninstall
// NPMનો મુખ્ય ઉદ્દેશ છે પેકેજોને સરળતાથી ઇન્સ્ટોલ અને અનઇન્સ્ટોલ કરવું.


// 8. Dependencies અને Dev Dependencies
// Dependencies: પેકેજ જે અન્ય પેકેજો પર આધાર રાખે છે (જેમ કે express).
// Dev Dependencies: આ પેકેજો ફક્ત ડેવલોપમેન્ટમાં ઉપયોગ થાય છે, પ્રોડક્શનમાં નહીં. ઉદાહરણ: Visual Studio માટે થેમ (જ્યારે તમને development સમયે જ ઉપયોગ કરવો હોય).


// 9. Scripts અને કેવી રીતે ચલાવવું
// NPM સ્ક્રિપ્ટ્સનો ઉપયોગ તમારા પ્રોજેક્ટ માટે કસ્ટમ કમાન્ડસ બનાવવા માટે થાય છે.
// npm run start: આ કમાન્ડ એ એપ્રલિકેશનને શરૂ કરે છે, અને start સ્ક્રિપ્ટ package.json માં ડિફાઈન્ડ હોય છે.
// npm run dev: આ કમાન્ડ ડેવલોપમેન્ટ સર્વર શરૂ કરવા માટે ઉપયોગ થાય છે.
// Custom Scripts: તમે તમારી જરૂરિયાત અનુસાર કસ્ટમ સ્ક્રિપ્ટ્સ બનાવી શકો છો.
// ઉદાહરણ:
// json
// Copy code
// "scripts": {
//   "start": "node app.js",
//   "dev": "vite"
// }
// આના દ્વારા, તમે npm run start અને npm run dev ચલાવી શકો છો.


// 10. કસ્ટમ સ્ક્રિપ્ટ બનાવવું
// તમે કસ્ટમ સ્ક્રિપ્ટ બનાવી શકો છો, જે નોડ સર્વર અને રિએક્ટ સર્વર બંનેને એકસાથે ચલાવે.
// ઉદાહરણ (કસ્ટમ સ્ક્રિપ્ટ માટે):
// json
// Copy code
// "scripts": {
//   "start": "concurrently \"npm run server\" \"npm run client\"",
//   "server": "node server.js",
//   "client": "react-scripts start"
// }
// આ રીતે, NPM પેકેજ મૅનેજરને પ્રોજેક્ટમાં પેકેજોને મેનેજ કરવા માટે ઉપયોગ કરવો સરળ અને લચીલુ બની જાય છે.