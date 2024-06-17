import * as F from "./FooterElements";

const Footer = () => {
  return (
    <F.FooterContainer>
      <div>

        <a
          href="https://www.frontendmentor.io/solutions"
          style={F.InlineStyle.challenge}
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
        </a>{" "}
        Coded By{" "}
        <a
          href="https://www.frontendmentor.io/profile/a331998513"
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
