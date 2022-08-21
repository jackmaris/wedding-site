/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        minHeight: "40px",
        lineHeight: "40px",
        backgroundColor: "#ddd",
      }}
      // class={tw`bg-gray-200`}
    >
      <p style={{ margin: "0" }}>
        Check out the site on{" "}
        <a href="https://github.com/jackmaris/wedding-site/" target="_blank">
          Github
        </a>, if you want to
      </p>
    </div>
  );
};

export default Footer;
