import Axios from 'axios'
import { useState } from 'react'
import LoginCard from './LoginCard'

const Guestdata = () => {

    const [guestList, setGuestList] = useState([])

    Axios.get('http://localhost:3001/guestdata').then((response)=>{
        setGuestList(response.data)
    })

    return(
        <>
        <LoginCard />
        {guestList.map((val,key)=>{
            return(
                <div className="data">
                    <div className="id">{val.id}</div>
                    <div className="gname">{val.name}</div>
                    <div className="gemail">{val.email}</div>
                    <div className="gcnic">{val.CNIC}</div>
                    <div className="ghost">{val.host}</div>
                    <div className="gmessage">{val.message}</div>
                    <div className="gfrom">{val.from}</div>
                    <div className="gto">{val.to}</div>
                </div>
            )
        })}
        </>
    )
}

export default Guestdata;