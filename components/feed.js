

export default function Feed() {
    const feedItems = [
        {
            id: 1,
            // author: ,
            title: "Some Crap",
            body: "here's some crap",
        },

        {
            id: 2,
            // author: ,
            title: "Some other Crap",
            body: "and some more crap",
        },
    ];

    return feedItems.map((item) => (
        <div>
            <table class="">
                <thead class="">
                    <tr>
                        <th>{item.title}</th>
                    </tr>
                </thead>


                <tbody>
                    <td
                        key = {item.id}
                        class="overflow-y-auto h-32"
                        >
                        {item.body}
                    </td>

                </tbody>
            </table>
        </div>
    ));
}
