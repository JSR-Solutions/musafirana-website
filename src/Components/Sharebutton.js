import React, { useEffect, useState } from 'react';
import { IoLogoWhatsapp, IoIosCloseCircle } from 'react-icons/io'
import '../Styles/sharebutton.css'

const Sharebutton = () => {
    const [msg, setmsg] = useState('')

    useEffect(() => {
        const hamburger = document.querySelector('.share-butt');
        const navlinks = document.querySelector('.share-butt1')

        hamburger.addEventListener("click", () => {
            navlinks.classList.toggle("open-chat");
        })

        removechat()
    }, [])

    const removechat = () => {
        const hamburger = document.querySelector('.cross-the-chat');
        const navlinks = document.querySelector('.share-butt1')

        hamburger.addEventListener("click", () => {
            navlinks.classList.remove("open-chat");
        })
    }

    return (
        <div>
            <div className='share-butt'>
                <IoLogoWhatsapp />
            </div>
            <div className='share-butt1'>
                <div className='share-butt2'>
                    <p><IoLogoWhatsapp /> <span>Whatsapp</span></p>
                    <IoIosCloseCircle className='cross-the-chat' onClick={removechat} />
                </div>
                <div className='share-butt3'>
                    <input placeholder='Enter Your Message' value={msg} onChange={(e) => setmsg(e.target.value)} />
                </div>
                <div className='share-butt4'>
                    {
                        msg &&
                        <a style={{ color: 'black' }} href={`https://api.whatsapp.com/send?phone=919167404046&text=${msg}`} target='_blank'>
                            <button><IoLogoWhatsapp style={{ fontSize: '28px' }} /> Start Chat</button>
                        </a>
                    }
                    {
                        !msg &&
                        <a style={{ color: 'black' }} href="https://api.whatsapp.com/send?phone=919167404046&text=I'm%20interested%20in%20your%20tourism%20package" target='_blank'>
                            <button><IoLogoWhatsapp style={{ fontSize: '28px' }} /> Start Chat</button>
                        </a>
                    }
                </div>
            </div>
        </div>
    );
};

export default Sharebutton;