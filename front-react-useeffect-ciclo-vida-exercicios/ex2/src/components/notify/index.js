import './style.css'
import { useEffect } from 'react'
function Notify({ show, text, HandleClose }) {


    useEffect(() => {
        if (show) {
            setTimeout(() => {
                HandleClose()
            }, 1300)

        }
    }, [show])

    return (
        <>
            {show &&
                <div className='container-notify'>
                    <strong>{text}</strong>
                </div>
            }
        </>
    )
}
export default Notify