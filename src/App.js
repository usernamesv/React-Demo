import React, { PureComponent, useState, useEffect, useMemo, createRef, useRef } from "react";
import "./App.css";
import "./style.css";
import style from "./custom.module.css";
import User from "./User";
import { Button, Alert, Table, NavItem } from "react-bootstrap";
import { Routes, Route, Link } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from "./About";
import PageNotFound from './PageNotFound'


function App(){
  const[count,setCount]= useState(1)

  function updateCounter(){
    // let random = Math.floor(Math.random()*10)
    // setCount((pre)=>{
    //   console.warn(pre)
    //     if(pre<5){
    //       alert("low value")
    //     }
    //   return random;
    // })
    for(let i=0; i<5; i++){
      setCount((pre)=>pre+1)
    }
  }
  return(
    <div className="App">
      <h2>Previous State</h2> <hr/>
      <h3>{count}</h3><br /><br />
      <button onClick={updateCounter}>Click Me to Update Counter</button>
    </div>
  )
}


  
export default App;



// function App(){
//   const[users,setUsers]= useState([])
//   useEffect(()=>{
//     getList()
//   },[])
//   console.warn(users)

//   function getList(){
//     fetch(" http://localhost:3000/users").then((result)=>{
//     result.json().then((resp)=>{
//       //console.warn("result",resp)
//       setUsers(resp)
//     })
//   })
//   }

//   function deleteUser(id){
//     fetch(`http://localhost:3000/users/${id}`,{
//       method:'DELETE'
//     } ).then((result)=>{
//         result.json().then((response)=>{
//             console.warn(response)
//             getList()
//         })
//     })
//   }
//   return(
//     <div className="App">
//       <h2>Delete Data with API Call</h2>
//       <table border ="1">
//         <tbody>
//           <tr>
//             <td>ID</td>
//             <td>FirstName</td>
//             <td>Lastname</td>
//             <td>Age</td>
//           </tr>
//           {
//             users.map((item,i)=>
//             <tr key = {i}>
//             <td>{item.id}</td>
//             <td>{item.firstName}</td>
//             <td>{item.lastName}</td>
//             <td>{item.age}</td>
//             <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
//           </tr>
//             )
//           }
//         </tbody>
//       </table>
//     </div>
//   )
// }






// function App(){
//   const[firstname,setFirstname] = useState(" ");
//   const[lastname,setLastname] = useState(" ");
//   const[age,setAge] = useState(" ");

//   function saveUser(){
//     console.warn({firstname,lastname,age})
//     let data = {firstname,lastname,age}
//       fetch("http://localhost:3000/users",{
//         method:'POST',
//           headers:{
//             'Accept': 'application/json',
//             'content-type': 'application/json'
//           }, 
//           body: JSON.stringify(data)
//       }).then((result)=>{
//         //console.warn("result",data)
//         result.json().then((response)=>{
//           console.warn("response", response)
//         })
//       })
//   }
//   return(
//     <div className="App">
//       <h2>POST API Example</h2><hr/><br/> 

//       <input type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)} firstname="firstname" placeholder="Enter Your First Name "/> <br/><br/>
//       <input type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} lastname="lastname" placeholder="Enter Your Last Name "/> <br/><br/>
//       <input type="text"  value={age} onChange={(e)=>setAge(e.target.value)} age="age" placeholder="Enter Your Age "/> <br/><br/>

//       <button type="button" onClick={saveUser}>Save User</button>
//     </div>

//   )
// }




// function App(){
//   useEffect(()=>{
//     fetch(" http://localhost:3000/users").then((result)=>{
//     result.json().then((resp)=>{
//       console.warn("result",resp)
//     })
//   })
//   },[])
//   return(
//     <div className="App">
//       <h2>Get API Call</h2>
//     </div>
//   )
// }





// function App(){

//   let users = [
//     { id:1, name:'Abhi', email:'abhi@test.com'},
//     { id:2, name:'kumar', email:'kumar@test.com'},
//     { id:3, name:'sam', email:'sam@test.com'},
//     { id:4, name:'Aira', email:'aira@test.com'},
//     { id:5, name:'Amy', email:'amy@test.com'}
//   ]

//   return(
//     <div className="App">
//       <h2>React Dynamic Routing</h2> <hr/>
//       {
//         users.map((item)=>
//         <div><Link to={'/users/' + item.id + '/' + item.name}><h3>{item.name}</h3></Link></div>)
//       }
//       <Routes>
//         <Route path ='/user/ :id/ :name' element ={<User />} />  
//        </Routes>
//     </div>
//   )
// }




// function App (){
//   return(
//   <div className="App">
  
//     <h1>Routing Setup</h1><hr />
//       <Nav />
    
//      <Routes>
//      <Route path ='/' element= {<Home />} />
//      <Route path ='/about' element= {<About />} />

//      <Route path ='*' element= {<PageNotFound />} />
     
//      </Routes>
   
//   </div>
//   )
// }





// function App (){
//   return(
//   <div className="App">
//     <Router>
//     <h1>Routing Setup</h1><hr />
//     <Link to ='/home'>Home </Link> <br/>
//     <Link to ='/about' >About</Link>
//      <Routes>
//      <Route path ='/home' element= {<Home />} />
//      <Route path ='/about' element= {<About />} />
//      </Routes>
//     </Router>
//   </div>
//   )
// }

// function Home(){
//   return(
//     <div>
//       <h2>Home Page</h2>
//       <p>This is Home Page of website</p>
//     </div>
//   )
// }

// function About(){
//   return(
//     <div>
//       <h2>About Page</h2>
//       <p>This is About Page of website</p>
//     </div>
//   )
// }
  



// function App(){
//   return(
//     <div className="App">
//       <h1>HOC</h1>
//       <HOCPurple component={Counter} />
//       <HOCRed component={Counter} />
//       <Counter />
//     </div>
//   )
// }

// function HOCPurple(props){            //this component work as wrapper 
//   return(
//     <h2 style={{backgroundColor:'purple',  }}>Purple<props.component /></h2>
//   )
// }
// function HOCRed(props){            //this component work as wrapper 
//   return(
//     <h2 style={{backgroundColor:'red',  }}>Red<props.component /></h2>
//   )
// }

// function Counter(){
//   const[count,setCount]=useState(0)
//   return(
//     <div>
//       <h3>{count}</h3>
//     <button onClick={()=>setCount(count+1)}>Update</button>
//     </div>
//   )
// }



// function App(){

//   function submitForm(e){
//     e.preventDefault()
//   }
//   return(
//     <div className="App">
//       <h1>Uncontrolled Component</h1> <hr/>
//       <form onSubmit={submitForm}>
//       <input type='text'/> <br /> <br />
//       <input type='text'/> <br /><br />
//       <button>Submit</button>
//       </form>
//     </div>
//   )
// }



// function App(){
//   let[val, setVal]=useState('000')
//   return(
//     <div className="App">
//       <h1>Controlled Component</h1><hr/>
//       <input type='text' value={val} onChange={(e)=>setVal(e.target.value)}/><hr/>
//       <h3>{val}</h3>
//     </div>
//   );

// }


// function App() {
//   let inputRef =useRef(null)
//   function handleInput(){
//     console.warn("function call")
//     inputRef.current.value ="100"
//     inputRef.current.style.color = "blue"
//   }

//     return(
//       <div className="App">
//         <h1 style={{color:'red'}}>useRef in React</h1>
//         <input type="text" placeholder="input text" ref ={inputRef}/>
//         <button onClick={handleInput}>Handle Input</button>
//       </div>
//     );
  
// }



// class App extends React.Component{
//   constructor(){
//     super();
//     this.inputRef= createRef();
//   }
//   componentDidMount(){
//     //console.warn(this.inputRef.current.value='1000')
//   }
//   getVal(){
//     console.warn(this.inputRef)
//     this.inputRef.current.style.color='green'
//   }
//   render(){
//     return(
//       <div className="App">
//         <h1 style={{color:'red'}}>Ref in React</h1>
//         <input type="text" placeholder="input text" ref={this.inputRef}/>
//         <button onClick={()=>this.getVal()}>Check Ref</button>
//       </div>
//     );
//   }
// }



// function App(){
//     const[count,setCount]=useState(0);
//   const[item,setItem]=useState(10);

//   const multiCountMemo = useMemo(
//     function multiCount(){
//       console.warn('check -rerendering')
//       return count*5
//     },[count]
//   )

//   return(
//     <div className="App">
//       <h1>useMemo Hook in React <hr /></h1><h2>Count: {count} <hr />Item: {item} <hr />memo: {multiCountMemo}</h2>
//       <button onClick={()=>setCount(count+1)}>Update Count</button>
//       <button onClick={()=>setItem(item+1)}>Update Item</button>
//     </div>
//   );
// }



// class App extends PureComponent{
//   constructor(){
//     super();
//     this.state={
//       count: 1
//     }
//   }
//   render(){
//     console.warn('check -rerendering')
//     return(
//       <div className="App">
//         <h1>Pure Component in React <hr /> {this.state.count}</h1>
//        <button onClick={()=>this.setState({count:this.state.count+1})}>Update Count</button>
//       </div>
//     )
//   }
// }




// function App(){

//   function parentAlert(data){   //fetch data from child
//     alert(data);
//   }
//   return(
//     <div className="App">
//       <h1>Lifting State up </h1>
//       <User alert={parentAlert}/>
//     </div>
//   );
// }



// function App(){
  
//     const users = [                                             //Reusable Component
//         {name: 'Abhi',email:'abhi@abc.com', contact: 111},
//         {name: 'Aira',email:'aira@abc.com', contact: 222},
//         {name: 'Amy',email:'amy@abc.com', contact: 111},
//         {name: 'Alex',email:'alex@abc.com', contact: 111}
//     ]
//     return(
//       <div className="App">
//         <h1>Reuse Component with List</h1>
       
//         <Table>
//             <tbody>
//         {
//             users.map((item,i)=>
            
//             <tr key={i}> 
//               <td>
//               <User data = {item}/>
//               </td>
//             </tr>
            
//             )
//         }
//         </tbody>
//             </Table>
//       </div>
//     )
// }




// function App() {
//   const students = [
//     //list with nested array of objects
//     {
//       name: "Abhi",
//       email: "abhi@abc.com",
//       address: [
//         { HNo: 10, city: "Noida", countary: "India" },
//         { HNo: 15, city: "Gurgaon", countary: "India" },
//         { HNo: 101, city: "Delhi", countary: "India" },
//       ],
//     },
//     {
//       name: "Aira",
//       email: "aira@abc.com",
//       address: [
//         { HNo: 10, city: "Noida", countary: "India" },
//         { HNo: 15, city: "Gurgaon", countary: "India" },
//         { HNo: 101, city: "Delhi", countary: "India" },
//       ],
//     },
//     {
//       name: "Amy",
//       email: "amy@abc.com",
//       address: [
//         { HNo: 10, city: "Noida", countary: "India" },
//         { HNo: 15, city: "Gurgaon", countary: "India" },
//         { HNo: 101, city: "Delhi", countary: "India" },
//       ],
//     },
//     {
//       name: "Alex",
//       email: "alex@abc.com",
//       address: [
//         { HNo: 10, city: "Noida", countary: "India" },
//         { HNo: 15, city: "Gurgaon", countary: "India" },
//         { HNo: 101, city: "Delhi", countary: "India" },
//       ],
//     },
//   ];

//   return (
//     <div className="App">
//       <h1>List with Nested Array</h1>
//       <Table>
//         <tbody>
//           <tr>
//             <td>SNo</td>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Address</td>
//           </tr>
//           {students.map((item, i) => (
//             <tr key={i}>
//               <td>{i + 1}</td>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>
//                 <Table>
//                   <tbody>
//                     {item.address.map((data, d) => (
//                       <tr key={d}>
//                         <td>{data.HNo}</td>
//                         <td>{data.city}</td>
//                         <td>{data.countary}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </Table>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// }

//  function App(){
//   //const students = ['Anil','Abhi', 'Aira','Amy','Anne', 'Alex']  //list with an array
//   const students = [                                             //list with an array of objects
//       {name: 'Abhi',email:'abhi@abc.com', contact: 111},
//       {name: 'Aira',email:'aira@abc.com', contact: 222},
//       {name: 'Amy',email:'amy@abc.com', contact: 111},
//       {name: 'Alex',email:'alex@abc.com', contact: 111}

//   ]
//   //map looping
//     return(
//     <div className= "App">
//         <h1>Handle array with list</h1>
//         <Table striped bordered hover>
//           <tbody>
//         <tr>
//           <td> Name</td>
//           <td>Email</td>
//           <td>Contact</td>
//         </tr>
//       {
//         students.map((data,i)=>
//         data.contact === 111 ?
//         <tr key={i}>
//           <td> {data.name}</td>
//           <td>{data.email}</td>
//           <td>{data.contact}</td>
//         </tr> : null

//   )
// }
// </tbody>
// </Table>
//     </div>
//   )
//  }

// function App(){

//   return(
//     <div className='App'>
//       <h1>Install Bootstrap</h1>
//       <Button onClick={()=>alert('Hello ABhi')}>Click Me</Button>

//   <Button variant="primary">Primary</Button>{' '}
//   <Button variant="secondary">Secondary</Button>{' '}
//   <Button variant="success">Success</Button>{' '}
//   <Button variant="warning">Warning</Button>{' '}
//   <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
//   <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
//   <Button variant="link">Link</Button>

// {
//   [
//     'primary',
//     'secondary',
//     'success',
//     'danger',
//     'warning',
//     'info',
//     'light',
//     'dark',
//   ].map((variant, idx) => (
//     <Alert key={idx} variant={variant}>
//       This is a {variant} alert—check it out!
//     </Alert>
//   ))
// }

//     </div>
//   )
// }

// function App(){

//   return(
//     <div className='App'>
//       <h1 className='primary'>Style in React type1</h1>
//       <h1 style={{color:'pink',backgroundColor:'green'}}>Style in React type2</h1>
//       <h1 className={style.success}>Style in React type3</h1>

//     </div>
//   )
// }



// function App() {

//   const [count,setCount] = useState(10)
//   const [data,setData] = useState(100)

//   return(
//     <div className='App'>

//       {/* <h1>Count: {count}</h1>
//       <h1>Data: {data}</h1> */}
//       <User count= {count} data= {data}/>
//       <button onClick={()=>setCount(count+1)}>Update Count</button> <br /> <br />
//       <button onClick={()=>setData(data+1)}>Update Data</button>
//     </div>
//   )
// }

// function App(){
//   const[data,setData] = useState('Hunny')

//   return(
//     <div className='App'>
//       <h1>{data}</h1>
//       <button onClick={()=>setData('abhishek')}>Update Data</button>
//     </div>
//   )
// }

// class App extends React.Component{
//   constructor()
//   {
//     super();
//     this.state={
//       show: true
//     }
//   }
//     render()
//     {
//       return(
//         <div className='App'>
//           {
//             this.state.show ? <User />: <h1>Child component removed</h1>
//           }

//           <button onClick={()=>this.setState({show:!this.state.show})}>Toggle Child Component</button>
//         </div>
//       )
//     }

//   }

//     console.warn('constructor')
//   }
//   componentDidMount(){
//     console.warn('componentDidMount')
//   }
//   componentDidUpdate(){
//     console.warn('componentDidUpdate')
//   }
//   shouldComponentUpdate()
//   {console.warn('shouldComponentUpdate', this.state.count);
//   if(this.state.count<5){
//   return true; }}

//   render()
//   {
//     return(

//       <div className='App'>
//         <h1>Should Component Update <br/><hr />{this.state.count}</h1>
//         <button onClick={()=>{this.setState({ count: this.state.count+1})}}>Update Name</button>
//       </div>
//     )
//   }

// }

// function App() {

//   const [name,setName] = useState("Hunny")

//   return (
//     <div className="App">

//      <h1>Render Method in react</h1>
//      <User name={name}/>
//      <button onClick={()=> setName("Abhi")}>Update Name</button>
//       </div>
//   );
// }

// class App extends React.Component{

//   constructor(){

//     super();

//     this.state={
//       data: 'Abhi'

//     }
//   }

//   render()
//   {
//     return(
//       <h1>Hi {this.state.data}</h1>
//     )

//   }
//}

// function App() {

//   function getData(){
//     alert("Hello from App")
//   }
//   return (
//     <div className="App">

//       <User data={getData}/>
//       </div>
//   );
// }

{
  /* <form onSubmit={getFormData}>
        <input type = "text" placeholder = "Enter your name" onChange={(e)=>{setName(e.target.value)}} /> <br/><br/>
        <select onChange={(e)=>setInterest(e.target.value)}>
          <option>Select Option</option>
          <option>TCS</option>
          <option>INFY</option><option>HCL</option>
        </select><br/><br/>
        <input type="checkbox"  onChange={(e)=>{setTnc(e.target.checked)}}/> <span>Accept Terms and conditions</span>
        <br/><br/>
        <button type="submit">Submit</button> <br /> <br />
        <button>Clear</button>
      </form> */
}
