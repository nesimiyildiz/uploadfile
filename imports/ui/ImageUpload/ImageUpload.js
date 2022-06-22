import React, { useState } from "react";
import { Container, Form, Image, Row, Button } from "react-bootstrap";

import FileTransfer from "../../api/utils/FileTransfer";
export const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const selectedFileType = (file) => {
    let res = "";
    if (file) {
      res = file.type.split("/")[0];
    }
    return res;
  };

  const removeFile = () => {
    setSelectedFile(null);
  };
  const onChangeFile = (e) => {
    let file=e.target.files[0];
    let baseType = file.type.split("/")[0];
    /*      if (baseType !== 'image') {
                  alertify.error('Banner görseli resim formatında olmalıdır!');
                  return false;
              }*/
    console.log(file);
    // setSelectedFile(file);
  };

  const handleBannerSubmit = () => {
    let type = selectedFile.type.split("/")[0];
    if (type === "video" || type === "image") {
      FileTransfer(selectedFile, false, (filePath) => {
        // setLoading(true);
        // registerBanner(filePath, type);
      });
    } else {
      alert("Banner ortam dosyası tip hatası");
      removeFile();
      return false;
    }
  };

  return (
    <Form.Group>
      {selectedFile ? (
        <Container>
          <Row xs={8}>
            {selectedFileType(selectedFile) === "image" && (
              <Image src={URL.createObjectURL(selectedFile)} fluid />
            )}

            {selectedFileType(selectedFile) === "video" && (
              <video width="100%" controls>
                <source
                  src={URL.createObjectURL(selectedFile)}
                  type="video/mp4"
                />
              </video>
            )}
          </Row>
          <Row xs={4}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => removeFile()}
              style={{ position: "absolute", top: "5px", right: "5px" }}
            >
              Vazgeç
            </Button>
          </Row>
        </Container>
      ) : (
        <Button
          type="submit"
          variant="contained"
          color="primary">
          Banner Ortam Dosyası (Resim / Video)
          <Form.Control
            type="file"
            name="selectedFile"
            accept="image/* ,video/*"
            onChange={(e) => onChangeFile(e)}
          />
        </Button>
      )}
    </Form.Group>
  );
};
