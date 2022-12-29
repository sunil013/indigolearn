import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./index.css";

const qualificationList = [
  {
    id: "none",
    name: "Current Qualification",
  },
  {
    id: "CA",
    name: "CA",
  },
  {
    id: "BCOM",
    name: "Bcom",
  },
  {
    id: "CS",
    name: "CS",
  },
  {
    id: "CMA",
    name: "CMA",
  },
  {
    id: "OTHER",
    name: "Other",
  },
];

const interestedList = [
  {
    id: "none",
    name: "Interested in",
  },
  {
    id: "ACC1",
    name: "ACCA Level 1",
  },
  {
    id: "ACC2",
    name: "ACCA Level 2",
  },
  {
    id: "ACC3",
    name: "ACCA Level 3",
  },
];

const FormCard = () => {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [showError, setError] = useState(false);
  const [qualification, setQualification] = useState(qualificationList[0].id);
  const [level, setLevel] = useState(interestedList[0].id);
  const onChangePhone = (event) => setPhone(event.target.value);
  const onChangeEmail = (event) => setEmail(event.target.value);
  const onChangeQualification = (event) => setQualification(event.target.value);
  const onChangeLevel = (event) => setLevel(event.target.value);
  const onClickClose = () => setOpen(false);
  const onSubmitForm = (event) => {
    event.preventDefault();
    if (phone.length === 10 && qualification !== "none" && level !== "none") {
      setOpen(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <form className="form-container" onSubmit={onSubmitForm}>
      <h1 className="form-heading">
        Aspiring to be an ACCA? Get in touch with us!
      </h1>
      <input
        type="text"
        placeholder="Phone Number*"
        value={phone}
        onChange={onChangePhone}
        className="input-box"
      />
      <input
        type="email"
        placeholder="Email ID"
        value={email}
        onChange={onChangeEmail}
        className="input-box"
      />
      <select
        className="input-box"
        value={qualification}
        onChange={onChangeQualification}
      >
        {qualificationList.map((item) => (
          <option
            className="select-option"
            value={item.id}
            key={item.id}
            disabled={item.id === "none" ? true : false}
            hidden={item.id === "none" ? true : false}
            // selected={item.id === "none" ? true : false}
          >
            {item.name}
          </option>
        ))}
      </select>
      <select className="input-box" value={level} onChange={onChangeLevel}>
        {interestedList.map((item) => (
          <option
            className="select-option"
            value={item.id}
            key={item.id}
            disabled={item.id === "none" ? true : false}
            hidden={item.id === "none" ? true : false}
            // selected={item.id === "none" ? true : false}
          >
            {item.name}
          </option>
        ))}
      </select>
      <button type="submit" className="form-button">
        Request Call Back
      </button>
      {showError && <p className="error-msg">*all fields required</p>}
      <Popup
        open={open}
        closeOnDocumentClick
        onClose={onClickClose}
        className="foo-logout-popup"
      >
        <div className="popup-container">
          <p className="popup-text">Your Details are Successfully Submitted</p>
          <button
            type="button"
            onClick={onClickClose}
            className="popup-close-button"
          >
            Close
          </button>
        </div>
      </Popup>
    </form>
  );
};

export default FormCard;

//  <Popup
//           modal
//           trigger={
//             <button type="button" className="form-button">
//         Request Call Back
//       </button>
//           }
//           className="foo-logout-popup"
//         >
//           {(close) => (
//             <div className="popup-logout-container">
//               <p className="popup-msg">Are you sure, you want to logout</p>
//               <div className="popup-buttons-container">
//                 <button
//                   className="popup-close-button"
//                   type="button"
//                   onClick={() => close()}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className="popup-confirm-button"
//                   type="button"
//                   onClick={onClickLogout}
//                 >
//                   Confirm
//                 </button>
//               </div>
//             </div>
//           )}
//         </Popup>
