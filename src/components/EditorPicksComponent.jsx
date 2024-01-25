import { HeaderHolder } from "../style/CommonHeaderStyle";
import { EditorPicks } from "../style/LatestArticlesHolderStyle";
import CommonHeaderComponent from "./CommonHeaderComponent";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { TestimonialsItems } from "../redux/slice/TestimonialsSlice";
import TestimonialsCardComponent from "./TestimonialsCardComponent";
import { status } from "../redux/Helper";
import SkeletonLoader from "../common/SkeletonLoader";

export default function EditorPicksComponent() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(TestimonialsItems());
  }, [dispatch]);
  const { testimonialsItems, testimonialsStatus } = useSelector((state) => state.Testimonials);

  return (
    <>
      <EditorPicks>
        <HeaderHolder>
          <CommonHeaderComponent title="Testimonials" variant="h2" />
        </HeaderHolder>
        <Box className="swiperContainer">
          {testimonialsStatus === status.loading ? (
            <SkeletonLoader height={20} count={5} />
          ) : (
            <Swiper modules={[Navigation, A11y, Autoplay]} slidesPerView={1} navigation loop={true}>
              {Array.isArray(testimonialsItems) &&
                testimonialsItems.map((items) => (
                  <SwiperSlide key={items._id}>
                    <TestimonialsCardComponent id={items._id} name={items.name} talk={items.talk} date={items.createdAt} position={items.position} className="editorPicks" />
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </Box>
      </EditorPicks>
    </>
  );
}
