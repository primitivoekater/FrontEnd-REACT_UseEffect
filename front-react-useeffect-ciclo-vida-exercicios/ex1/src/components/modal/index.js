import './style.css'


function Modal({ open, setOpen }) {
    return (
        <>
            {open &&
                <div className='container-modal'>
                    <div className='modal'>
                        <h1>User</h1>
                        <div className='modal-body'>
                            <span>Daniel</span>
                            <span>Daniel</span>
                            <span>Daniel</span>
                            <span>Daniel</span>
                            <span>Daniel</span>
                        </div>
                        <button
                            onClick={() => setOpen(false)}>
                            close
                        </button>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal