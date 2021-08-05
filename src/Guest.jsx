import React, { Component } from 'react'
import Axios from 'axios';

export default class Guest extends Component{

    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeCNIC = this.onChangeCNIC.bind(this);
        this.onChangeHost = this.onChangeHost.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onChangeFrom = this.onChangeFrom.bind(this);
        this.onChangeTo = this.onChangeTo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            name:"",
            country:"",
            email:"",
            CNIC:"",
            host:"",
            message:"",
            from:"",
            to:"",
            hostList:[]
        }

    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    };
    onChangeCountry(e){
        this.setState({
            country: e.target.value
        })
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    };
    onChangeCNIC(e) {
        this.setState({
            CNIC: e.target.value
        })
    };
    onChangeHost(e) {
        this.setState({
            host: e.target.value
        })
    };
    onChangeMessage(e) {
        this.setState({
            message: e.target.value
        })
    };
    onChangeFrom(e) {
        this.setState({
            from: e.target.value
        })
    };
    onChangeTo(e) {
        this.setState({
            to: e.target.value
        })
    };

    

    onSubmit(e){
        e.preventDefault();
        const NAME = this.state.name;
        const EMAIL = this.state.email;
        const COUNTRY = this.state.country;
        const CNIC = this.state.CNIC;
        const HOST = this.state.host;
        const MESSAGE = this.state.message;
        const FROM = this.state.from;
        const TO = this.state.to;

        if(COUNTRY === "pakistan"){
            console.log('yes')
        }
        else if(COUNTRY === "Pakistan"){
            console.log('yes')
        }
        else if(COUNTRY === "Pak"){
            console.log('yes')
        }
        else if(COUNTRY === "pak"){
            console.log('yes')
        }
        else if(COUNTRY === ""){
            console.log('No Country Entered')
        }
        else{
            Axios.post('http://localhost:3001/api/mail',{
                NAME: NAME,
                EMAIL: EMAIL,
                CNIC: CNIC,
                HOST: HOST,
                MESSAGE: MESSAGE,
                FROM: FROM,
                TO: TO
            })
        }

        Axios.post('http://localhost:3001/api/insert',{
                NAME: NAME,
                EMAIL: EMAIL,
                CNIC: CNIC,
                HOST: HOST,
                MESSAGE: MESSAGE,
                FROM: FROM,
                TO: TO
            }).then((response)=>{
                this.setState({
                    hostList: response.data
                })
                const hostList=this.state.hostList;
                hostList.map((val,key)=>{
                    // console.log(val.email);
                    const emailing = val.email
                    if(emailing!==""){
                        Axios.post('http://localhost:3001/api/emailToHost',{
                            NAME: NAME,
                            EMAIL: EMAIL,
                            CNIC: CNIC,
                            HOST: HOST,
                            MESSAGE: MESSAGE,
                            EMAILING: emailing
                            })
                    }
                    else{
                        console.log("The host name you entered is not in the list")
                    }
                    })
                })
        
        this.setState({
            name: "",
            country:"",
            email:"",
            host:"",
            CNIC:"",
            message:"",
            from:"",
            to:""
        })    
        alert("Submitted Successfull")

        
    }
    

    render() {
        return(
            <>
            <form onSubmit={this.onSubmit} ref="form">
                <div className="boxguest">
                    <h1>Enter Your Details</h1>
                    <input style={{textTransform: "capitalize"}} placeholder="Your Name" type="text" value={this.state.name} onChange={this.onChangeName} required/>
                    <input placeholder="Your Country" type="text" value={this.state.country} onChange={this.onChangeCountry} />
                    <input placeholder="Your Email Address" type="email" value={this.state.email} onChange={this.onChangeEmail} />
                    <input placeholder="CNIC" type="text" value={this.state.CNIC} onChange={this.onChangeCNIC} required/>
                    <input placeholder="Host Name" type="text"  value={this.state.host} onChange={this.onChangeHost} />
                    <input placeholder="Message" type="text" value={this.state.message} onChange={this.onChangeMessage} />
                    <li>Duration of stay</li>
                    <input placeholder="From" type="date" value={this.state.from} onChange={this.onChangeFrom} />
                    <input placeholder="to" type="date" value={this.state.to} onChange={this.onChangeTo} />
                    <button>Submit</button>
                </div>
            </form>
            </>
        )
    }
}

