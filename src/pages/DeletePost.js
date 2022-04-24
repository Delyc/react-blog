import React from 'react'

function DeletePost() {
  return (
    <div>
        <form action="" onSubmit={(e) => onSubmit(e)}>
            <p>Are yu sure you want to delete this post</p>
            <button>Delete</button> 
        </form>
        <button>cancel</button>
    </div>
  )
}

export default DeletePost