import { HeaderHolder } from "../style/CommonHeaderStyle";
import { EditorPicks } from "../style/LatestArticlesHolderStyle";
import CommonCardTwoComponent from "./CommonCardTwoComponent";
import CommonHeaderComponent from "./CommonHeaderComponent";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { TestimonialsItems } from "../redux/slice/TestimonialsSlice";

export default function EditorPicksComponent() {
  const dispatch = useDispatch();
  const { testimonialsItems } = useSelector((state) => state.Testimonials);
  useEffect(() => {
    dispatch(TestimonialsItems());
  }, [dispatch]);

  return (
    <>
      <EditorPicks>
        <HeaderHolder>
          <CommonHeaderComponent title="Testimonials" variant="h2" />
        </HeaderHolder>
        <Box className="swiperContainer">
          <Swiper modules={[Navigation, A11y, Autoplay]} slidesPerView={1} navigation loop={true}>
            {Array.isArray(testimonialsItems) &&
              testimonialsItems.map((items) => (
                <SwiperSlide key={items._id}>
                  <CommonCardTwoComponent className="editorPicks" />
                </SwiperSlide>
              ))}
          </Swiper>
        </Box>
      </EditorPicks>
    </>
  );
}
