import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`
export const Content = styled.div`
  position: absolute;
  color: #ffff;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);

  height: 70%;
  width: 50%;
`
export const NameDiv = styled.div`
  display: flex;
  justify-content: center;
  letter-spacing: 3px;
  font-size: 26px;
  font-family: 'Orbitron', sans-serif;
  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 474px) {
    font-size: 16px;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const Image = styled.img`
  display: inline-block;
  height: 200px;
  width: 200px;
  transform: rotateY(-180deg);
  border-radius: 50%;
  @media (max-width: 768px) {
    height: 150px;
    width: 150px;
  }
`
export const Text = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`
export const OpeningText = styled.div`
  width: 40rem;
  margin: auto;
  text-align: justify;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 960px) {
    width: 30rem;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const FlibBoxInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`
export const FlibBox = styled.div`
  background-color: transparent;
  height: 20vh;
  margin: 10vh auto;
  /* perspective: 1000px; */
  &:hover ${FlibBoxInner} {
    transform: rotateY(180deg);
  }
`

export const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: transparent;
  color: black;
`

export const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  background-color: transparent;
  color: white;
  transform: rotateY(180deg);
`
