import './contact.css'

export const Contact = () => {
  return (
    <section className='anyQuestion_div' id='contactPage' data-aos="fade-up">

    <div className='map_div' data-aos="fade-up">
      <iframe className='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126614.56223805038!2d3.822658372182909!3d7.386909894877332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d77eeff086f%3A0x3b33e0f76e8e04a9!2sIbadan%2C%20Oyo!5e0!3m2!1sen!2sng!4v1710590542906!5m2!1sen!2sng"></iframe>
    </div>
    <div>
      <div>
        <form action=""className='form_field' data-aos="fade-up">
         
          <div className='input_div'><input  type="text" placeholder="Full Name" required data-aos="fade-up"/></div>
          <div className='input_div'><input type="email" placeholder="Email" required data-aos="fade-up"/></div>
        
          
          <div  className='input_div'><input type="text" placeholder="Subject" required data-aos="fade-up"/></div>
          <div >
            <div className='text_area_div'>
              <textarea name="message" rows="6" id="message" placeholder="Message" required data-aos="fade-up"></textarea>
            </div>
          </div>
          <button data-aos="fade-up">SEND MESSAGE</button>
         
         </form>
      </div>
       
  
    </div>

    
</section>
  )
}
