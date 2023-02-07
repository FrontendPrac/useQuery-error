import Modal from '@/components/main/Modal';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import Seo from '@/components/Seo';

export default function Main() {
  const [isOpenModal, setOpenModal] = useState(false);

  const onClickToggleModal = () => {
    setOpenModal(!isOpenModal);
  };

  return (
    <>
      <div>
      <Seo title="Home" />
      hello
    </div>
      {isOpenModal && (
        <Modal onClickToggleModal={onClickToggleModal}>
          <div>children</div>
        </Modal>
      )}

      <input />
      <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
        <Categorys>지역</Categorys>
        <Categorys>작가</Categorys>
        <Categorys>지역</Categorys>
        <Categorys>팔로우</Categorys>
        <Categorys onClick={onClickToggleModal}>게시물 작성</Categorys>
      </div>
      <div></div>
      <div>
        <ImageBox>
          <Image
            // src = {https://i.pinimg.com/564x/c7/e6/ba/c7e6bad3167a4d0188a4e5914e0dcb28.jpg}
            src="/dog.jpeg"
            alt="dog"
            width={200}
            height={200}
            style={{
              margin: '20px',
            }}
          />
          <Image
            // src = {https://i.pinimg.com/564x/c7/e6/ba/c7e6bad3167a4d0188a4e5914e0dcb28.jpg}
            src="/dog.jpeg"
            alt="dog"
            width={200}
            height={200}
            style={{
              margin: '20px',
            }}
          />
          <Image
            // src = {https://i.pinimg.com/564x/c7/e6/ba/c7e6bad3167a4d0188a4e5914e0dcb28.jpg}
            src="/dog.jpeg"
            alt="dog"
            width={200}
            height={200}
            style={{
              margin: '20px',
            }}
          />
          <Image
            // src = {https://i.pinimg.com/564x/c7/e6/ba/c7e6bad3167a4d0188a4e5914e0dcb28.jpg}
            src="/dog.jpeg"
            alt="dog"
            width={200}
            height={200}
            style={{
              margin: '20px',
            }}
          />
          <Image
            // src = {https://i.pinimg.com/564x/c7/e6/ba/c7e6bad3167a4d0188a4e5914e0dcb28.jpg}
            src="/dog.jpeg"
            alt="dog"
            width={200}
            height={200}
            style={{
              margin: '20px',
            }}
          />
        </ImageBox>
      </div>
    </>
  );
}

const Categorys = styled.button`
  background-color: tomato;
  width: 100px;
  height: 40px;
`;

const ImageBox = styled.div`
  border: tomato 1px solid;
  display: flex;
  flex-direction: row;
`;
