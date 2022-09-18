function User(props) {

  let {user,lift} = props;

  return (<div>

       <h3> {user.id}.{user.name}</h3>
          <button onClick={()=>{
              lift(user);
          }}>Information</button>

    </div>
  );
}

export default User;
