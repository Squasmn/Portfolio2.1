import "./home-component.style.scss";
import picture from "../../assets/david/DavDevProfile2.png";

export default function HomeComponent() {
  return (
    <div className="img-container">
      <img src={picture} />
    </div>
  );
}
