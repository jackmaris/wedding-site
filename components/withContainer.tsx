/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Profile from "../islands/Profile.tsx";
import Footer from "../islands/Footer.tsx";
import { Head } from "https://deno.land/x/fresh@1.0.2/runtime.ts";
const withContainer: any = (Component: any) => (props: any) => {
  return (
    <div class={tw`bg-blue-400`}>
      <Head>
        <meta name="theme-color" content="#38bdf8" />
        <style>
          {`
img.rotatable:hover {
  -webkit-animation-name: spin;
  -webkit-animation-duration: 1000ms;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: spin;
  -moz-animation-duration: 1000ms;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -ms-animation-name: spin;
  -ms-animation-duration: 1000ms;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;

  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@-ms-keyframes spin {
  from { -ms-transform: rotate(0deg); }
  to { -ms-transform: rotate(360deg); }
}
@-moz-keyframes spin {
  from { -moz-transform: rotate(0deg); }
  to { -moz-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  from { -webkit-transform: rotate(0deg); }
  to { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
}
`}
        </style>
      </Head>
      <div
        class={tw`p-4 mx-auto max-w-screen-lg `}
        style={{ backgroundColor: "#ddd" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <a href="/" class={tw`mb-1`}>
            <img
              class={"rotatable"}
              height={70}
              width={70}
              src="/logo.svg"
              alt="Wedding character"
            />
          </a>
          <Profile user={props.data?.user} />
        </div>
        <div style={{ paddingTop: "10px", minHeight: "100vh" }}>
          <Component {...props} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withContainer;
