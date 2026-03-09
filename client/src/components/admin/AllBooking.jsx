import React, { useEffect, useState } from 'react';
import { Check, X, Edit2, Loader } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading';
import { adminbooking } from '../../features/admin/adminSlice';



const AllBooking = () => {

  const dispatch = useDispatch()

  const {totalbookings, isLoading, isError, message } = useSelector(state => state.admin)
  const [showEditBooking, setShowEditBooking] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleEditBooking = (booking) => {
    setSelectedBooking(booking);
    setShowEditBooking(true);
    // console.log(selectedBooking);
    
  };

  const HandleSubmitBooking = (selectedBooking) => {
// console.log('select', selectedBooking);
dispatch(adminbooking(selectedBooking))
  }
  

  useEffect(() => {


if(isError && message){
  toast.error(message, {position : "top-center"})
}


  }, [isError, message])

  if(isLoading){
    <Loading/>
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Influencer
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              User
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {totalbookings.map((booking) => (
            <tr key={booking._id}>
              <td className="px-6 py-4 whitespace-nowrap">{booking.influencer?.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{booking.user?.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{new Date(booking.createdAt).toLocaleDateString('en-IN')   }</td>
              <td className="px-6 py-4 whitespace-nowrap">${booking.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap">${booking.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  booking.status === 'accepted' ? 'bg-green-100 text-green-800' :
                  booking.status === 'rejected' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {booking.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex space-x-2">
                  <button
                    className="text-blue-600 hover:text-blue-700"
                    onClick={() => handleEditBooking(booking)}
                  >
                    <Edit2 className="w-5 h-5" />
                  </button>
             
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Booking Modal */}
      {showEditBooking && selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Edit Booking</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              setShowEditBooking(false);
            }}>
              <div className="space-y-4">
         
                <select
                  className="w-full px-4 py-2 border rounded-lg"
                  value={selectedBooking.status}
                  onChange={(e) => setSelectedBooking({...selectedBooking, status: e.target.value})}
                >
                  <option value="pending">Pending</option>
                  <option value="accepted">Accepted</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <button
                  type="button"
                  onClick={() => setShowEditBooking(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                  onClick={()=>HandleSubmitBooking(selectedBooking)}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBooking;



       {/* <input
                  type="text"
                  placeholder="Brand"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={selectedBooking.brand}
                  onChange={(e) => setSelectedBooking({...selectedBooking, brand: e.target.value})}
                /> */}
                {/* <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={selectedBooking.date}
                  onChange={(e) => setSelectedBooking({...selectedBooking, date: e.target.value})}
                /> */}
                {/* <input
                  type="number"
                  placeholder="Amount"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={selectedBooking.amount}
                  onChange={(e) => setSelectedBooking({...selectedBooking, amount: parseInt(e.target.value)})}
                /> */}


              //   <button
              //   className="text-green-600 hover:text-green-700"
              //   onClick={() => {/* Handle accept */}}
              // >
              //   <Check className="w-5 h-5" />
              // </button>
              // <button
              //   className="text-red-600 hover:text-red-700"
              //   onClick={() => {/* Handle reject */}}
              // >
              //   <X className="w-5 h-5" />
              // </button>