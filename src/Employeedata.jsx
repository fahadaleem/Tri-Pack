import Axios from 'axios'
import { useState } from 'react'
import LoginCard from './LoginCard'

const Employeedata = () => {

    const [employeeList, setEmployeeList] = useState([])

    Axios.get('http://localhost:3001/employeedata').then((response)=>{
        setEmployeeList(response.data)
    })

    return(
        <>
        <LoginCard />
        {employeeList.map((val,key)=>{
            return(
            <div className="data">
                <div className="id">{val.id}</div>
                <div className="gname">{val.name}</div>
                <div className="gemail">{val.email}</div>
            </div>
            )
        })}
        </>
    )
}

export default Employeedata;