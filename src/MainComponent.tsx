import { Footer } from "./Footer";
import { ParagraphLorem } from "./Paragraphs";
import { List, Table, Text } from "./Section";

export function MainComponent()
{
    return (
        <>
            <List />
            <Table />
            <ParagraphLorem />
            <Text />
            <Footer />
        </>
    )
}