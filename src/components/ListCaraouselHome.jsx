import React from "react";

import CaraouselHome from "../components/CaraouselHome";
import Carousel from "react-material-ui-carousel";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useVenueBySeasonIdQuery } from "../services/sportmonksApi";

const ListCaraouselHome = () => {
  const { data, error, isLoading } = useVenueBySeasonIdQuery();
  return (
    <Carousel
      indicators={false}
      navButtonsProps={{
        style: {
          backgroundColor: "cornflowerblue",
          borderRadius: 100,
        },
      }}
      navButtonsWrapperProps={{
        style: {
          bottom: "0",
          top: "unset",
        },
      }}
      NextIcon={<ArrowCircleRightIcon />}
      PrevIcon={<ArrowCircleLeftIcon />}
    >
      {error ? (
        <>Ada error di sini nih ...</>
      ) : isLoading ? (
        <>Loading data dulu yah ...</>
      ) : (
        data.data.map((caraouselItem) => (
          <CaraouselHome key={caraouselItem.id} caraouselItem={caraouselItem} />
        ))
      )}
    </Carousel>
  );
};

export default ListCaraouselHome;
