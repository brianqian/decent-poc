import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const Container = styled.div`
  color: ${(props) => props.theme.color.blue};
  display: flex;
`;

const HeroText = styled.div`
  flex: 2;
  h1 {
    font-size: 58px;
    span {
    }
  }
  h3 {
    font-size: 15px;
  }
  form {
    display: flex;
    align-items: center;
  }
`;

const HeroImage = styled.img`
  width: 450px;
  height: 100%;
  flex: 1;
`;

const SubmitButton = styled.input`
  padding: 9px 25px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.color.red};
  height: 44px;
  width: fit-content;
  font-size: 19px;
  transition: 0.25s linear;
  margin: 0 2rem;
  :hover {
    color: white;
  }
`;

function Hero() {
  return (
    <Container>
      <HeroText>
        <h1>
          Health Insurance for the Self-Employed: <span>Solved.</span>
        </h1>
        <h3>
          If you’re in <span>Austin, Texas</span>, you can enroll in simple, affordable health
          insurance today.
        </h3>
        <form action="">
          <TextField
            id="outlined-with-placeholder"
            // label="Zipcode"
            placeholder="Enter ZipCode"
            margin="normal"
            variant="outlined"
          />
          <SubmitButton type="button" value="GET A QUOTE" />
        </form>
      </HeroText>
      <HeroImage src="/static/hero-image.webp" alt="" />
    </Container>
  );
}

export default Hero;
