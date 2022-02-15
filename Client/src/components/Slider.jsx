import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRight";
import {sliderItems} from "../data";
import {useState, useEffect} from "react";
import {mobile} from "../responsive";


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({height: "50vh"})}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${({direction}) => direction === "right" && "10px"};
  left: ${({direction}) => direction === "left" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${({slideIndex}) => slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  background: #${({bg}) => bg};
  ${mobile({position: "relative", zIndex: -4})}
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  ${mobile({
    display: "flex",
    justifyContent: "center",
    position: "relative",
    zIndex: -3,
  })}
`;
const Image = styled.img`
  height: 85%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  @media (max-width: 400px) {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(8px);
      background-color: #ffffff7d;
      z-index: -1;
    }
  }

  ${mobile({
    padding: "20px",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  })}
`;

const Title = styled.h1`
  font-size: 70px;
  ${mobile({fontSize: "30px"})}
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({fontSize: "13px", margin: "10px 0"})}
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  ${mobile({fontSize: "13px"})}
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [reachTop, setReachTop] = useState(false);
    const [reachBottom, setReachBottom] = useState(true);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
        } else {
            setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
        }
    };

   
    useEffect(() => {
        const autoPlay = setInterval(() => {
          if (slideIndex === 0) {
            setReachTop(false);
            setReachBottom(true);
        }
        if (slideIndex === sliderItems.length - 1) {
            setReachTop(true);
            setReachBottom(false);
        }
        if (reachBottom)
            setSlideIndex((slideIndex) =>
                slideIndex === sliderItems.length - 1
                    ? sliderItems.length - 2
                    : slideIndex + 1
            );
        if (reachTop)
            setSlideIndex((slideIndex) => (slideIndex === 0 ? 1 : slideIndex - 1));
        }, 3000);

        return () => {
            clearInterval(autoPlay);
        };
    }, [slideIndex,reachBottom,reachTop]);

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlinedIcon/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide key={item.id} bg={item.bg}>
                        <ImgContainer>
                            <Image src={item.img}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlinedIcon/>
            </Arrow>
        </Container>
    );
};

export default Slider;

