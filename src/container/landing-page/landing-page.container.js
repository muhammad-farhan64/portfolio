import Typical from 'react-typical'
import moment from 'moment'

import { Particle } from '../../component'
import {
  Text,
  Image,
  Content,
  NameDiv,
  Wrapper,
  FlibBox,
  OpeningText,
  ImageWrapper,
  FlibBoxInner,
  Front,
  Back,
} from './landing-page.styled'
// import MyGif from '../../assets/image/mine.gif'

const LandingPage = () => {
  return (
    <div>
      <Wrapper>
        <Particle />
        <Content>
          <NameDiv>Muhammad Farhan</NameDiv>
          <FlibBox>
            <FlibBoxInner>
              <Front>
                <ImageWrapper>
                  <Image src={'mine.gif'} alt='My Picture 8 bit' />
                </ImageWrapper>
              </Front>
              <Back>
                <ImageWrapper>
                  <Image src={'mine2.jpeg'} alt='My Picture ' />
                </ImageWrapper>
              </Back>
            </FlibBoxInner>
          </FlibBox>

          <Text>
            <Typical
              steps={['Hello', 2000, 'Welcome To My Space', 2000, 'I am React JS Developer', 2000]}
              loop={Infinity}
              wrapper='p'
            />
          </Text>
          <OpeningText>
            I am {moment('19960704', 'YYYYMMDD').fromNow().split(' ')[0]} years old. I currently
            working at PT.Xsis Mitra Utama, and get placement at PT.Xapiens Technology Indonesia. I
            am still "Newbie" in web deleveloper. I like to learn something especially related to
            Front End Developer
          </OpeningText>
        </Content>
      </Wrapper>
    </div>
  )
}

export default LandingPage
