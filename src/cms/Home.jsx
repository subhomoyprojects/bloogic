import { Alert, Box, Button, Container, Grid, List } from "@mui/material";
import { BannerHolder } from "../style/HomeBanner";
import CommonCard from "../components/CommonCard";
import CommonHeaderComponent from "../components/CommonHeaderComponent";
import { HeaderHolder } from "../style/CommonHeaderStyle";
import { SliderHolder } from "../style/SliderHolderStyle";
import CommonCardTwoComponent from "../components/CommonCardTwoComponent";
import { CommonCardWrapper } from "../style/CommonCardWrapperStyle";
import { Categories, LatestArticlesHolder } from "../style/LatestArticlesHolderStyle";
import CommonList from "../components/CommonList";
import { useDispatch, useSelector } from "react-redux";
import { BlogLists, CategoryLists, LatestPosts, getCategoryValue } from "../redux/slice/BlogSlice";
import { useEffect, useState } from "react";
import { status } from "../redux/Helper";
import SkeletonLoader from "../common/SkeletonLoader";
import { Category, Delete } from "@mui/icons-material";
import EditorPicksComponent from "../components/EditorPicksComponent";
import TeamComponent from "../components/TeamComponent";
import { TeamAsyncThunk } from "../redux/slice/TeamSlice";

export default function Home() {
  const dispatch = useDispatch();
  const [catListForFilter, setCatListForFilter] = useState("");

  useEffect(() => {
    dispatch(BlogLists(), CategoryLists(), LatestPosts(), TeamAsyncThunk());
  }, [dispatch]);
  const { blogItems, blogStatus, categoryStatus, categoryItems, latestStatus, latestPosts, categoryValue } = useSelector((state) => state.Blog);
  const { teamItems, teamStatus } = useSelector((state) => state.Team);

  useEffect(() => {
    if (categoryValue !== "") {
      const matchedItems = blogItems.filter((item) => item.category === categoryValue);

      if (matchedItems) {
        setCatListForFilter(matchedItems);
      } else {
        console.log("No matching items found");
      }
    }
  }, [categoryItems, categoryValue, blogItems]);
  console.log(catListForFilter);
  return (
    <>
      <section className="bannerWrapper">
        <Container maxWidth="xl">
          <BannerHolder>
            <Box className="bannerItem">
              {latestStatus === status.loading ? (
                <SkeletonLoader height={20} count={5} />
              ) : (
                Array.isArray(latestPosts) &&
                latestPosts.map((items) => (
                  <Box key={items._id}>
                    <CommonCard id={items._id} createDate={items.createdAt} catagories={items.category} image={items.photo.data} imageType={items.photo.contentType} title={items.title} description={items.postText} />
                  </Box>
                ))
              )}
            </Box>
          </BannerHolder>
        </Container>
      </section>
      <section className="mostViewWrapper">
        <Container maxWidth="xl">
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
        <Container maxWidth="xl">
          <CommonCardWrapper>
            <HeaderHolder>
              <CommonHeaderComponent title="Our Team" variant="h2" />
            </HeaderHolder>
            <SliderHolder>
              <Box className="sliderItem">
                <Box className="sliderItemHolder">{Array.isArray(teamItems) && teamItems.map((items) => <TeamComponent key={items._id} className="trendingCard" name={items.name} id={items._id} possession={items.possession} date={items.createdAt} />)}</Box>
              </Box>
            </SliderHolder>
          </CommonCardWrapper>
        </Container>
      </section>
      <section className="latestArticlesWRapper">
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item sm={6} lg={8}>
              <LatestArticlesHolder>
                <HeaderHolder>
                  <CommonHeaderComponent title="Latest articles" variant="h2" />
                </HeaderHolder>
                {blogStatus === status.loading ? (
                  <SkeletonLoader height={20} count={5} />
                ) : catListForFilter === "" ? (
                  Array.isArray(blogItems) && blogItems.map((item) => <CommonCardTwoComponent key={item._id + Date.now()} id={item._id} className="latestArticlesItem" title={item.title} description={item.postText} category={item.category} image={item.photo.data} imageType={item.contentType} date={item.createdAt} />)
                ) : catListForFilter.length > 0 ? (
                  Array.isArray(catListForFilter) && catListForFilter.map((item) => <CommonCardTwoComponent key={item._id + Date.now()} id={item._id} className="latestArticlesItem" title={item.title} description={item.postText} category={item.category} image={item.photo.data} imageType={item.contentType} date={item.createdAt} />)
                ) : (
                  <Alert severity="warning">{`You haven't any data`}</Alert>
                )}
              </LatestArticlesHolder>
            </Grid>
            <Grid item sm={6} lg={4}>
              <EditorPicksComponent />
              <Categories>
                <HeaderHolder>
                  <CommonHeaderComponent title="Categories" variant="h2" />
                </HeaderHolder>
                <List>{categoryStatus === status.loading ? <SkeletonLoader height={20} count={5} /> : Array.isArray(categoryItems) && categoryItems.map((items) => <CommonList key={items._id} id={items._id} value={items.category} icon={<Category />} />)}</List>
                {catListForFilter !== "" && (
                  <Box className="btnHolder">
                    <Button
                      variant="contained"
                      onClick={() => {
                        dispatch(getCategoryValue(""));
                        setCatListForFilter("");
                      }}
                      className="error"
                      color="error"
                      startIcon={<Delete />}
                    >
                      Clear Filter
                    </Button>
                  </Box>
                )}
              </Categories>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
