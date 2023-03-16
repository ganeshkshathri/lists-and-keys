import './index.css'

const UserProfile = (props)=>{
    const {userDetails,onDeletUser} = props
    const {imageUrl} = userDetails
    const {name}= userDetails
    const {role,uniqueNo} = userDetails
    
    const onDelete=()=>{
        onDeletUser(uniqueNo)
    }
    return(
        
        <li className='user-card-container'>
            <img src={imageUrl} className="avatar" alt='avatar' />
            <div className='user-detail-container'>
                <h1 className='user-name'>{name}</h1>
                <p className='user-designation'>{role}</p>
                
            </div>
            <button type='button' className='delete-button' onClick={onDelete}>
                <img src='https://assets.ccbp.in/frontend/react-js/cross-img.png' alt='cross' className='delete-img' />
            </button>
        </li>
    )

}
export default UserProfile