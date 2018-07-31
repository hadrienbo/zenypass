/** @jsx createElement */
//

import { createElement } from "../create-element";
import RecordField from "./record-field";
import LangDropdown from "./lang-dropdown";
import {
  Card,
  Button,
  CardTitle,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  FormFeedback
} from "reactstrap";

const INFO_LINK = "https://medium.com/zenypass-fr";

export interface ConnexionCardProps {
  onSubmit: (event: Event) => void
  onLangSelect: (lang: string) => void
  lang: string
  signup?: boolean
  error?: string
}

export default function ({
  onSubmit,
  onLangSelect,
  signup, // boolean
  error, // string
  lang // string
}: ConnexionCardProps) {
  return (
    <Card
      body
      outline
      color="info"
      className="d-flex justify-content-center mt-5"
    >
      <CardTitle className="text-center pt-4">
        {signup
          ? "Créez votre compte ZenyPass"
          : "Connexion à votre compte ZenyPass"}
      </CardTitle>
      <CardBody className="mt-2">
        <Form id="ConnexionForm" onSubmit={onSubmit}>
          <EmailFormGroup />
          {signup ? <PasswordFormGroup /> : null}
          <PasswordFormGroup error={error} />
        </Form>
        <div className="text-center">
          {signup ? (
            <div><small>
              Pour plus de sécurité, choisissez un mot de passe exclusif que
              vous n'utilisez pas ailleurs, et assurez-vous de ne pas l'oublier
              ou le perdre. <br/>
              <a href={INFO_LINK}>
                {" "}
                <u>Plus d'informations... </u>
              </a></small>
            </div>
          ) : (
            ""
          )}
        </div>
      </CardBody>
      <CardFooter className="border-0 bg-white d-flex justify-content-between ">
        <LangDropdown onSelect={onLangSelect}/>
        <Button type="submit" form="ConnexionForm" color="info">
          {signup ? "Créer un compte" : "Connexion"}
        </Button>
      </CardFooter>
    </Card>
  );
}

function EmailFormGroup() {
  return (
    <FormGroup>
      <RecordField className="mb-2" type="email" />
    </FormGroup>
  );
}

function PasswordFormGroup({ error }: { error?: string }) {
  return (
    <FormGroup>
      <RecordField
        className="mb-2"
        type="password"
        icon="fa-lock"
        invalid={!!error}
      />
      <FormFeedback>error</FormFeedback>
    </FormGroup>
  );
}
