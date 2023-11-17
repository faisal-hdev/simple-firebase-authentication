/*
                Initial setup
    ============== Steps =============
    1. visit console.firebase.goggle.com
    2. Create a new firebase project 
    3. visit docs (go to docs) : Build a authentication > web > Getting started
    4. Register web app > fire base project home > click web > give name and register 
    5. Install firebase for your project: npm install firebase
    6. Dangerous: get firebase config and put it in firebase.init.js
    7. export app from firebase.init.js
    ========== Setup provider ==========
    8. create auth using getAuth from firebase by using app form firebase.init.js 
    9. create a google auth provider. do not forget use new GoogleAuthProvider()
    10. go to firebase > build > Authentication > Sign in method
    11. Enable goggle sign in method 
    12. create a button for goggle sign in method with a click handler
    13. inside the event handler, call signInWithPopUp with auth, provider 
    14. after signInWithPopUp .then result , error 
    ========== Display user data ==========


    ========== Add a new sign in method ==========
    1. enable the sign in method 
    2. create github, twitter, facebook, etc. app create 
    3. get clientId and secret
*/
