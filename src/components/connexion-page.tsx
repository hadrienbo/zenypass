/** @jsx createElement */
//

import { createElement } from "../create-element";
import ConnexionCard from "./connexion-card";
import { Button, Container, Row, Col } from "reactstrap";

const HELP_LINK = "https://medium.com/zenypass-fr/tagged/aide-zenypass";

export interface ConnexionPageProps {
  onSubmit: (event: Event) => void
  onLangSelect: (lang: string) => void
  lang: string
  signup?: boolean
}

export default function ConnexionPage({
  onSubmit,
  onLangSelect,
  lang,
  signup
}: ConnexionPageProps) {
  return (
    <Container className="bg-light">
      <Row>
        <ConnexionCard
          onSubmit={onSubmit}
          onLangSelect={onLangSelect}
          lang={lang}
          signup={signup}
        />
      </Row>
      <Row className="d-flex justify-content-center mt-2">
        <a href={HELP_LINK} className="text-center mt-2">
          <small>Aide en ligne </small>
        </a>
      </Row>
      <Row className="d-flex justify-content-center mt-2">
        <div className="py-4 text-center">
          <p>
            <small>
              {signup
                ? "Vous avez déja un compte ?"
                : "Vous n'avez pas encore de compte ?"}
            </small>
          </p>
          <Button type="submit" onSubmit={onSubmit} color="info">
            {signup ? "Connexion" : "Créer un compte"}
          </Button>
        </div>
      </Row>
    </Container>
  );
}
