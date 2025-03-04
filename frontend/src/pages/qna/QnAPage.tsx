import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import { isMobile } from "react-device-detect";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

const QnAPage = () => {
  const downloadUrl1 = `${process.env.PUBLIC_URL}/application/2023_ODBY_R&D과정_지원신청서_(신청자명).docx`;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // 컴포넌트가 마운트될 때 페이지의 제일 위로 스크롤 이동
  }, []);
  console.log(downloadUrl1);
  const images = [
    "/images/QnA/001.jpg",
    "/images/QnA/002.jpg",
    "/images/QnA/003.jpg",
    "/images/QnA/004.jpg",
    "/images/QnA/005.jpg",
    "/images/QnA/006.jpg",
    "/images/QnA/007.jpg",
    "/images/QnA/008.jpg",
    "/images/QnA/009.jpg",
  ];

  return (
    <div className="App-qna">
      <Stack
        sx={{
          marginX: isMobile ? 0 : 30,
          paddingY: isMobile ? 5 : 10,
          backgroundColor: "black",
        }}
      >
        <Stack
          onClick={() => navigate(`/`)}
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
            "&:hover": {
              backgroundColor: "darkgray",
              cursor: "pointer",
            },
          }}
          paddingX={2}
        >
          <ArrowBackIosNewIcon />
        </Stack>
        <div>
          {images.map((src, index) => (
            <div style={{ paddingBottom: 40 }}>
              <img
                style={{
                  width: isMobile ? "80vw" : "35vw",
                  margin: "0 10vw 0 10vw",
                }}
                key={index}
                src={`${process.env.PUBLIC_URL}${src}`}
                alt={`images/00${index + 1}`}
              />
            </div>
          ))}
        </div>
      </Stack>
    </div>
  );
};

export default QnAPage;
