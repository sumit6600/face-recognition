
import './App.css'
import {useEffect} from "react";
function App() {

  let faceio;
  useEffect(() => {
    faceio = new faceIO("fioa093f");
  }, []);

   const handleSignIn = async () => {
     try {
       let response = await faceio.enroll({
         locale: "auto",
         payload: {
           email: "example@gmail.com",
           pin: "12345",
         },
       });

       console.log(` Unique Facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}`);
     } catch (error) {
       console.log(error);
     }
   };

   const handleLogIn = async () => {
     try {
       let response = await faceio.authenticate({
         locale: "auto",
       });

       console.log(` Unique Facial ID: ${response.facialId}
          PayLoad: ${response.payload}
          `);
     } catch (error) {
       console.log(error);
     }
   };
  return (
    <section>
      <h1 className='h'>Face Authentication by Facial Expression</h1>
      <button className='b1' onClick={handleSignIn}>Sign-in</button>
      <button className='b2' onClick={handleLogIn}>Log-in</button>
    </section>
  );
}

export default App
