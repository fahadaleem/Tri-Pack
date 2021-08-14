import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Loader from "../../utils/Loader";
import Main from "./components/Main";
import Guest from "./components/Guest";
import EmployeForm from "./components/EmployeeForm";
import {Element} from "react-scroll"

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [formName, setFormName] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar loginBtnShow={true} />
          <Header />
          <Main handleSetFormName={setFormName} />
          {formName === "guest" && <Guest />}
          {formName === "employee" && <EmployeForm />}
        </div>
      )}
    </>
  );
};

export default Home;
