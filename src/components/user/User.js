import {Link} from "react-router-dom";

function User({user}) {
  const {id,name} = user;
  return (
      <div>
        <Link to={'/user/'+id} state={{...user}} >{id}.{name} </Link>
    </div>
  );
}

export {User};
