import moment from "moment";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { apiUrl, fetchPostsWithToken } from "../services/data-fetcher";

export default function Feed(token, onLogout, username) {
  const feedItems = [
    {
      id: 1,
      // author: ,
      title: "Some Crap",
      date: moment().format("MM-DD-YYYY"),
      body: "here's some crap.  It's a long block of crap.  You'll notice it goes on foreeeeeeeeeeever.  I'm testing to see how it formatts when it needs to scroll or overflow the box I gave it.  Like I said, a super super super long post but that's ok cuz I'm testing.  It needs to be lonnnnnnnnnnnnnnnnnnnger",
    },

    {
      id: 2,
      // author: ,
      title: "Some other Crap",
      body: "and some more crap",
      date: Date(),
    },

    {
      id: 3,
      // author: ,
      title: "Some Additional Crap",
      date: moment().format("MMM YYYY"),
      body: "here's some crap.  It's a long block of crap.  You'll notice it goes on foreeeeeeeeeeever.  I'm testing to see how it formatts when it needs to scroll or overflow the box I gave it.  Like I said, a super super super long post but that's ok cuz I'm testing.  It needs to be lonnnnnnnnnnnnnnnnnnnger.  This one needs to be even longerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr than it is!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    },

    //     {
    //     id: 4,
    //     // author: ,
    //     title: "Some Crap that overflows the page",
    //     date: moment().format("MMM YYYY"),
    //     body: "here's some crap.  It's a long block of crap.  You'll notice it goes on foreeeeeeeeeeever.  I'm testing to see how it formatts when it needs to scroll or overflow the box I gave it.  Like I said, a super super super long post but that's ok cuz I'm testing.  It needs to be lonnnnnnnnnnnnnnnnnnnger.  This one needs to be even longerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr than it is!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    // },
  ];

  return feedItems.map((item) => (
    <div className="m-8 mt-0">
      <section className="">
        <p className="text-left text-base md:text-xl lg:text-xl xl:text-xl text-dark-blue">
          [ {item.title} ]
        </p>
        <p className="mb-4 text-base md:text-xl lg:text-xl xl:text-xl">
          {item.date}
        </p>

        <p
          key={item.id}
          className="h-24 overflow-y-auto text-base md:text-xl lg:text-xl xl:text-xl pb-4"
        >
          {item.body} <br></br> __________________________
        </p>
      </section>
    </div>
  ));
}
