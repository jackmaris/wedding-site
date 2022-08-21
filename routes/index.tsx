/** @jsx h */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import { useEffect } from "preact/hooks";
import withContainer from "../components/withContainer.tsx";

const Home: preact.FunctionalComponent = () => {
  return (
    <Fragment>
      <p class={tw`my-6`}>
        Jack and Angela are getting married! wow
      </p>
    </Fragment>
  );
};

export default withContainer(Home);
