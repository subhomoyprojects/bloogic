import { HeaderHolder } from "../style/CommonHeaderStyle";
import { EditorPicks } from "../style/LatestArticlesHolderStyle";
import CommonCardTwoComponent from "./CommonCardTwoComponent";
import CommonHeaderComponent from "./CommonHeaderComponent";

export default function EditorPicksComponent() {
  return (
    <>
      <EditorPicks>
        <HeaderHolder>
          <CommonHeaderComponent title="Testimonials" variant="h2" />
        </HeaderHolder>
        <CommonCardTwoComponent className="editorPicks" />
      </EditorPicks>
    </>
  );
}
