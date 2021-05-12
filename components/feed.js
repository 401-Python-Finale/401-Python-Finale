import moment from "moment"

export default function Feed() {
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
            date: Date()
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
        <div className="mr-24" >
            <section className="border-b-2 border-gray max-h-48">
                <p className="text-left text-lg text-dark-blue pt-4">[ {item.title} ]</p>
                <p className="pb-4">{item.date}</p>


                <p key = {item.id} className="pb-4 h-1/6">
                    {item.body}
                </p>
            </section>
        </div>
    ));

}
