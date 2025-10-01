import Accordion from "./components/accordion/Accordion";
import SearchableList from "./components/searchList/SearchableList";
import Place from "./Place";
import { PLACES } from "./Places";
// import AccordionItem from "./components/accordion/AccordionItem";

function App() {
  return <main>
    <section>
      <h2>work with us??</h2>
      <Accordion className={"accordion"}>
        <Accordion.Item id={"work"} title={"experaince"} className={"accordion-item"}>
          <article>
            <p>we are the best</p>
            <p>you know what i mean</p>
          </article>
        </Accordion.Item>
        <Accordion.Item id={"experiance"} title={"hard work"} className={"accordion-item"}>
          <article>
            <p>we are the best</p>
            <p>you know what i mean</p>
          </article>
        </Accordion.Item>
      </Accordion>
    </section>
    <section>
      <SearchableList items={PLACES} keyGenerator={(item) => item.id}>
        {(item) => <Place item={item}/>}
      </SearchableList>
      <SearchableList items={['item1', 'item2']} keyGenerator={(item) => item}>
        {(item) => {item}}
      </SearchableList>
    </section>
  </main>;
}

export default App;
