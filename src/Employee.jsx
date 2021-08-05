import React, { Component } from 'react'
import axios from 'axios';

export default class Employee extends Component{
    constructor(props){
        super(props);
        this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
        this.onChangeEmployeeEmail = this.onChangeEmployeeEmail.bind(this);
        this.onSubmit2 = this.onSubmit2.bind(this);

        this.state={
            employeeName:"",
            employeeEmail:""
        }
    }
    onChangeEmployeeName(e){
        this.setState({
            employeeName: e.target.value
        })
    }
    onChangeEmployeeEmail(e){
        this.setState({
            employeeEmail : e.target.value
        })
    }  
    

    onSubmit2(e){
        e.preventDefault();
        const NAME = this.state.employeeName;
        const EMAIL = this.state.employeeEmail;
        axios.post('http://localhost:3001/api/insert2',{
            NAME: NAME,
            EMAIL: EMAIL,
        })
        this.setState({
            employeeName:"",
            employeeEmail:"",
        })
        alert("Submitted Successfull")
    }


        render(){
            return(
                <>
                    <form onSubmit={this.onSubmit2}>
                        <div className="boxguest">
                            <h1>Enter Your Details</h1>
                            <input placeholder="Host Name" type="text" value={this.state.employeeName} onChange={this.onChangeEmployeeName}/>
                            <input placeholder="Your Email Address" type="email" value={this.state.employeeEmail} onChange={this.onChangeEmployeeEmail} />
                            <button>Submit</button>
                        </div>
                    </form>
                </>
            )
        }
}
