import { ReactNode } from "react";

import Container from "../layout/Container";
import KnowledgeHeader from "./KnowledgeHeader";
import KnowledgeBanner from "./KnowledgeBanner";
import KnowledgeBody from "./KnowledgeBody";
import KnowledgeMeta from "./KnowledgeMeta";
import KnowledgeRelated from "./KnowledgeRelated";
import { KnowledgeObject } from "@/types/knowledge-object";

interface Props {
    object: KnowledgeObject;
}

export default function KnowledgeLayout({ object }: Props) {
    return (
        <>
            <KnowledgeBanner object={object} />

            <Container className="py-20">

                <KnowledgeHeader object={object} />

                <div className="mt-16 grid gap-16 lg:grid-cols-[minmax(0,1fr)_340px]">

                    <KnowledgeBody object={object} />

                    <aside className="sticky top-28 h-fit">

                        <KnowledgeMeta object={object} />

                    </aside>

                </div>

                <div className="mt-28">

                    <KnowledgeRelated object={object} />

                </div>

            </Container>
        </>
    );
}