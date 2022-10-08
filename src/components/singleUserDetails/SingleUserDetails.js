function SingleUserDetails({user}) {

    return (
        <div>
            <div>{user.id}.{user.name}</div>
            <div> {user.email} </div>
        </div>
    );
}

export {SingleUserDetails};
