import React, { useEffect, useState } from 'react';
import { Plus, Trash2, Edit2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading';
import { adminAddNewInfluencer, adminremove, adminUpdate, editfunction, resetEdit } from '../../features/admin/adminSlice';
import { toast } from 'react-toastify';




const Allinfluencers = () => {

  const dispatch = useDispatch()

 const {totalinfluencers, isLoading, isError, message, isSuccess, edit } = useSelector(state => state.admin)
 
const [addInfluencer , setaddInfluencer] = useState(false)
 const [Influencer, setInfluencer] = useState({
name :" ",
followers : "",
gender : "",
instagram_handle :"",
location : "",
niche : "",
profilepic : "",
rate : ""
 })

 const handleSubmit = (e) => {
e.preventDefault();

!edit.isEdit ?
dispatch(adminAddNewInfluencer(Influencer))
:
dispatch(adminUpdate(Influencer))
setInfluencer({
  name :" ",
followers : "",
gender : "",
instagram_handle :"",
location : "",
niche : "",
profilepic : "",
rate : ""
})

setaddInfluencer(false)
// dispatch(resetEdit())

 }


 

 const handleChange = (e) => {
setInfluencer({
...Influencer,
  [e.target.name] : e.target.value

})
  
 }

 const HandleRemove = (Influencer) => {
  // console.log(Influencer, 'HandleRemove');
  
  dispatch(adminremove(Influencer))
  // console.log('Handle Remove is working');
  
 }

  const handleEditInfluencer = (influencer) => {
    setaddInfluencer(true)
    dispatch(editfunction(influencer))

  };

  useEffect(() => {


    if(isError && message){
      toast.error(message, {position : "top-center"})
    }
  
    
      }, [isError,isSuccess,  message])


      useEffect(()=> {
       setInfluencer(edit.Influencer)
      //  setaddInfluencer(true)
      },[edit])
    
      if(isLoading){
        return <Loading/>
      }
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Influencers</h2>
        <button
           onClick={()=> setaddInfluencer(true)}
          className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Influencer
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {totalinfluencers.map((influencer, index) => (
          <div key={`${influencer?._id}-${index}`} className="bg-white p-4 rounded-lg shadow">
            <img
              src={`${influencer?.profilepic}?w=400`}
              alt={influencer?.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold">{influencer?.name}</h3>
            <p className="text-gray-600">{influencer?.followers} followers</p>
            <p className="text-gray-600">{influencer?.niche}</p>
            <p className="text-gray-600">{influencer?.location}</p>
            <div className="flex space-x-2 mt-4">
              <button
                className="flex items-center text-blue-600 hover:text-blue-700"
                onClick={() => handleEditInfluencer(influencer)}
              >
                <Edit2 className="w-5 h-5 mr-2" />
                Edit
              </button>
              <button
                className="flex items-center text-red-600 hover:text-red-700"
              onClick={()=>HandleRemove(influencer)}
              >
                <Trash2 className="w-5 h-5 mr-2" />
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Influencer Modal */}
      {addInfluencer  && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add New Influencer</h2>
            <form onSubmit={(e) => {
              setaddInfluencer(false)
              handleSubmit(e)
        
            }}>
              <div className="space-y-4">
                
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded-lg"
                  name = "name"
                  value = {Influencer.name}
                  onChange={(e)=>handleChange(e)}
                  
             
                />
                <input
                  type="text"
                  placeholder="Followers (e.g., 850K)"
                  className="w-full px-4 py-2 border rounded-lg"
                  name = "followers"
                  value = {Influencer.followers}
                  onChange={(e)=>handleChange(e)}
                  
                 
                />
               
                <input
                  type="text"
                  placeholder="Profile pic"
                  className="w-full px-4 py-2 border rounded-lg "
                  name="profilepic"
                  id="profilepic"
                  autoComplete='off'
                  
                  value={Influencer.profilepic}
                  onChange={(e)=>handleChange(e)}
                  // req

                  
                 
                />
                <input
                  type="text"
                  placeholder="Niche"
                  className="w-full px-4 py-2 border rounded-lg"
                  name = "niche"
                  value = {Influencer.niche}
                  onChange={(e)=>handleChange(e)}
                 
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full px-4 py-2 border rounded-lg"
                  name = "location"
                  value = {Influencer.location}
                  onChange={(e)=>handleChange(e)}
                 
               
                />

                <input
                  type="text"
                  placeholder="Gender"
                  className="w-full px-4 py-2 border rounded-lg"
                  name = "gender"
                  value = {Influencer.gender}
                  onChange={(e)=>handleChange(e)}
                                  
                />
                <input
                  type="text"
                  placeholder="Instagram handle"
                  className="w-full px-4 py-2 border rounded-lg"
                  name = "instagram_handle"
                  value = {Influencer.instagram_handle}
                  onChange={(e)=>handleChange(e)}
                                  
                />
                <input
                  type="number"
                  placeholder="rate"
                  className="w-full px-4 py-2 border rounded-lg"
                  name = "rate"
                  value = {Influencer.rate}
                  onChange={(e)=>handleChange(e)}
                                  
                />
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <button
                  type="button"
                 onClick={()=> setaddInfluencer(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  {!edit.isEdit ? ' Add Influencer' : 'Update Influencer' }
                 
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    
    </div>
  );
};



  {/* Edit Influencer Modal */}
      {/* {showEditInfluencer && selectedInfluencer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Edit Influencer</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              setShowEditInfluencer(false);
            }}>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={newInfluencer.name}
                  // onChange={(e) => setNewInfluencer({...newInfluencer, name: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Followers (e.g., 850K)"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={newInfluencer.followers}
                  // onChange={(e) => setNewInfluencer({...newInfluencer, followers: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Niche"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={newInfluencer.niche}
                  // onChange={(e) => setNewInfluencer({...newInfluencer, niche: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={newInfluencer.location}
                  // onChange={(e) => setNewInfluencer({...newInfluencer, location: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={newInfluencer.image}
                  // onChange={(e) => setNewInfluencer({...newInfluencer, image: e.target.value})}
                />
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <button
                  type="button"
                  onClick={() => setShowEditInfluencer(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )} */}

// const Allinfluencers = () => {

//  const {totalinfluencers, isLoading, isError, message } = useSelector(state => state.admin)

//   const [showAddInfluencer, setShowAddInfluencer] = useState(false);
//   const [showEditInfluencer, setShowEditInfluencer] = useState(false);
//   const [selectedInfluencer, setSelectedInfluencer] = useState(null);
//   const [newInfluencer, setNewInfluencer] = useState({
//     name: '',
//     followers: '',
//     niche: '',
//     location: '',
//     image: ''
//   });

//   const handleEditInfluencer = (influencer) => {
//     setSelectedInfluencer(influencer);
//     setNewInfluencer(influencer);
//     setShowEditInfluencer(true);
//   };

//   useEffect(() => {


//     if(isError && message){
//       toast.error(message, {position : "top-center"})
//     }
    
    
//       }, [isError, message])
    
//       if(isLoading){
//         return <Loading/>
//       }
//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-semibold">Influencers</h2>
//         <button
//           onClick={() => setShowAddInfluencer(true)}
//           className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
//         >
//           <Plus className="w-5 h-5 mr-2" />
//           Add Influencer
//         </button>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {totalinfluencers.map((influencer) => (
//           <div key={influencer._id} className="bg-white p-4 rounded-lg shadow">
//             <img
//               src={`${influencer.profilepic}?w=400`}
//               alt={influencer.name}
//               className="w-full h-48 object-cover rounded-lg mb-4"
//             />
//             <h3 className="text-lg font-semibold">{influencer.name}</h3>
//             <p className="text-gray-600">{influencer.followers} followers</p>
//             <p className="text-gray-600">{influencer.niche}</p>
//             <p className="text-gray-600">{influencer.location}</p>
//             <div className="flex space-x-2 mt-4">
//               <button
//                 className="flex items-center text-blue-600 hover:text-blue-700"
//                 onClick={() => handleEditInfluencer(influencer)}
//               >
//                 <Edit2 className="w-5 h-5 mr-2" />
//                 Edit
//               </button>
//               <button
//                 className="flex items-center text-red-600 hover:text-red-700"
//                 onClick={() => {/* Handle remove */}}
//               >
//                 <Trash2 className="w-5 h-5 mr-2" />
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Add Influencer Modal */}
//       {showAddInfluencer && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg w-full max-w-md">
//             <h2 className="text-xl font-semibold mb-4">Add New Influencer</h2>
//             <form onSubmit={(e) => {
//               e.preventDefault();
//               setShowAddInfluencer(false);
//             }}>
//               <div className="space-y-4">
                
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="w-full px-4 py-2 border rounded-lg"
//                   value={newInfluencer.name}
//                   onChange={(e) => setNewInfluencer({...newInfluencer, name: e.target.value})}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Followers (e.g., 850K)"
//                   className="w-full px-4 py-2 border rounded-lg"
//                   value={newInfluencer.followers}
//                   onChange={(e) => setNewInfluencer({...newInfluencer, followers: e.target.value})}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Niche"
//                   className="w-full px-4 py-2 border rounded-lg"
//                   value={newInfluencer.niche}
//                   onChange={(e) => setNewInfluencer({...newInfluencer, niche: e.target.value})}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Location"
//                   className="w-full px-4 py-2 border rounded-lg"
//                   value={newInfluencer.location}
//                   onChange={(e) => setNewInfluencer({...newInfluencer, location: e.target.value})}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Image URL"
//                   className="w-full px-4 py-2 border rounded-lg"
//                   value={newInfluencer.image}
//                   onChange={(e) => setNewInfluencer({...newInfluencer, image: e.target.value})}
//                 />
//               </div>
//               <div className="flex justify-end space-x-2 mt-6">
//                 <button
//                   type="button"
//                   onClick={() => setShowAddInfluencer(false)}
//                   className="px-4 py-2 text-gray-600 hover:text-gray-700"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
//                 >
//                   Add Influencer
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Edit Influencer Modal */}
//       {showEditInfluencer && selectedInfluencer && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg w-full max-w-md">
//             <h2 className="text-xl font-semibold mb-4">Edit Influencer</h2>
//             <form onSubmit={(e) => {
//               e.preventDefault();
//               setShowEditInfluencer(false);
//             }}>
//               <div className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="w-full px-4 py-2 border rounded-lg"
//                   value={newInfluencer.name}
//                   onChange={(e) => setNewInfluencer({...newInfluencer, name: e.target.value})}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Followers (e.g., 850K)"
//                   className="w-full px-4 py-2 border rounded-lg"
//                   value={newInfluencer.followers}
//                   onChange={(e) => setNewInfluencer({...newInfluencer, followers: e.target.value})}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Niche"
//                   className="w-full px-4 py-2 border rounded-lg"
//                   value={newInfluencer.niche}
//                   onChange={(e) => setNewInfluencer({...newInfluencer, niche: e.target.value})}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Location"
//                   className="w-full px-4 py-2 border rounded-lg"
//                   value={newInfluencer.location}
//                   onChange={(e) => setNewInfluencer({...newInfluencer, location: e.target.value})}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Image URL"
//                   className="w-full px-4 py-2 border rounded-lg"
//                   value={newInfluencer.image}
//                   onChange={(e) => setNewInfluencer({...newInfluencer, image: e.target.value})}
//                 />
//               </div>
//               <div className="flex justify-end space-x-2 mt-6">
//                 <button
//                   type="button"
//                   onClick={() => setShowEditInfluencer(false)}
//                   className="px-4 py-2 text-gray-600 hover:text-gray-700"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

export default Allinfluencers;