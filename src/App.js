import './App.css'
import UserProfile from "./components/UserProfile"
import { Component } from 'react'

const initialUserDetailsList =[ {
  uniqueNo:1,
  name:"ganesh",
  imageUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  role:"software developer"
},
{uniqueNo:2,
  name:"ram",
  imageUrl:"https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
  role:"software developer"
},
{uniqueNo:3,
  name:"tiwari",
  imageUrl:"https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
  role:"software developer"
},
{uniqueNo:4,
  name:"rahul",
  imageUrl:"https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
  role:"developer"
}
]
class App extends Component{
  state={
    searchInput:"",
    UserDetailsList : initialUserDetailsList
  }
  onChangeSearchInput=(event)=>{
    this.setState({searchInput:event.target.value})
  }
  onDeletUser=(uniqueNo)=>{
    const {UserDetailsList} = this.state
    const filteredUserDetails = UserDetailsList.filter(eachItem=>eachItem.uniqueNo!==uniqueNo)
    this.setState({UserDetailsList:filteredUserDetails})
  }
  render(){
    const {searchInput,UserDetailsList} = this.state
    console.log(searchInput)
    const searchResults = UserDetailsList.filter((eachUser)=>
    eachUser.name.includes(searchInput)
    )
    return(
      <div className="list-container">
        <h1 className="title">User List</h1>
        <input type="search" onChange={this.onChangeSearchInput} value={searchInput}/>
        <ul>
            {searchResults.map((eachItem)=>(
              <UserProfile onDeletUser={this.onDeletUser} userDetails={eachItem} key={eachItem.uniqueNo}/>
              )
            )}
        </ul>

      </div>
    )
  }
}


export default App