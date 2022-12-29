import Header from "../Header";
import FormCard from "../FormCard";
import "./index.css";

const becomeList = [
  {
    logo:
      "https://res.cloudinary.com/sunil013/image/upload/v1672213019/Grin_alt_nq6iqi.png",
    name: "Registered Users",
    count: "249,022",
  },
  {
    logo:
      "https://res.cloudinary.com/sunil013/image/upload/v1672213019/toppng.com-open-book-icon-png-download-book-black-and-white-2316x1469_va9rfe.png",
    name: "Courses Enrolled",
    count: "65,171",
  },
  {
    logo:
      "https://res.cloudinary.com/sunil013/image/upload/v1672213019/clipart2340077_xsbnns.png",
    name: "Minutes Watched",
    count: "2,090,935,459",
  },
  {
    logo:
      "https://res.cloudinary.com/sunil013/image/upload/v1672213018/two-users_tmbobz.png",
    name: "Faculty",
    count: "8 Experts",
  },
];

const chooseUsList = [
  {
    image: "https://www.indigolearn.com/media/images/ca_concept.png",
    name: "Expert Faculty",
    text:
      "Our Faculty are subject matter expertise with practical experience. They believe in #StudentFirst principle.",
  },
  {
    image: "https://www.indigolearn.com/media/images/ca_top_faculties.png",
    name: "Complete Success Package",
    text:
      "Leading Exam Prep Destination with Video classes, Live sessions, Doubt resolution Forums, E-notes from Kaplan, MCQs, Practice tests, Webinars.",
  },
  {
    image: "https://www.indigolearn.com/media/images/ca_unlimited_views.png",
    name: "Placements",
    text:
      "Resume building workshops, mock interviews and placement drives will help you impress the top employers and get the dream job.",
  },
];

const chooseFeaturesList = [
  {
    image:
      "https://res.cloudinary.com/sunil013/image/upload/v1672213019/toppng.com-open-book-icon-png-download-book-black-and-white-2316x1469_va9rfe.png",
    name: "Levels",
    text: "Three (13 papers)",
  },
  {
    image:
      "https://res.cloudinary.com/sunil013/image/upload/v1672252211/toppng.com-icon-04-timer-icon-787x859_wjsuzm.png",
    name: "Duration",
    text: "6-30 months",
  },
  {
    image:
      "https://res.cloudinary.com/sunil013/image/upload/v1672253949/001-laptop_rygt9l.png",
    name: "Exams",
    text: "Quarterly (Online)",
  },
  {
    image:
      "https://res.cloudinary.com/sunil013/image/upload/v1672252210/toppng.com-50-px-calendar-icon-1577x1577_qe5fxa.png",
    name: "Exemptions",
    text: "Upto 9 papers",
  },
];

const knowledge = [
  "Business and Technology (BT)",
  "Management Accounting (MA)",
  "Financial Accounting (FA)",
];

const skill = [
  "Corporate and Business Law (LW)",
  "Performance Management (PM)",
  "Taxation (TX)",
  "Financial Reporting (FR)",
  "Audit and Assurance (AA)",
  "Financial Management (FM)",
];

const learnList = [
  {
    level: "Knowledge",
    paper: 3,
    list: knowledge,
  },
  {
    level: "Skill",
    paper: 6,
    list: skill,
  },
  {
    level: "Professional",
    paper: 4,
    list: knowledge,
  },
];

const placementList = [
  {
    name: "Resume Building",
    text:
      "1FIN provides professional guidance to help you create an effective resume to help you create a lasting impression.",
  },
  {
    name: "Career Counselling",
    text:
      "We provide career counselling to conducting mock interviews and aptitude tests – we will assist you at every step, all the way, we make you job ready.",
  },
  {
    name: "Jobs",
    text:
      "We will give you an edge over others with our direct corporate affiliations which will ensure that you are placed right.",
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-top-section">
        <div className="home-top-body">
          <div className="text-container">
            <h1 className="home-top-head">Become ACCA in 18 months</h1>
            <p className="become-text">
              Acquire globally recognized accountancy qualification, ACCA (also
              called as Global CA), and get placed in top MNCs & Big4s. Begin
              ACCA prep with 1FIN now.
            </p>
            <div className="mobile-card">
              <FormCard />
            </div>
            <ul className="features-container">
              {becomeList.map((item, i) => (
                <li className="features-item" key={i}>
                  <div className="features-img-container">
                    <img src={item.logo} alt="logo" className="logo-image" />
                    <p className="logo-name">{item.name}</p>
                  </div>
                  <p className="logo-count">{item.count}</p>
                </li>
              ))}
            </ul>
            <div className="home-top-buttons-container">
              <button className="btn download-button">Download Brochure</button>
              <div className="partner-container">
                <p className="partner-name">SILVER LEARNING PARTNER</p>
                <span className="partner-logo">ACCA</span>
              </div>
            </div>
          </div>
          <div className="desktop-card">
            <FormCard />
          </div>
        </div>
      </div>
      {/* < className="choose-us-section"> */}
      <div>
        <div className="choose-us-body">
          <h1 className="choose-us-head">Why Choose Us?</h1>
          <ul className="choose-cards-container">
            {chooseUsList.map((item, i) => (
              <li key={i} className="choose-card">
                <img src={item.image} alt="logo" className="choose-card-img" />
                <h1 className="choose-card-head">{item.name}</h1>
                <p className="choose-card-text">{item.text}</p>
              </li>
            ))}
          </ul>
          <ul className="choose-features-container">
            {chooseFeaturesList.map((item, i) => (
              <li key={i} className="choose-feature-card">
                <h4 className="choose-feature-head">{item.name}</h4>
                <div className="choose-feature-img-container">
                  <img
                    src={item.image}
                    alt="logo"
                    className="choose-feature-img"
                  />
                  <p className="choose-feature-text">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="choose-us-body">
          <h1 className="choose-us-head">What will you Learn in ACCA?</h1>
          <ul className="learn-cards-container">
            {learnList.map((item, i) => (
              <li className="learn-card" key={i}>
                <h4 className="learn-level">{item.level} Level</h4>
                <ul className="learn-topics">
                  {item.list.map((item, i) => (
                    <li className="learn-topic-item" key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="learn-papers">{item.paper} papers</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="placement-section">
        <div className="choose-us-body">
          <h1 className="choose-us-head">100% Placement Assistance</h1>
          <ul className="placements-container">
            {placementList.map((item, i) => (
              <li className="placement-item" key={i}>
                <h1 className="placement-name">{item.name}</h1>
                <p className="placement-text">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="home-top-section">
        <div className="home-top-body">
          <div className="text-container">
            <h1 className="home-top-head">
              Kick off your ACCA Prep journey with IndigoLearn
            </h1>
            <p className="become-text journey-text">
              Sign-in and get instant acccess to our FREE Courses
            </p>
            <div className="mobile-card">
              <FormCard />
            </div>
            <div className="partner-container">
              <p className="partner-name">SILVER LEARNING PARTNER</p>
              <span className="partner-logo">ACCA</span>
            </div>
          </div>
          <div className="desktop-card">
            <FormCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
