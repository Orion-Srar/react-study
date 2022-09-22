function User({user,getUserId}) {

  return (<div>

        {user.id}.{user.name} <br/>
        <button onClick={()=>{
            getUserId(user.id)
        }}>Posts of user</button>
        
    </div>
  );
}

export {User};
