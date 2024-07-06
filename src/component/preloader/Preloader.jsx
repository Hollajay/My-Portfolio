import './preloader.css'
import { MutatingDots } from 'react-loader-spinner'

export const Preloader = () => {
  return (
    <div className='container'>
    <div className="preloader">
   <MutatingDots
  visible={true}
  height="100"
  width="100"
  color="#C80036"
  secondaryColor="#C80036"
  radius="12.5"
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />    
    {/* <img src="https://cdn-icons-gif.flaticon.com/6569/6569144.gif" alt="Loading..." /> */}
  </div>
  </div>
  )
}
