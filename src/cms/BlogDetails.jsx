import { Container, Grid } from "@mui/material";
import { HeaderHolder } from "../style/CommonHeaderStyle";
import CommonHeaderComponent from "../components/CommonHeaderComponent";
import CommonCardTwoComponent from "../components/CommonCardTwoComponent";
import { EditorPicks } from "../style/LatestArticlesHolderStyle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BlogLists, CategoryLists } from "../redux/slice/BlogSlice";
import BlogDetailsComponent from "../components/BlogDetailsComponent";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { blogItems } = useSelector((state) => state.Blog);

  useEffect(() => {
    dispatch(CategoryLists());

    // Fetch blog items only if not loaded
    if (blogItems.length === 0) {
      dispatch(BlogLists());
    }
  }, [blogItems, dispatch]);
  return (
    <>
      <section className="latestArticlesWRapper">
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item sm={6} lg={8}>
              {Array.isArray(blogItems) && blogItems.map((item) => (item._id === id ? <BlogDetailsComponent key={item._id} title={item.title} description={item.postText} imageType={item.photo.contentType} image={item.photo.data} date={item.createdAt} /> : null))}
            </Grid>
            <Grid item sm={6} lg={4}>
              <EditorPicks>
                <HeaderHolder>
                  <CommonHeaderComponent title="Editor's picks" variant="h2" />
                </HeaderHolder>
                <CommonCardTwoComponent className="editorPicks" />
              </EditorPicks>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
