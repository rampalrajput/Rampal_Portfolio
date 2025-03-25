import React, { useState, useRef } from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Skeleton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoMenuOutline } from "react-icons/io5";
import GitHubButton from "react-github-btn";
import Content from "./Content";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Sidenav.css";
import sidenavDark from "../../assets/sidenavDark.png";
import sidenavLight from "../../assets/sidenavLight.png";

export default function Sidenav({ routes }) {
  const [loadedSidenavimg, setloadedSidenavimg] = useState(false);
  const { colorMode } = useColorMode();
  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)"
  );

  // Determine visibility of LazyLoadImage based on breakpoint
  const showLazyImage = useBreakpointValue({ base: false, lg: true });

  return (
    <Box className="sidenav-container">
      <Box className="sidenav" boxShadow={shadow}>
        <Flex className="sidenav-flex">
          <Flex className="sidenav-header">
            {showLazyImage && (
              <Skeleton
                isLoaded={loadedSidenavimg}
                fadeDuration={1}
                width="100%"
                height="100%"
              >
                <LazyLoadImage
                  src={colorMode === "light" ? sidenavLight : sidenavDark}
                  effect="blur"
                  onLoad={() => setloadedSidenavimg(true)}
                />
              </Skeleton>
            )}
          </Flex>

          <Stack direction="column" mb="30px" mt="20px">
            <Box className="sidenav-content">
              <Content routes={routes} />
            </Box>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
}

export function SideNavResponsive({ routes }) {
  const { colorMode } = useColorMode();
  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)"
  );
  const [loadedSidenavimg, setloadedSidenavimg] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const showLazyImage = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex className="sidenav-responsive">
      <Flex ref={btnRef} onClick={onOpen} className="sidenav-icon">
        <Icon as={IoMenuOutline} />
      </Flex>
      <Drawer isOpen={isOpen} onClose={onClose} placement="top" finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent className="drawer-content">
          <DrawerCloseButton />
          <DrawerBody className="drawer-body">
            <Box className="drawer-box" boxShadow={shadow}>
              <Flex className="sidenav-flex">
                <Flex className="sidenav-header">
                  {showLazyImage && (
                    <Skeleton
                      isLoaded={loadedSidenavimg}
                      fadeDuration={1}
                      width="100%"
                      height="100%"
                    >
                      <LazyLoadImage
                        src={colorMode === "light" ? sidenavLight : sidenavDark}
                        effect="blur"
                        onLoad={() => setloadedSidenavimg(true)}
                      />
                    </Skeleton>
                  )}
                </Flex>

                <Stack direction="column" mb="30px" mt="20px">
                  <Box>
                    <Content routes={routes} />
                  </Box>
                </Stack>
                <Flex className="github-buttons">
                  <GitHubButton
                    href="https://github.com/Rampal/portfolio-rahulkp"
                    data-size="large"
                  >
                    Star
                  </GitHubButton>
                  <GitHubButton
                    href="https://github.com/Rampal/portfolio-rahulkp/fork"
                    data-size="large"
                  >
                    Fork
                  </GitHubButton>
                </Flex>
              </Flex>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
