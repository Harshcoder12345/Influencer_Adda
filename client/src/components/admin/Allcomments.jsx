import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading';
import { Link } from 'react-router';
import { admincomment } from '../../features/admin/adminSlice';


const Allcomments = () => {
  const dispatch = useDispatch()

  const {isLoading, isError, message , totalcomments} = useSelector(state => state.admin)
// console.log(totalcomments);
useEffect(() => {


  if(isError && message){
    toast.error(message, {position : "top-center"})
  }
  
  
    }, [isError, message])
  
    if(isLoading){
     return <Loading/>
    }


    const [activeReplytext, setactiveReplytext] = useState('')
    const [activeReplyId, setactiveReplyId] = useState('')

    const HandleReply =(bid) => {
      dispatch(admincomment({activeReplytext, bid}))
      // console.log(activeReplytext, bid);
      setactiveReplytext('')
    }

  return (
    <div className="space-y-4">
      {totalcomments.map((comment) => (
        <div key={comment._id} className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Comment by: {comment.user.name}</h3>
              <h3 className="font-semibold"> Comment Id :{comment._id}</h3>
              <p className="text-gray-600">{comment.text}</p>

            </div>
            <span className="text-sm text-gray-500">{new Date(comment.createdAt).toLocaleDateString('en-IN')}</span>
         
          </div>
          <Link onClick={()=> setactiveReplyId(comment._id)} className='text-blue-500'>Reply</Link>

{
  activeReplyId === comment._id &&(
    <div className='flex space-x-1'>

    <input className='w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-blue-500' type="text" placeholder='Reply for comment here' value={activeReplytext}   onChange={(e)=>setactiveReplytext(e.target.value)} />
    <button className="bg-purple-500 text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-green-400 "  onClick={()=>HandleReply(comment?.booking)}>Send</button>
    </div>
  )
}

         
        </div>
      ))}
    </div>
  );
};

export default Allcomments;