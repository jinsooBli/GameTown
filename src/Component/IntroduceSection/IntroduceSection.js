import React, {useCallback, useState} from 'react';
import './IntroduceSection.css';
import Modal from 'react-modal';

/*
  TODO: 모달창 띄우게하고 모달창 스타일 정의하기
 */


// Modal 스타일 정의
const customStyles = {
  content: {
    position: 'relative',
    overflowY: 'hidden',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '1000px',
    height: '1000px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',


  }
};


function IntroduceSection() {
  const products = [
    {
      id: 1,
      name: 'Counter-Strike 2',
      image: 'https://images.g2a.com/1024x576/1x1x1/counter-strike-global-offensive-prime-status-upgrade-pc-steam-account-account-global-i10000016291002/c0ae065107a74146939f89ec',
      link: 'https://store.steampowered.com/app/730/CounterStrike_2/',
      text: 'For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2.\n',
    },
    {
      id: 2,
      name: 'Black Myth: Wukong',
      image: 'https://images.g2a.com/1024x576/1x1x1/black-myth-wukong-pc-steam-key-global-i10000506052003/18a4c8723a6d4aff90f32b10',
      link: 'https://store.steampowered.com/app/2358720/Black_Myth_Wukong/',
      text: 'Black Myth: Wukong is an action RPG rooted in Chinese mythology. The story is based on Journey to the West, one of the Four Great Classical Novels of Chinese literature. You shall set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath the veil of a glorious legend from the past.',

    },
    {
      id: 3,
      name: 'READY OR NOT',
      image: 'https://images.g2a.com/1024x576/1x1x1/ready-or-not-pc-steam-key-global-i10000280403002/8de5940b580847119bbef339',
      link: 'https://store.steampowered.com/app/1144200/Ready_or_Not/',
      text: 'Los Sueños – The LSPD reports a massive upsurge in violent crime across the greater Los Sueños area. Special Weapons and Tactics (SWAT) teams have been dispatched to respond to various scenes involving high-risk hostage situations, active bomb threats, barricaded suspects, and other criminal activities. Citizens are being advised to practice caution when traveling the city or to stay at home.',
    },
    // ...더 많은 데이터 추가 가능
  ];

  // const [modal1IsOpen, setModal1IsOpen] = useState(false);
  // const showModal = () => {
  //   setModal1IsOpen(!modal1IsOpen); // false면 열리고 true 면 닫히도록
  // }

  const [modalProduct, setModalProduct] = useState(null); // 현재 열린 모달 정보 state에 저장

  const openModal = (product) => {
    setModalProduct(product);  // 해당하는 products를 클릭할때마다 해당 products의 객체 정보 저장
    document.body.style.overflow = "hidden"; // 모달창이 떠있을때 스크롤을 막아줌
  }

  const closeModal = () => {
    const modal = document.querySelector('.ReactModal__Content');
    modal.classList.add('modal-close'); // 모달 닫기 애니메이션 클래스 추가

    setTimeout(() => {
      setModalProduct(null);
      document.body.style.overflow = "unset"; // 모달창이 닫히면 스크롤 가능하게 해줌
    }, 300);
  }

  // const { isOpen, openModal, closeModal } = useModal();

  return (
      <div id="products" className="product-section">
        <h2>Trending Games</h2>
        <div className="product-grid">
          {products.map((product) => (
              <div key={product.id} className="product-item" onClick={ () => {
                openModal(product)
                document.body.style.overflow = "hidden";
              }}>
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <h3>{product.name}</h3>
                </div>
              </div>
          ))}
        </div>
        {modalProduct && (
          <Modal
              isOpen={!!modalProduct}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel={modalProduct.name}
          >
            <h2>{modalProduct.name}</h2>
            <img
                src={modalProduct.image}
                alt={modalProduct.name}
                style={{width: '100%', height: 'auto'}}
            />
            <p>
              <p>{modalProduct.text}</p>
              <a href={modalProduct.link} target="_blank"
                 rel="noopener noreferrer">Go to Game Page</a>
              <button
                  onClick={closeModal}

                  style={{marginLeft: '300px' ,marginTop: '20px', padding: '10px 20px'}}>Close
              </button>
            </p>
          </Modal>
        )};
      </div>
  );
}

export default IntroduceSection;