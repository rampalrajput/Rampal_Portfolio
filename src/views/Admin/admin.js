import React, { useState, useRef } from "react";
import { Box, Button, Input, VStack, Text, Icon, useToast } from "@chakra-ui/react";
import { FaCloudUploadAlt } from "react-icons/fa";

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const toast = useToast();

  const handleFileChange = (event) => {
    console.log("Files selected:", event.target.files);
    setSelectedFile(event.target.files[0]);
  };

  const handleButtonClick = () => {
    console.log("File input ref:", fileInputRef.current);
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please choose a file to upload.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setSelectedFile(selectedFile);
    console.log("Selected file:", selectedFile);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      console.log("Uploading file...", formData.get("file"));
      const response = await fetch("/about", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Upload successful",
          description: "Your file has been uploaded!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setSelectedFile(null);
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "Something went wrong. Try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
    <Text fontSize="40px" fontWeight="bold" textAlign="center">
          Admin File Upload
        </Text>

    <VStack spacing={4} p={6} borderWidth="1px" borderRadius="md" boxShadow="md">
      
      <Box display="flex" flexDirection="column" alignItems="center">
        <Icon as={FaCloudUploadAlt} boxSize={12} color="blue.500" />
        <Text fontSize="lg" fontWeight="bold">Upload a File</Text>
      </Box>

      {/* Hidden but accessible file input */}
      <Input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ position: "absolute", left: "-9999px" }}
      />

      <Button colorScheme="gray" onClick={handleButtonClick} type="button">
        Choose File
      </Button>

      {selectedFile && (
        <Text fontSize="sm" color="gray.600">Selected: {selectedFile.name}</Text>
      )}

      <Button colorScheme="blue" onClick={handleUpload} isDisabled={!selectedFile}>
        Upload File
      </Button>
    </VStack>
   </div> 
  );
};

export default FileUploader;
