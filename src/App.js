import React, { useState } from "react";
import "./App.css";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase/firebase.init";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const handleGoggleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  };

  const handleSingOut = () => {
    signOut(auth)
      .then(() => setUser({}))
      .catch(() => setUser({}));
  };

  return (
    <div className="App">
      {user.email ? (
        <button onClick={handleSingOut}>Sign Out</button>
      ) : (
        <button onClick={handleGoggleSignIn}>Google Sign In</button>
      )}
      {user.email && (
        <div>
          <h3>User Name : {user.displayName}</h3>
          <p>Email address : {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
