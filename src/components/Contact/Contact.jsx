import style from './Contact.module.css'


function Contact() {
  return (
    <section id='contact' className={style.container}>
        <h1 className={style.sectionTitle}>Contact</h1>
        <form action="https://formspree.io/f/xbljgkjp" method="post">
            <div className='formGroup'> 
                <label htmlFor="name" hidden>Name</label>
                <input type="text" id='name' name='name' placeholder='Name' required/>
            </div>
            <div className='formGroup'> 
                <label htmlFor="email" hidden>E-Mail</label>
                <input type="email" id='email' name='email' placeholder='Email' required/>
            </div>
            <div className='formGroup'> 
                <label htmlFor="message" hidden>Message</label>
                <textarea  id='message' name='message' placeholder='Message' required/>
            </div>
            <input type="submit" className='hover btn' value='Submit'/>
        </form>
    </section>
  )
}

export default Contact