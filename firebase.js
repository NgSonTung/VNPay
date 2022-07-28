import firebase from "firebase/compat/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";
import "firebase/compat/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCz6pMb0nkWB9dERRa81q2hcvI7twAjUCI",
  authDomain: "vnpay-f8e74.firebaseapp.com",
  projectId: "vnpay-f8e74",
  storageBucket: "vnpay-f8e74.appspot.com",
  messagingSenderId: "703623680842",
  appId: "1:703623680842:web:2ca1d2ed3db1fd130867b3",
  measurementId: "G-R78RSM6QSR",
  databaseURL:
    "https://vnpay-f8e74-default-rtdb.asia-southeast1.firebasedatabase.app",
};
// Initialize Firebase

let app;
export function initDB() {
  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
    console.log("da ket noi CSDL");
  } else {
    app = firebase.app();
  }
}

export function updateBalance(user, newBalance, data) {
  const db = getDatabase();
  return new Promise((resolve, reject) => {
    set(ref(db, "users/" + user), {
      Password: data.password,
      Number: data.number,
      Balance: newBalance,
      Name: data.name,
    });
  });
}

export function getData() {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref("users")
      .on("value", (snapshot) => {
        const array = [];
        snapshot.forEach(function (child) {
          var user = child.val();
          array.push({
            id: child.key,
            password: user.Password,
            number: user.Number,
            balance: user.Balance,
            name: user.Name,
          });
        });
        console.log(array);
        resolve(array);
        reject([]);
      });
  });
}
