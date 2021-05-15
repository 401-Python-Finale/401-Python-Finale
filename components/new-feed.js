
export default function NewsFeed1() {
const myArray1 = [
  "https://www.technewsworld.com/perl/section/tech-blog/",
  "https://blog.codinghorror.com/",
  "https://hackaday.com/",
  "https://github.blog/category/engineering/",
  "https://www.wired.com",
  "https://mashable.com/",
  "https://venturebeat.com/",
  "https://9to5mac.com/",
  "https://hackernoon.com/",
  "https://www.digitaltrends.com/",
  "https://www.howtogeek.com/",
  "https://siliconangle.com/",
  "https://www.computerworld.com/",
  "https://www.techdirt.com/",
  "https://www.techspot.com/",
  "https://informationweek.com/"
];

let randomSite1 = myArray1[Math.floor(Math.random()*myArray1.length)];

return(
  <div >
    <div className="h-20"></div>
    <div className="my-4 mx-4 md:mx-16 lg:mx-16 xl:mx-16">
      <iframe   title="NewsFeed" src={randomSite1} width="600" height="500" ></iframe>
    </div>
  </div>
)
}

