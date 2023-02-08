import React from "react";
import SearchBox from "../../Molecules/Search Box/SearchBox";
import RightHomeTrendingBox from "../../Components/Right Home Trending Box/RightHomeTrendingBox";
import RightHomeFollowBox from "../../Components/Right Home Follow Box/RightHomeFollowBox";
import RightHomeFooter from "../../Molecules/Right Home Footer/RightHomeFooter";

function RightHomeSection() {
  return (
    <div>
      <SearchBox />
      <RightHomeTrendingBox />
      <RightHomeFollowBox />
      <RightHomeFooter />
    </div>
  );
}

export default RightHomeSection;
