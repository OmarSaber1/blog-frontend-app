import React from 'react';

const Post = (props) => {
    return ( 
        <div className="bg-purple-600 text-center text-white">

            <h1 className="bg-green-600">{props.title}</h1>
            <p>{props.body}</p>
            <hr/>
        </div>
     );
}
 
export default Post;