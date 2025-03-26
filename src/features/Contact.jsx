import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
export const Contact = () => {
  const notify = (event) => {
    event.preventDefault(); // Prevent form refresh
    toast.error("The server is currently unavailable. Please try again later.");
  };
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
            <form className="space-y-5 text-light-500">
              <div className="border h-12 rounded-lg border-light-300  !important">
                <input
                  className="w-full h-full px-4 rounded-lg outline-none text-sm"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="border h-12 rounded-lg border-light-300  !important">
                <input
                  className="w-full h-full px-4 rounded-lg outline-none text-sm"
                  type="text"
                  placeholder="Your Email"
                />
              </div>
              <div className="border h-40 rounded-lg border-light-300  !important">
                <textarea
                  className="w-full h-full p-4 rounded-lg outline-none text-sm resize-none"
                  placeholder="Your Message"
                />
              </div>
              <button 
              onClick={notify}
              className="py-3 px-8 bg-light-400 text-light-100 rounded-lg ">
                Send Message
                
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
