import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Loader from "../../utils/Loader"
import Main from "./components/Main";

const Home = () => {
  const [loading, setLoading] = useState(true);

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
      <Main />
    </div>
    }
    </>
   );
}
 
export default Home;