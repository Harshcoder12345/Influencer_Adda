// This is commets list that i need to study and understand as this comment list will have date , and reply



// import React, { useState } from 'react';
// import { MessageSquare, User, Send, MessageCircle } from 'lucide-react';

// const initialComments = [
//   {
//     id: '1',
//     user: {
//       name: 'Priya Sharma',
//       avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
//     },
//     text: 'Love your content! Your comedy sketches always make my day better. Keep up the amazing work! 😂',
//     timestamp: new Date(Date.now() - 3600000),
//   },
//   {
//     id: '2',
//     user: {
//       name: 'Raj Patel',
//       avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
//     },
//     text: 'The recent collaboration with that brand was fire! Would love to see more of that type of content.',
//     timestamp: new Date(Date.now() - 86400000),
//     replies: [
//       {
//         id: '2-1',
//         user: {
//           name: 'Ashish Chachalani',
//           avatar: '/src/assets/profile-pic.jpg',
//         },
//         text: 'Thank you so much! More collaborations coming soon!',
//         timestamp: new Date(Date.now() - 43200000),
//       }
//     ]
//   },
//   {
//     id: '3',
//     user: {
//       name: 'Neha Gupta',
//       avatar: 'https://randomuser.me/api/portraits/women/66.jpg',
//     },
//     text: 'Your video on Mumbai street food was so accurate! I literally visited all those places after watching. The vada pav place was amazing!',
//     timestamp: new Date(Date.now() - 172800000),
//   }
// ];

// const CommentSection = () => {
//   const [comments, setComments] = useState(initialComments);
//   const [newComment, setNewComment] = useState('');
//   const [replyingTo, setReplyingTo] = useState(null);
//   const [replyText, setReplyText] = useState('');

//   const formatTime = (date) => {
//     const now = new Date();
//     const diffMs = now.getTime() - date.getTime();
//     const diffSecs = Math.floor(diffMs / 1000);
//     const diffMins = Math.floor(diffSecs / 60);
//     const diffHours = Math.floor(diffMins / 60);
//     const diffDays = Math.floor(diffHours / 24);

//     if (diffSecs < 60) return 'just now';
//     if (diffMins < 60) return `${diffMins}m ago`;
//     if (diffHours < 24) return `${diffHours}h ago`;
//     if (diffDays < 7) return `${diffDays}d ago`;

//     return date.toLocaleDateString();
//   };

//   const handleAddComment = (e) => {
//     e.preventDefault();
//     if (newComment.trim()) {
//       const comment = {
//         id: `comment-${Date.now()}`,
//         user: {
//           name: 'You',
//           avatar: 'https://randomuser.me/api/portraits/lego/1.jpg',
//         },
//         text: newComment,
//         timestamp: new Date(),
//       };
//       setComments([comment, ...comments]);
//       setNewComment('');
//     }
//   };

//   const handleReply = (commentId) => {
//     if (replyText.trim()) {
//       setComments(prevComments => {
//         return prevComments.map(comment => {
//           if (comment.id === commentId) {
//             const newReply = {
//               id: `reply-${Date.now()}`,
//               user: {
//                 name: 'Admin',
//                 avatar: '/src/assets/admin-profile.jpg', // You might want a specific admin avatar
//               },
//               text: replyText,
//               timestamp: new Date(),
//             };

//             return {
//               ...comment,
//               replies: [...(comment.replies || []), newReply]
//             };
//           }
//           return comment;
//         });
//       });
//       setReplyText('');
//       setReplyingTo(null);
//     }
//   };

//   const renderComment = (comment, isReply = false) => (
//     <div key={comment.id} className={`py-4 ${!isReply ? 'border-b border-gray-100' : ''}`}>
//       <div className="flex gap-3">
//         <div className="flex-shrink-0">
//           <img
//             src={comment.user.avatar}
//             alt={comment.user.name}
//             className="w-10 h-10 rounded-full object-cover"
//           />
//         </div>

//         <div className="flex-grow">
//           <div className="bg-gray-50 p-3 rounded-lg">
//             <div className="flex justify-between items-start">
//               <h4 className="font-medium text-gray-900">{comment.user.name}</h4>
//               <span className="text-xs text-gray-500">{formatTime(comment.timestamp)}</span>
//             </div>
//             <p className="mt-1 text-gray-700 whitespace-pre-line">{comment.text}</p>
//           </div>

//           {!isReply && comment.user.name !== 'Admin' && (
//             <div className="flex items-center gap-4 mt-2 ml-1">
//               <button
//                 onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
//                 className="flex items-center gap-1 text-sm text-gray-500 hover:text-purple-600 transition-colors"
//               >
//                 <MessageCircle className="w-4 h-4" />
//                 <span>Reply as Admin</span>
//               </button>
//             </div>
//           )}

//           {replyingTo === comment.id && (
//             <div className="mt-3 flex items-center gap-2">
//               <input
//                 type="text"
//                 value={replyText}
//                 onChange={(e) => setReplyText(e.target.value)}
//                 placeholder="Write a reply as admin..."
//                 className="flex-grow p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//               <button
//                 onClick={() => handleReply(comment.id)}
//                 className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
//               >
//                 Reply
//               </button>
//             </div>
//           )}

//           {comment.replies && comment.replies.length > 0 && (
//             <div className="mt-3 pl-4 border-l-2 border-gray-100">
//               {comment.replies.map(reply => renderComment(reply, true))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <section className="w-full bg-white py-8 mt-8">
//       <div className="container mx-auto px-4 max-w-5xl">
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold flex items-center gap-2">
//             <MessageSquare className="w-6 h-6 text-purple-600" />
//             Comments ({comments.length})
//           </h2>
//         </div>

//         <form onSubmit={handleAddComment} className="flex flex-col w-full bg-white rounded-lg p-4 shadow-sm">
//           <div className="flex items-start gap-3">
//             <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
//               <User className="text-purple-600 w-5 h-5" />
//             </div>

//             <div className="flex-grow">
//               <textarea
//                 value={newComment}
//                 onChange={(e) => setNewComment(e.target.value)}
//                 placeholder="Add a comment..."
//                 maxLength={500}
//                 className="w-full min-h-[80px] p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
//               />

//               <div className="flex justify-between items-center mt-2">
//                 <span className={`text-xs ${newComment.length > 400 ? 'text-orange-500' : 'text-gray-500'}`}>
//                   {newComment.length}/500
//                 </span>

//                 <button
//                   type="submit"
//                   disabled={!newComment.trim()}
//                   className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   <span>Post</span>
//                   <Send className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>

//         <div className="mt-8">
//           {comments.length === 0 ? (
//             <div className="text-center py-8 text-gray-500">
//               <p>Be the first to comment</p>
//             </div>
//           ) : (
//             <div className="space-y-2">
//               {comments.map(comment => renderComment(comment))}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CommentSection;