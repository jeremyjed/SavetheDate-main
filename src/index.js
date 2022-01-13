	// Import the functions you need from the SDKs you need
    import { initializeApp } from 'firebase/app';
    import { getDatabase, ref, push, set } from "firebase/database";
    //import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyARgmrL50atb8xtgB7dpjJGFEFHQRkHrfo",
      authDomain: "savethedate-8d312.firebaseapp.com",
      databaseURL: "https://savethedate-8d312-default-rtdb.firebaseio.com",
      projectId: "savethedate-8d312",
      storageBucket: "savethedate-8d312.appspot.com",
      messagingSenderId: "689293278054",
      appId: "1:689293278054:web:9b38580c020fcac4baa6a7",
      measurementId: "G-PZZLFRV52X"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app)
    //const db = getFirestore(firebaseApp);
    //const analytics = getAnalytics(app);

    window.writeUserData=function(address) {
      push(ref(db), {
        address
      });
    }