import React from "react";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/69655998_2460695363967255_2285916117601878016_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGzL_uSvS9npxn1iNWK-VtUDQ2z3Td8M3INDbPdN3wzcsaxs7qKg4b-exOxx1-DZOG6ESdh1eRVXG0QrBu2VK_k&_nc_ohc=YXQM9CcVQMYAX-b_Ytu&_nc_ht=scontent-lhr8-1.xx&oh=00_AfABbi1yCO81QRT71K6VLlg8cCnmXBMglJrdMg3qSaad1A&oe=63F94A04"
        channel="Ugah Chibuike"
        verified
        subs="710k"
        noOfVideos={423}
        description="You can fine awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level"
      />

      <hr />

      <VideoRow
        views="2.3M"
        subs="965K"
        description="Do you want a FREE one hour training... check out the youtube channel"
        timestamps="43 seconds ago"
        channel="Chybyke Programmer"
        title="We Can Work as a Team and Build Our Future"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFVPvTKTDdp2WW-lua0m6j7r4ocC128PrLow&usqp=CAU"
      />
      <VideoRow
        views="2.3M"
        subs="965K"
        description="Do you want a FREE one hour training... check out the youtube channel"
        timestamps="43 seconds ago"
        channel="Chybyke Programmer"
        title="Lets Build a Youtube Clone with REACT JS for Free"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuK4-ya1eJRSk-7mlNpQO9TxD001EnKt5s-A&usqp=CAU"
      />
      <VideoRow
        views="2.3M"
        subs="965K"
        description="Do you want a FREE one hour training... check out the youtube channel"
        timestamps="43 seconds ago"
        channel="Chybyke Programmer"
        title="We Can Work as a Team and Build Our Future"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgF4B9XBRC4akjrcBsLeTUCaC9Fgdt63YaA&usqp=CAU"
      />
      <VideoRow
        views="2.3M"
        subs="965K"
        description="Do you want a FREE one hour training... check out the youtube channel"
        timestamps="43 seconds ago"
        channel="Chybyke Programmer"
        title="We Can Work as a Team and Build Our Future"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9gqFFnJWFKOcx_aeqQSyCajXRXI0KNsmH1Q&usqp=CAU"
      />
      <VideoRow
        views="2.3M"
        subs="965K"
        description="Do you want a FREE one hour training... check out the youtube channel"
        timestamps="43 seconds ago"
        channel="Chybyke Programmer"
        title="Lets Build a Youtube Clone with REACT JS for Free"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6G8HiT6-QCMkJOQeV8W96DkyNFOKMPxEoqQ&usqp=CAU"
      />
      <VideoRow
        views="2.3M"
        subs="965K"
        description="Do you want a FREE one hour training... check out the youtube channel"
        timestamps="43 seconds ago"
        channel="Chybyke Programmer"
        title="We Can Work as a Team and Build Our Future"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_Jgc-cD81mBack8vgQ4O8kS-lGcB0EEdBA&usqp=CAU"
      />
    </div>
  );
}

export default SearchPage;
