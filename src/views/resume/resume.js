import { React, useEffect } from "react";
import { Box, useStyleConfig, Flex, Button } from "@chakra-ui/react";

export default function Resume() {
  const styles = useStyleConfig("Card");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const handleDownload = () => {
    window.location.href =
      "https://drive.google.com/uc?export=download&id=1KTi9lYD9U_d5gvC2pmnc9omCJPFDiGvP";
  };

  return (
    <Box>

      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <Flex justifyContent="center" alignItems="center">
          <Box
            __css={styles}
            width={{ base: "100%", md: "70%", xl: "70%" }}
            height={{ base: "60vh", md: "100vh", xl: "130vh" }}
            overflow="hidden"
            borderRadius="md"
          >
            <iframe
              src="https://drive.google.com/file/d/1KTi9lYD9U_d5gvC2pmnc9omCJPFDiGvP/preview"
              title="Resume"
              width="100%"
              height="100%"
              style={{ border: "5px solid" }}
              loading="lazy"
            ></iframe>
          </Box>
        </Flex>
        <Flex justifyContent="center" alignItems="center" mt="20px">
          <Button
            onClick={handleDownload}
            variant="darkBrand"
            fontSize="sm"
            fontFamily="DM Sans"
          >
            Download Resume
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
