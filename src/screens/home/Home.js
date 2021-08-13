import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Loader from "../../utils/Loader"
import Main from "./components/Main";
import Guest from "./components/Guest"

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [formName, setFormName] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
    {loading?(<Loader />): 
    <div>
      <Navbar />
      <Header />
      <Main handleSetFormName={setFormName}/>
      {formName==="guest"&&<Guest />}
    </div>
    }
    </>
   );
}
 
export default Home;