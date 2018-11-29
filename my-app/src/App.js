import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    select:[],
    result:"",
    show:true,
    date:[1,2,4,8,16]
  }
  toggle=()=>{
    this.check()
    if(this.state.show === true){
      this.setState({show:false})
    }
    else{
      this.setState({show:true})
    }
  }
  check=()=>{
    let sum=0
    let array=[...this.state.select]
    for(let i=0;i<array.length;i++){
      sum+=this.state.date[parseInt(Object.keys(array[i]))]
    }
    this.setState({result:sum})
  }

  handleChange=(e)=>{
  let obj={},flag=0
  console.log("entered state",this.state.select)
  let name=e.target.name
  obj[e.target.name]=e.target.value
  for(let i=0;i<this.state.select.length;i++){
    console.log("inside if",name,Object.keys(this.state.select[i])[0])
    if(Object.keys(this.state.select[i])[0] === name){
      flag=1;
      this.state.select.splice(i,1)
      break;
    }
  }
    if(flag === 0){
      this.state.select.push(obj)
    }
  console.log("exited state",this.state.select)

  }
  render() {
    return (
      <div id="head-border" style={{backgroundColor:"#d47fff"}}>
        <div  class="container">
          <center><br/><img src={logo} className="App-logo" alt="logo" height="100" width="100"/></center>
          <center><b><h1 className="head">Magic Birthday Cards</h1></b></center><br/>
        </div>
        {this.state.show === true ?
        (<div id="body-border">
        <center>
          <h1>Select every card that contains your birthday</h1>
          
          <img src="img/1.jpg" class="img-responsive"/><input type="checkbox" name="0" className="check" onClick={this.handleChange}/><br/><br/>
          <img src="img/4.jpg" class="img-responsive"/><input type="checkbox" name="3" className="check" onClick={this.handleChange}/><br/><br/>
          <img src="img/3.jpg" class="img-responsive"/><input type="checkbox" name="2" className="check" onClick={this.handleChange}/><br/><br/>
          <img src="img/2.jpg" class="img-responsive"/><input type="checkbox" name="1" className="check" onClick={this.handleChange}/><br/><br/>
          <img src="img/5.jpg" class="img-responsive"/><input type="checkbox" name="4" className="check" onClick={this.handleChange}/><br/><br/>
        <br/>
        <button class="btn btn-danger btn-md" id="button" onClick={this.toggle}>Check</button>
        
        </center>
        </div>):
        (
          <div id="body2-border">
          <center>
            <br/><br/>
            <a href="/"><b><h3>Play Again</h3></b></a><br/>
            <h3><label for className="bottom">Your date of birthday is {this.state.result}</label></h3>
          </center>
        </div>)}
      </div>
    );
  }
}

export default App;
