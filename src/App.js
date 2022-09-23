import './App.css';

import Tabs from './components/layout/Tabs';

import { useState } from "react";
import Modal from "react-modal";
import PostInfoModal from './components/layout/PostInfoModal';


// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

Modal.setAppElement("#root");
function App() {

  const [emplois, setEmplois] = useState([
    {
      _id: 1,
      post: "developpement",
      post_description:
        "Random text Gretin vous propose un large choix des carrousels industrielles respectant vos exigences. Les carrousels industriels proposés par Gretin Automotive, sont destinées à l’assemblage de faisceaux de fils respectant les normes de performance, de qualité, d’innovation et d’excellence. ",
      searched_profile: "dev dev dev dev",
      amplitude_h: "08:00 - 18:00    -      lundi  -  vendredi",
      contract_type: "contract duree determinee",
      salary: 1000,
    },
    {
      _id: 2,
      post: "RH",
      post_description:
        "Random text Gretin vous propose un large choix des carrousels industrielles respectant vos exigences. Les carrousels industriels proposés par Gretin Automotive, sont destinées à l’assemblage de faisceaux de fils respectant les normes de performance, de qualité, d’innovation et d’excellence. ",
      searched_profile: "dev dev dev dev",
      amplitude_h: "08:00 - 18:00    -      lundi  -  vendredi",
      contract_type: "contract duree determinee",
      salary: 11000,
    },
    {
      _id: 3,
      post: "Qualite",
      post_description:
        "Random text Gretin vous propose un large choix des carrousels industrielles respectant vos exigences. Les carrousels industriels proposés par Gretin Automotive, sont destinées à l’assemblage de faisceaux de fils respectant les normes de performance, de qualité, d’innovation et d’excellence. ",
      searched_profile: "dev dev dev dev",
      amplitude_h: "08:00 - 18:00    -      lundi  -  vendredi",
      contract_type: "contract duree determinee",
      salary: 12000,
    },
    {
      _id: 4,
      post: "Commercial",
      post_description:
        "Random text Gretin vous propose un large choix des carrousels industrielles respectant vos exigences. Les carrousels industriels proposés par Gretin Automotive, sont destinées à l’assemblage de faisceaux de fils respectant les normes de performance, de qualité, d’innovation et d’excellence. ",
      searched_profile: "dev dev dev dev",
      amplitude_h: "08:00 - 18:00    -      lundi  -  vendredi",
      contract_type: "contract duree determinee",
      salary: 12000,
    },
    {
      _id: 5,
      post: "Production",
      post_description:
        "Random text Gretin vous propose un large choix des carrousels industrielles respectant vos exigences. Les carrousels industriels proposés par Gretin Automotive, sont destinées à l’assemblage de faisceaux de fils respectant les normes de performance, de qualité, d’innovation et d’excellence. ",
      searched_profile: "dev dev dev dev",
      amplitude_h: "08:00 - 18:00    -      lundi  -  vendredi",
      contract_type: "contract duree determinee",
      salary: 12000,
    },
    {
      _id: 6,
      post: "Électrotechnique",
      post_description:
        "Random text Gretin vous propose un large choix des carrousels industrielles respectant vos exigences. Les carrousels industriels proposés par Gretin Automotive, sont destinées à l’assemblage de faisceaux de fils respectant les normes de performance, de qualité, d’innovation et d’excellence. ",
      searched_profile: "dev dev dev dev",
      amplitude_h: "08:00 - 18:00    -      lundi  -  vendredi",
      contract_type: "contract duree determinee",
      salary: 12000,
    },
  ]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formActive, setFormActive ] = useState(false)

  // open modal
  const openModal = () => {
    setModalIsOpen(true);
  };
  // close modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // load PostInfo in modal
  
  // postuler
  const showForm = () => {
    closeModal();
    setFormActive(true)
  }

  // back to list
  const backToList = () => {
    setFormActive(false)
  }

  return (
    <div className="App">
      <Navbar/>
      <Tabs onOpen={openModal} formActive={formActive} backToList={backToList} emplois={ emplois } />
      <Modal
        className="modalStyle"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        
        style={{
          overlay: { backgroundColor: "rgba(99, 99, 99, 0.7)" },
          content: {},
        }}
      >
        <PostInfoModal showForm={ showForm }/>
      </Modal>
      <Footer/>
      
    </div>
  );
}

export default App;
