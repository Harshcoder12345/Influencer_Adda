import React, { useEffect, useState } from 'react'
import { Heart, Reply, MoreHorizontal, Send } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { AddNewCommentByUser, GetCommentByUser, resetcomment } from '../features/comment/CommentSlice';


const CommentSection = () => {


//    const [comments, setComments] = useState([])
const { comments } = useSelector(state => state.comment)
const {userbooking, isBookingLoading, isBookingError,  singlebooking} = useSelector(state => state.booking) 
const {SingleInfluencer} = useSelector(state => state.Influ)
const {user} = useSelector(state => state.auth)
// console.log(singlebooking, 'Single booking data');

// console.log(userbooking, 'At total booking');

// console.log(user , 'useratcomment');






// console.log(userbooking[0].user, 'userbok');
// console.log(comments[0].user._id, 'comments');



// console.log(comments,userbooking[0]?._id, 'commetsection');
const dispatch = useDispatch()


    const [newComment, setNewComment] = useState('');
// console.log(newComment);



    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(AddNewCommentByUser({ id :singlebooking._id,text: newComment}))
setNewComment('')
    }

    // useEffect(()=> {
// dispatch(GetCommentByUser(singlebooking?._id))
//  },[singlebooking])
    

useEffect(()=> {
dispatch(resetcomment())
},[])


 

    return (
        <section className="w-full mx-auto p-16 bg-white rounded-lg shadow-sm">
            {/* Comment Form */}
            <form onSubmit={handleSubmit} className="mt-8 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Leave a Comment</h3>
                <div className="flex flex-col space-y-3">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Text Your message ..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none min-h-[120px] transition duration-200"
                        aria-label="Comment text"
                    />

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition duration-200 transform hover:translate-y-[-2px]"
                        >
                            <span>Post Comment</span>
                            <Send size={16} />
                        </button>
                    </div>
                </div>
            </form>

            <div className="h-px bg-gray-200 my-6"></div>

            {/* Comments List */}
             <div className="mt-2">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Comments </h3>

                {comments.length === 0 ? (
                    <div className="py-8 text-center bg-gray-50 rounded-lg">
                        <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                    </div>
                ) : (
                    <div className="divide-y divide-gray-100">
                        
                        {comments.map(comment => (
                            <div key={comment?.id} className="py-6 border-b border-gray-200 last:border-0">
                                <div className="flex items-start gap-4">

                                    <div className="flex-1 border border-gray-300 p-3">
                                        <div className="flex justify-between space mb-1">
                                      
                                                <h4 className="font-medium text-gray-900">{comment?.user?.name}</h4>
                                              <h4><span className="text-sm  text-gray-500">{ new Date(comment?.createdAt).toLocaleDateString('en-IN') }</span></h4>  
                                    
                                        </div>
                                        <p className="text-gray-700 mb-3">Text : {comment?.text}</p>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
          
        </section>
    );
}

export default CommentSection

