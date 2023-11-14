import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Modal from "react-modal";
import img from "../../assets/01.jpg";
// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };
const ExModal = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={false}
      >
        <div className="lg:p-5  text-center relative">
          <button
            onClick={closeModal}
            className="fixed left-4 lg:left-5 top-4 lg:top-5"
          >
            <RxCross2 className="text-xl lg:text-4xl" />
          </button>
          <div className="lg:p-3">
            <img src={img} className="w-full" alt="" /> <br />
            <img src={img} className="w-full" alt="" /> <br />
            <img src={img} className="w-full" alt="" /> <br />
            <img src={img} className="w-full" alt="" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ExModal;
