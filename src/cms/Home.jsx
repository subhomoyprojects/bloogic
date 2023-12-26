import { Box, Container, Grid, List } from "@mui/material";
import { BannerHolder } from "../style/HomeBanner";
import CommonCard from "../components/CommonCard";
import CommonHeaderComponent from "../components/CommonHeaderComponent";
import { HeaderHolder } from "../style/CommonHeaderStyle";
import { SliderHolder } from "../style/SliderHolderStyle";
import CommonCardTwoComponent from "../components/CommonCardTwoComponent";
import { CommonCardWrapper } from "../style/CommonCardWrapperStyle";
import { Categories, EditorPicks, LatestArticlesHolder } from "../style/LatestArticlesHolderStyle";
import CommonList from "../components/CommonList";
import { useDispatch, useSelector } from "react-redux";
import { BlogLists } from "../redux/slice/BlogSlice";
import { useEffect } from "react";
import { status } from "../redux/Helper";
import SkeletonLoader from "../common/SkeletonLoader";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(BlogLists());
  }, [dispatch]);
  const { blogItems, blogStatus } = useSelector((state) => state.Blog);
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
                    <CommonCardTwoComponent className="mostView" />
                    <CommonCardTwoComponent className="mostView" />
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
                  <CommonCardTwoComponent className="trendingCard" />
                  <CommonCardTwoComponent className="trendingCard" />
                  <CommonCardTwoComponent className="trendingCard" />
                  <CommonCardTwoComponent className="trendingCard" />
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
                {blogStatus === status.loading ? <SkeletonLoader /> : Array.isArray(blogItems) && blogItems.map((item, index) => <CommonCardTwoComponent key={index * 8} className="latestArticlesItem" title={item.title} description={item.postText} category={item.category} image={item.photo.data} imageType={item.contentType} date={item.createdAt} />)}
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
