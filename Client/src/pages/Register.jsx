import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  place-items: center;
  position: relative;

  &:before {
    content: "";
    background:
   /* linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ), */ url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -5;
  }
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3);
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffffff6f;
    backdrop-filter: blur(5px);
    z-index: -2;
  }
  ${mobile({ width:"85%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid gray;
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 10px;
  padding: 10px;
  font-size: 16px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;
const Button = styled.button`
  width: 40%;
  border: 1px solid gray;
  border-radius:30px;
  padding: 15px 20px;
  background: none;
  color: gray;
  cursor: pointer;
  transition: all .5s;

  &:hover{
    background:teal;
    color:white;
    border:none;
    border: 1px solid teal;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
