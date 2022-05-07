import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import {
  FacebookMessengerShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  FacebookMessengerIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import copy from "copy-to-clipboard";

const Modal = (props) => {
  const iconSize = 40;
  const copyText = () => {
    copy(props.info.url);
    props.closeModal();
  };
  return (
    <div id="overlay">
      <div className="pop-up">
        <div className="close-button">
          <FontAwesomeIcon
            onClick={props.closeModal}
            style={{ cursor: "pointer" }}
            icon={solid("xmark")}
          />
        </div>
        <div className="share-icons">
          <FacebookMessengerShareButton
            url={props.info.url}
            onClick={props.closeModal}
          >
            <FacebookMessengerIcon round={true} size={iconSize} />
          </FacebookMessengerShareButton>
          <TelegramShareButton url={props.info.url} onClick={props.closeModal}>
            <TelegramIcon round={true} size={iconSize} />
          </TelegramShareButton>
          <TwitterShareButton url={props.info.url} onClick={props.closeModal}>
            <TwitterIcon round={true} size={iconSize} />
          </TwitterShareButton>
          <WhatsappShareButton url={props.info.url} onClick={props.closeModal}>
            <WhatsappIcon round={true} size={iconSize} />
          </WhatsappShareButton>
          <FontAwesomeIcon
            onClick={copyText}
            className="copy-button"
            icon={solid("copy")}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
