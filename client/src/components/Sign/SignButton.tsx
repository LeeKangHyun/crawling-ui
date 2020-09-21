import React, { memo } from 'react';
import styled from 'styled-components';

type TypeSignButtonProps = {
  type: 'button' | 'submit';
  title: string;
  onClick?(): void;
};

const SignButton = memo(({ type, title, onClick }: TypeSignButtonProps) => {
  return (
    <Button type={type} onClick={onClick}>
      {title}
    </Button>
  );
});

export default SignButton;

const Button = styled.button`
  display: inline-flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 34px;
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  background-color: #5fb4ff;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
`;
