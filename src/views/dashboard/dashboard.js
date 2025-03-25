import { React, useState, useEffect } from "react";
import {
  Flex,
  Box,
  Text,
  Grid,
  useColorModeValue,
  useStyleConfig,
  Skeleton,
} from "@chakra-ui/react";
import "react-lazy-load-image-component/src/effects/blur.css";
import dashboardimg from "../../assets/dashboard.gif";
import Typewriter from "typewriter-effect";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Dashboard() {
  const [loadedDashboardimg, setloadedDashboardimg] = useState(false);
  const styles = useStyleConfig("Card");
  let highlightTextColor = useColorModeValue("lightblack.100");
  let textColor = useColorModeValue("Black.200", "white");
  const styles1 = {
    background: 'linear-gradient(145deg, #ffffff,)',
    boxShadow: '8px 8px 16pxrgb(247, 234, 234), -8px -8px 16pxrgb(242, 235, 235)',
    borderRadius: '16px',
    padding: '24px',
    fontFamily: '"Poppins", sans-serif',
    transition: 'transform 0.3s ease-in-out',
    _hover: {
      transform: 'scale(1.05)',
      boxShadow: '10px 10px 20px #d3d3d3, -10px -10px 20px #ffffff',
    },
  };
  let quotes = [
    {
      text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
      author: "Thomas Edison, type.fit",
    },
    {
      text: "You can observe a lot just by watching.",
      author: "Yogi Berra, type.fit",
    },
    {
      text: "A house divided against itself cannot stand.",
      author: "Abraham Lincoln, type.fit",
    },
    {
      text: "Difficulties increase the nearer we get to the goal.",
      author: "Johann Wolfgang von Goethe, type.fit",
    },
    {
      text: "Fate is in your hands and no one elses",
      author: "Byron Pulsifer, type.fit",
    },
    {
      text: "Be the chief but never the lord.",
      author: "Lao Tzu, type.fit",
    },
    {
      text: "Nothing happens unless first we dream.",
      author: "Carl Sandburg, type.fit",
    },
    {
      text: "Well begun is half done.",
      author: "Aristotle, type.fit",
    },
    {
      text: "Life is a learning experience, only if you learn.",
      author: "Yogi Berra",
    },
    {
      text: "Self-complacency is fatal to progress.",
      author: "Margaret Sangster, type.fit",
    },
    {
      text: "Peace comes from within. Do not seek it without.",
      author: "Buddha, type.fit",
    },
    {
      text: "What you give is what you get.",
      author: "Byron Pulsifer, type.fit",
    },
    {
      text: "We can only learn to love by loving.",
      author: "Iris Murdoch, type.fit",
    },
    {
      text: "Life is change. Growth is optional. Choose wisely.",
      author: "Karen Clark, type.fit",
    },
    {
      text: "You'll see it when you believe it.",
      author: "Wayne Dyer, type.fit",
    },
    {
      text: "Today is the tomorrow we worried about yesterday.",
      author: "type.fit",
    },
  ];

  let randomNumber = Math.floor(Math.random() * quotes.length);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <Box>
      <Box pt={{ base: "60px", md: "80px", xl: "10px" }}>
        <Flex direction="row" justifyContent="center" alignItems="center">
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1fr 1fr",
            }}
            templateRows={{
              base: "repeat(2, 0.5fr)",
              lg: "1fr",
            }}
            gap={{ xl: "20px" }}
          >
            <Box
              pt={{ xl: "100px" }}
              pl="10px"
              textAlign="center"
              fontSize={{ sm: "1.5em", md: "3em", xl: "2.5em" }}
            >
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
              <Box __css={styles1} border="none">
              <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Rampal Rajput
              </h1>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#6b46c1' }}>
                Software Developer
              </h2>
              <div style={{ fontSize: '1rem', lineHeight: '1.6', color: '#4a5568' }}>
                I am a <strong>Software Developer</strong> with over <strong>2.5 years of experience</strong> specializing in
                <strong> JavaScript, React.js, Redux, Node.js, Express.js, MySQL,</strong> and <strong>AWS</strong>. My passion lies in building scalable and efficient web applications, crafting seamless user experiences, and solving complex challenges through innovative solutions.
                <br />
                <br />
                I thrive in dynamic environments where I can collaborate with teams to deliver impactful projects and continuously enhance my technical skills. Whether it’s frontend, backend, or full-stack development, I bring a problem-solving mindset and a dedication to excellence in every project I undertake.
              </div>
            </Box>
              </Flex>
            </Box>
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Skeleton
                height={loadedDashboardimg ? "100%" : "50%"}
                isLoaded={loadedDashboardimg}
                color="white"
                fadeDuration={1}
              >
                <LazyLoadImage
                  src={dashboardimg}
                  alt="dashboard"
                  effect="blur"
                  onLoad={() => setloadedDashboardimg(true)}
                />
              </Skeleton>
            </Flex>
          </Grid>
        </Flex>

        <Flex direction="column" justifyContent="center" alignItems="center">
          <Box
            __css={styles}
            border="none"
            textAlign="center"
            cursor="default"
            mt="20px"
          >
            Random Quote
            <Box
              fontSize={{ sm: "1em", md: "1.3em", xl: "1.3em" }}
              color={highlightTextColor}
              cursor="default"
            >
              {quotes[randomNumber]?.text ? (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString(quotes[randomNumber]?.text).start();
                  }}
                />
              ) : (
                <span>|</span>
              )}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
