/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Profile from "../islands/Profile.tsx";

const withContainer: any = (Component: any) => (props: any) => {
  return (
    <div class={tw`bg-blue-400`}>
      <div
        class={tw`p-4 mx-auto max-w-screen-md `}
        style={{ backgroundColor: "#ddd", height: "100vh" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <a href="/">
            <img
              height={140}
              width={140}
              src="/logo.svg"
              alt="Wedding character"
            />
          </a>
          <Profile user={props.data?.user} />
        </div>
        <div style={{ paddingTop: "10px" }}>
          <Component {...props} />
        </div>
      </div>
    </div>
  );
};

export default withContainer;
