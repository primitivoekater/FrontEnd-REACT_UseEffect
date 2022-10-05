import { useState } from "react";
import Modal from '../../components/modal'
import "./style.css";

function Main() {
  const [open, setOpen] = useState(false);
  return (

    <div className="container">
      <button
        className='btn1'
        onClick={() => setOpen(true)}
      >Abrir</button>
      <Modal
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
}

export default Main;
