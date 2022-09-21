function Post({post}) {
    const {title,body} = post;

  return (<div>

        <hr/>
          <h3>Posts:</h3>
          <b>Title:</b> {title} <br/>
          <b>Body:</b> {body}
        <hr/>

    </div>
  );
}

export {Post};
