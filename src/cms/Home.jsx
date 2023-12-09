import { Box, Container, Grid, List } from "@mui/material";
import { BannerHolder } from "../style/HomeBanner";
import CommonCard from "../components/CommonCard";
import CommonHeaderComponent from "../components/CommonHeaderComponent";
import { HeaderHolder } from "../style/CommonHeaderStyle";
import { SliderHolder } from "../style/SliderHolderStyle";
import CommonCardTwoComponent from "../components/commonCardTwoComponent";
import { CommonCardWrapper } from "../style/CommonCardWrapperStyle";
import { Categories, EditorPicks, LatestArticlesHolder } from "../style/LatestArticlesHolderStyle";
import CommonList from "../components/CommonList";

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
      <section className="latestArticlesWRapper">
        <Container>
          <Grid container spacing={4}>
            <Grid item sm={6} lg={8}>
              <LatestArticlesHolder>
                <HeaderHolder>
                  <CommonHeaderComponent title="Latest articles" variant="h2" />
                </HeaderHolder>
                <CommonCardTwoComponent className="latestArticlesItem" />
              </LatestArticlesHolder>
            </Grid>
            <Grid item sm={6} lg={4}>
              <EditorPicks>
                <HeaderHolder>
                  <CommonHeaderComponent title="Editor's picks" variant="h2" />
                </HeaderHolder>
                <CommonCardTwoComponent className="editorPicks" />
              </EditorPicks>
              <Categories>
                <HeaderHolder>
                  <CommonHeaderComponent title="Categories" variant="h2" />
                </HeaderHolder>
                <List>
                  <CommonList />
                  <CommonList />
                  <CommonList />
                  <CommonList />
                </List>
              </Categories>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
