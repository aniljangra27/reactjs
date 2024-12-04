import Intro1  from "./Intro1";
import Intro2 from "./Intro2";
import Intro3 from "./Intro3";
import './sections.css';

const data = {
  Intro1Heading : "I've become a React developer!!!",
  Intro1Paragraph:"I've completed the React Basics course and I'm happy to announce that I'm now a Junior React Developer!"
}
function Article() {
    return (
    <section>
      <article><Intro1 heading={data.Intro1Heading} paraph={data.Intro1Paragraph}/></article>
      <article><Intro2/></article>
      <article><Intro3/></article>
    </section>
    );
};

export default Article;