import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import useHandleApproved from '../../../../hooks/useHandleApproved';
import { useForm } from 'react-hook-form';

const ManageClass = () => {

  


  const [classInfo, refetch] = useHandleApproved()

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [disable, setDisabled] = useState(false)



  const handleApproved = (id) => {




    fetch(`https://dramatix-lab-server-3hg5zxg3j-rayhanuddinfarhad.vercel.app/approved/${id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {

        refetch()

        setDisabled(true)

      })

  }


  const handleDeny = (id) => {


    fetch(`https://dramatix-lab-server-3hg5zxg3j-rayhanuddinfarhad.vercel.app/deny/${id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {console.log(data)



        
      
      
      
        refetch()})

    


    setDisabled(true)







  }







  const [feedbackId, setFeedbackId] = useState(null); // State to hold the ID for sending feedback

  const showModal = (id) => {
    setFeedbackId(id); // Set the ID when the modal is shown
  };

  const SendFeedback = (event) => {
    event.preventDefault();
    const message = event.target.feedback.value;

    if (feedbackId) {
      fetch(`https://dramatix-lab-server-3hg5zxg3j-rayhanuddinfarhad.vercel.app/sendFeedback/${feedbackId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      })
        .then(res => res.json())
        .then(data => console.log(data));

      // Close the modal after sending feedback
      const modalCheckbox = document.getElementById('my_modal_6');
      modalCheckbox.checked = false;
    }
  };







  return (
    <div>





      <div className="overflow-x-auto">
        <table className="table table-xs">
          {/* head */}
          <thead>
            <tr>


              <th>Class Info</th>

              <th>Instructor Info</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>






            {

              classInfo && classInfo.map((data) => {


                return (


                  <>
                    <tr className='text-base-500'>
                      <td><div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={data.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>

                        <p>{data.name}</p> </td>

                      <td>



                        <p>{data.instructor}</p>
                        <p>{data?.email}</p>
                      </td>
                      <td>{data.availableSeats}</td>
                      <td>{data.price}</td>
                      <td>{data.status}</td>
                      <td>


                        <div className='flex space-x-5'>

                          <button onClick={() => handleApproved(data._id)} className={` text-white ${data.status === 'approved' || data.status === 'denied' ? 'btn btn-disabled' : 'button-primary'}`}>Approve</button>
                          <button onClick={() => handleDeny(data._id)} className={`text-white ${data.status === 'denied' || data.status === 'approved' ? 'btn btn-disabled' : 'btn btn-error'}`}>Deny</button>
                          <label htmlFor="my_modal_6" className="button-primary" onClick={() => showModal(data._id)}>Send Feedback</label>

                        </div>


                        {/* The button to open modal */}

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                        <div className="modal">
                          <form onSubmit={SendFeedback} className="modal-box">
                            <textarea placeholder="Your Feedback" name='feedback' className="textarea textarea-bordered textarea-lg w-full max-w-xs" >


                            </textarea>

                            <button onClick={() => sendingto(data._id)} className='button-primary block'>send Now</button>

                            <div className="modal-action">
                              <label htmlFor="my_modal_6" className="btn">Close!</label>
                            </div>
                          </form>
                        </div>




                      </td>



                    </tr>



                  </>

                )
              })
            }

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default ManageClass;