import { Container, Grid, List } from "@mui/material";
import { HeaderHolder } from "../style/CommonHeaderStyle";
import CommonHeaderComponent from "../components/CommonHeaderComponent";
import SkeletonLoader from "../common/SkeletonLoader";
import CommonCardTwoComponent from "../components/CommonCardTwoComponent";
import { Categories, EditorPicks } from "../style/LatestArticlesHolderStyle";
import { Category } from "@mui/icons-material";
import CommonList from "../components/CommonList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BlogLists, CategoryLists } from "../redux/slice/BlogSlice";
import { status } from "../redux/Helper";
import BlogDetailsComponent from "../components/BlogDetailsComponent";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { categoryStatus, categoryItems, blogItems } = useSelector((state) => state.Blog);

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
              <Categories>
                <HeaderHolder>
                  <CommonHeaderComponent title="Categories" variant="h2" />
                </HeaderHolder>
                <List>{categoryStatus === status.loading ? <SkeletonLoader height={20} count={5} /> : Array.isArray(categoryItems) && categoryItems.map((items) => <CommonList key={items._id} value={items.category} icon={<Category />} />)}</List>
              </Categories>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
