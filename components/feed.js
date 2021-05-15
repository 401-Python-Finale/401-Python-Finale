import moment from "moment";

export default function Feed({ data }) {
  console.log(data)
  return data.map((item) => (
    <div className="m-8">
      <section className="">
        <p className="mb-4 text-base md:text-xl lg:text-lg xl:text-lg">
          {moment(item.created_at).format("MM-DD-YYYY")}
        </p>

        <p
          key={item.id}
          className="h-32 overflow-y-auto text-base md:text-xl lg:text-lg xl:text-xl pb-4"
        >
          {item.post} <br></br> __________________________
        </p>
      </section>
    </div>
  ));
}
