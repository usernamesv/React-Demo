import React from 'react'


function User(prop){
    console.warn(prop.match.params.id)
    return(
        <div>
            <h2>User </h2>
        </div>
    )
}


export default (User);





// function User(props) {
//     const data = 'Abhishek'
//    return (
//        <div>
//            <h2>User Component : </h2>
//            <button onClick={()=>props.alert(data)}>Click Me</button>
//        </div>
//    )
// }





//  function User(props) {
//     return (
//         <div>
//             <span> {props.data.name} </span>
//             <span> {props.data.email} </span>
//             <span> {props.data.contact} </span>
//         </div>
//     )
// }




// function User(props) {

//     useEffect(()=>{
//      // console.warn('useEffect called for data')
//      alert( + props.count)
//     })
  
//     return(
//       <div className='User'>
  
//         <h1>Count Props: {props.count}</h1>
//         <h1>Data Props: {props.data}</h1>
        
//       </div>
//     )
//   }




// class User extends React.Component{
//     componentWillUnmount()
//     {
//         alert('componentWillUnmount called')
//     }
//     render(){
        
//         return(
//             <div>
//                 <h1>User Component </h1>
//             </div>
//         )
//     }
// }




// function User(props) {

//     return(
//              <div>
//                  <h1>User Component</h1>
//                  <button onClick={props.data}>Call data functions</button>
//              </div> 
//           )
// }

