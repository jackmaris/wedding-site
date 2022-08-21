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
            height={140}
            width={140}
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
