import React, { useState } from "react";
import "./App.css";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase/firebase.init";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoggleSignIn = () => {
    signInWithPopup(auth, googleProvider)
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

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        setUser(user)
    })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log("error :", error);
      });
  };
  // try to check git

  return (
    <div className="App">
      {user.uid ? (
        <button onClick={handleSingOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleGoggleSignIn}>Google Sign In</button>
          <button onClick={handleFacebookSignIn}>Facebook Sign In</button>
          <button onClick={handleGithubSignIn}>GitHub Sign In</button>
        </>
      )}
      {user.uid && (
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
