import React from 'react';
import Web3 from 'web3';
import './App.css';


class App extends React.Component{
componentWillMount()
{
  this.loadblockchaindata();
}

async loadblockchaindata(){
const web3= new Web3(Web3.givenProvider || "http://localhost:8545")
const network = await web3.eth.net.getNetworkType()
const account=await web3.eth.getAccounts()
console.log("network:",network)
console.log("Account:",account[0])
this.setState({account:account[0]})
}


constructor(props){
  super(props)
  this.state={account:''}
}

render(){
  return (
    <div className="Container">
      <h1>
        Hello, User.!!
      </h1>

      <h3>with love-- Subhadeep</h3>
     

     <p>
       Your account :{this.state.account}
     </p>
    </div>
  );
}}

export default App;
