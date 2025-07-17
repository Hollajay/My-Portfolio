import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useSendReviewMutation } from '../store/api';
import { useState } from 'react';

export const Contact = () => {
const [sendReview, { isLoading, error}] = useSendReviewMutation()

const [formData, setFormData] = useState({
  firstName: '',
  email: '',
  subject: '',
  message: ''
})

const sendData = {
  firstName: formData.firstName,
  email: formData.email,
  subject: formData.subject,
  message: formData.message

}


const handleSubmit = async (e) => {
  e.preventDefault()
   console.log(sendData)
   try {
      const res =  await sendReview(sendData).unwrap()
      toast.success('message sent successfully')
      setFormData({firstName: '', email: '', subject: '', message: ""})
       console.log(res)
   } catch (err) {
     console.log(`${error} the error is not there `)
     toast.error( error || 'there is an error')
   }
}


  

  return (
    <div className=" lg:px-15 md:px-10 w-full h-full py-6">
      <div className="lg:px-20 md:px-10 flex items-center h-full w-full">
        {/* <h1 className="text-3xl font-bold">{`<About Me/>`}</h1> */}
        <div className="w-full flex flex-col items-center gap-9">
          <div className="lg:w-1/2 p-3 w-full text-center space-y-7">
            <h1 className="text-4xl  text-light-400 font-subhead">
              Get in touch
            </h1>
            <p className="text-light-300">
              I’m interested in freelance opportunities – especially ambitious
              or large projects. However, if you have any request or question,
              don’t hesitate to contact me
            </p>
          </div>

          <div className="lg:w-1/2 w-full p-4">
            <form className="space-y-5 text-light-500" onSubmit={handleSubmit}>
              <div className="border h-12 rounded-lg border-light-300  !important">
                <input
                  className="w-full h-full px-4 rounded-lg outline-none text-sm"
                  type="text"
                  placeholder="Your Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
              </div>
              <div className="border h-12 rounded-lg border-light-300  !important">
                <input
                  className="w-full h-full px-4 rounded-lg outline-none text-sm"
                  type="text"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
               <div className="border h-12 rounded-lg border-light-300  !important">
                <input
                  className="w-full h-full px-4 rounded-lg outline-none text-sm"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>
              <div className="border h-40 rounded-lg border-light-300  !important">
                <textarea
                  className="w-full h-full p-4 rounded-lg outline-none text-sm resize-none"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <button 
               type='submit'
               disabled={isLoading}
              className="py-3 px-8 bg-light-400 text-light-100 rounded-lg ">
              {isLoading ? 'sending...' : 'Send Message'}   
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
