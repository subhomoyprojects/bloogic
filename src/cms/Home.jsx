import { Box, Container } from "@mui/material";
import { BannerHolder } from "../style/HomeBanner";

export default function Home() {
  return (
    <>
      <section className="bannerWrapper">
        <Container>
          <BannerHolder>
            <Box className="bannerItem"></Box>
          </BannerHolder>
        </Container>
      </section>
    </>
  );
}
