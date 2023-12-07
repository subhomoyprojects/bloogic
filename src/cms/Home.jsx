import { Box, Container } from "@mui/material";
import { BannerHolder } from "../style/HomeBanner";
import CommonCard from "../components/CommonCard";
import CommonHeaderComponent from "../components/CommonHeaderComponent";
import { HeaderHolder } from "../style/CommonHeaderStyle";
import { SliderHolder } from "../style/SliderHolderStyle";
import CommonCardTwoComponent from "../components/commonCardTwoComponent";
import { CommonCardWrapper } from "../style/CommonCardWrapperStyle";

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
              <Box>
                <CommonCard />
              </Box>
              <Box>
                <CommonCard />
              </Box>
              <Box>
                <CommonCard />
              </Box>
              <Box>
                <CommonCard />
              </Box>
            </Box>
          </BannerHolder>
        </Container>
      </section>
      <section className="mostViewWrapper">
        <Container>
          <CommonCardWrapper>
            <HeaderHolder>
              <CommonHeaderComponent title="Most viewed" variant="h2" />
            </HeaderHolder>
            <SliderHolder>
              <Box className="sliderItem">
                <Box className="sliderItemHolder">
                  <CommonCard />
                  <Box className="sliderRight">
                    <CommonCardTwoComponent />
                    <CommonCardTwoComponent />
                  </Box>
                </Box>
              </Box>
            </SliderHolder>
          </CommonCardWrapper>
        </Container>
      </section>
      <section className="trendingWrapper">
        <Container>
          <CommonCardWrapper>
            <HeaderHolder>
              <CommonHeaderComponent title="Trending posts" variant="h2" />
            </HeaderHolder>
            <SliderHolder>
              <Box className="sliderItem">
                <Box className="sliderItemHolder">
                  <CommonCardTwoComponent />
                  <CommonCardTwoComponent />
                  <CommonCardTwoComponent />
                  <CommonCardTwoComponent />
                </Box>
              </Box>
            </SliderHolder>
          </CommonCardWrapper>
        </Container>
      </section>
    </>
  );
}
