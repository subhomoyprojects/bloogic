import { Box, Container } from "@mui/material";
import { BannerHolder } from "../style/HomeBanner";
import CommonCard from "../component/CommonCard";

export default function Home() {
  return (
    <>
      <section className="bannerWrapper">
        <Container>
          <BannerHolder>
            <Box className="bannerItem">
              <Box>
                <CommonCard />
              </Box>
            </Box>
          </BannerHolder>
        </Container>
      </section>
    </>
  );
}
