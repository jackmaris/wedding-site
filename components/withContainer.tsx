/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const withContainer: any = (Component: any) => (props: any) => {
  return (
    <div style={{ height: "100vh", backgroundColor: "deepskyblue" }}>
      <div
        class={tw`p-4 mx-auto max-w-screen-md`}
        style={{ backgroundColor: "#ddd" }}
      >
        <a href="/">
          <img
            width={70}
            height={70}
            src="/logo.svg"
            alt="Wedding character"
          />
        </a>
        <Component {...props} />
      </div>
    </div>
  );
};

export default withContainer;
