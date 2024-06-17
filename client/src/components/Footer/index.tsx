import * as F from "./FooterElements";

const Footer = () => {
  return (
    <F.FooterContainer>
      <div>

        <a
          style={F.InlineStyle.challenge}
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
        </a>{" "}
        Coded By{" "}
        <a
          style={F.InlineStyle.codedBy}
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          Yash V
        </a>
      </div>
    </F.FooterContainer>
  );
};

export default Footer;
