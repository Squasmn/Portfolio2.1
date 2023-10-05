import "./socials.style.scss";
import { ReactComponent as GithubIcon } from "../../assets/svg/icons/socials/github.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/svg/icons/socials/linkedin.svg";
import { ReactComponent as MailIcon } from "../../assets/svg/icons/socials/mail.svg";

export default function SocialsComponents() {
  return (
    <div className="socials">
      <a href="https://github.com/Squasmn?tab=repositories" target="blank">
        <GithubIcon />
      </a>
      <a href="https://LinkedIn.de" target="blank">
        <LinkedInIcon />
      </a>
      <a href="mailto:SquasmnWithem@gmail.com">
        <MailIcon />
      </a>
    </div>
  );
}
