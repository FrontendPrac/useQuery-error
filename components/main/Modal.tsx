import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import PostForm from './PostForm';

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

const Modal = ({ onClickToggleModal }: PropsWithChildren<ModalDefaultType>) => {
  return (
    <ModalContainer>
      <StDialogBox open>
        <PostForm />
      </StDialogBox>
      <Backdrop
        onClick={(e) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      ></Backdrop>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StDialogBox = styled.dialog`
  width: 600px;
  height: 400px;
  flex-direction: column;
  align-items: center;

  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
`;

const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;
