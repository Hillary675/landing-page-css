import { CheckIcon } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const DataScience = (): JSX.Element => {
  // Program information data
  const programInfo = [
    {
      title: "Mã ngành",
      value: "7460108",
    },
    {
      title: "Thời gian đào tạo",
      value: "Tối thiểu 3 năm theo quy định",
    },
    {
      title: "Tổ hợp môn",
      combinations: [
        { code: "A00", subjects: "Toán, Vật lý, Hóa học" },
        { code: "A01", subjects: "Toán, Vật lý, Tiếng Anh" },
        { code: "D01", subjects: "Toán, Ngữ văn, Tiếng Anh" },
        { code: "D07", subjects: "Toán, Hóa học, Tiếng Anh" },
      ],
    },
  ];

  // Program objectives data
  const objectives = [
    {
      title: "Kiến thức nền tảng vững chắc",
      description:
        "Đào tạo chuyên sâu về các lĩnh vực cụ thể, đáp ứng nhu cầu xã hội.",
    },
    {
      title: "Chú trọng thực hành",
      description:
        "Chương trình học song song với cùng các hoạt động thực hành ngay trên lớp, giúp sinh viên áp dụng kiến thức một cách linh hoạt hiệu quả.",
    },
    {
      title: "Phát triển tư duy và đạo đức nghề nghiệp",
      description:
        "Rèn luyện tư duy logic, sáng tạo và khả năng giải quyết vấn đề.",
    },
  ];

  // Program structure data
  const programStructure = [
    {
      title: "Kiến thức giáo dục đại cương",
      credits: "25 tín chỉ",
    },
    {
      title: "Kiến thức giáo dục chuyên nghiệp",
      credits: "83 tín chỉ",
    },
    {
      title: "Kiến thức chuyên ngành",
      credits: "",
    },
    {
      title: "Thực tập và tốt nghiệp",
      credits: "12 tín chỉ",
    },
  ];

  // Graduate outcomes data
  const outcomes = [
    {
      title: "Ứng dụng vào thực tiễn",
      description:
        "Áp dụng các kiến thức chuyên môn nhất định vào các lĩnh vực kinh tế, xã hội, khoa học và công nghệ.",
    },
    {
      title: "Thành thạo kỹ năng",
      description:
        "Rèn luyện kỹ năng sử dụng các công cụ, phần mềm chuyên dụng trong lĩnh vực khoa học dữ liệu.",
    },
    {
      title: "Tinh thần trách nhiệm",
      description:
        "Mang tinh thần trách nhiệm cao với nghề nghiệp, không ngừng nỗ lực cải thiện bản thân, nâng cao trình độ, học tập cả đời.",
    },
  ];

  // Career opportunities data
  const careerOpportunities = [
    "Nhà phân tích dữ liệu (Data Analyst)",
    "Kỹ sư dữ liệu (Data Engineer)",
    "Cán bộ khoa học dữ liệu, quản lý, điều hành trong lĩnh vực công nghệ thông tin.",
    "Cán bộ nghiên cứu, cán bộ giảng dạy về công nghệ thông tin tại các Viện, Trung tâm nghiên cứu và các Cơ sở đào tạo.",
  ];

  // Contact information data
  const contactInfo = [
    {
      title: "Email",
      value: "ut-hcmc@ut.edu.vn",
    },
    {
      title: "Phòng Đào Tạo",
      value: "0283 8992862",
    },
    {
      title: "Tuyển sinh",
      value: "028 3512 8986",
    },
    {
      title: "Văn thư",
      value: "028 3899 1373",
    },
  ];

  // Campus locations data
  const campusLocations = [
    "Cơ sở 1: Số 2, Đường Võ Oanh, phường 25, Q. Bình Thạnh, TP.HCM",
    "Cơ sở 2: Số 10 đường số 12, KP3, P. An Khánh, TP. Thủ Đức, TP.HCM",
    "Cơ sở 3: Số 70 đường Tô Ký, phường Tân Chánh Hiệp, quận 12, TP.HCM",
  ];

  return (
    <div className="data-science-container">
      <div className="data-science-wrapper">
        {/* Header */}
        <header className="header">
          <h1 className="header-title">
            TRƯỜNG ĐẠI HỌC GIAO THÔNG VẬN TẢI <br />
            THÀNH PHỐ HỒ CHÍ MINH
          </h1>
          <p className="header-subtitle">
            UNIVERSITY OF TRANSPORT HO CHI MINH CITY
          </p>
          <div className="search-icon">
            <img
              className="search-icon-img"
              alt="Search"
              src="public/search.png"
            />
          </div>
        </header>

        {/* Hero Banner */}
        <section className="hero-banner">
          <div className="hero-content">
            <h2 className="hero-title">
              KHOA HỌC DỮ LIỆU
            </h2>
            <p className="hero-description">
              Khoa học dữ liệu là một trong những ngành mới của công nghệ trong
              tương lai.
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="intro-section">
          <div className="intro-content">
            <div className="intro-header">
              <h2 className="intro-title">
                Giới thiệu chung
              </h2>
              <Separator className="intro-separator" />
            </div>
            <p className="intro-text">
              Khoa học Dữ liệu được xây dựng và triển khai nhằm mục tiêu đào tạo
              cử nhân ngành Khoa học Dữ liệu có phẩm chất chính trị vững vàng,
              có ý thức tổ chức kỷ luật, đạo đức nghề nghiệp; có năng lực thực
              hành nghề nghiệp gồm kiến thức cơ bản và chuyên sâu về chuyên
              ngành; có phương pháp tư duy, năng lực tự nghiên cứu và phong cách
              làm việc hiện đại, đáp ứng các yêu cầu về nghiên cứu phát triển và
              có khả năng phân tích dữ liệu, ứng dụng các kỹ thuật của trí tuệ
              nhân tạo để khám phá dữ liệu, hỗ trợ ra quyết định, xây dựng chiến
              lược và thúc đẩy sự chuyển đổi số và kinh doanh số tại các tổ chức
              doanh nghiệp đạt lợi thế cạnh tranh trong môi trường hội nhập toàn
              cầu.
            </p>
          </div>
          <div className="intro-image-container">
            <div className="intro-image-bg"></div>
            <img
              className="intro-image"
              alt="Data Science Visualization"
              src="public/image-3.png"
            />
          </div>
        </section>

        {/* Program Information */}
        <section className="program-info-section">
          <div className="program-info-item">
            <h3 className="program-info-title">
              {programInfo[0].title}
            </h3>
            <p className="program-info-value">
              {programInfo[0].value}
            </p>
          </div>
          <div className="program-info-item">
            <h3 className="program-info-title">
              {programInfo[1].title}
            </h3>
            <p className="program-info-value">
              {programInfo[1].value}
            </p>
          </div>
          <div className="program-info-item">
            <h3 className="program-info-title">
              {programInfo[2].title}
            </h3>
            <div className="program-combinations">
              {programInfo[2]?.combinations?.map((combo, index) => (
                <p
                  key={index}
                  className="program-combo"
                >
                  <span className="program-combo-code">{combo.code}: </span>
                  <span className="program-combo-subjects">{combo.subjects}</span>
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Program Objectives */}
        <section className="objectives-section">
          <div className="objectives-content">
            <h2 className="objectives-title">
              Mục tiêu của chương trình đào tạo
            </h2>
            <p className="objectives-description">
              Chương trình đào tạo của ngành Khoa học dữ liệu luôn cân bằng được
              nhu cầu về tri thức và thực tế của sinh viên.
            </p>

            <div className="objectives-cards">
              {objectives.map((objective, index) => (
                <Card key={index} className="objective-card">
                  <CardContent className="objective-card-content">
                    <h3 className="objective-card-title">
                      {objective.title}
                    </h3>
                    <Separator className="objective-card-separator" />
                    <p className="objective-card-description">
                      {objective.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Graduate Outcomes */}
        <section className="outcomes-section">
          <h2 className="outcomes-title">
            Năng lực đầu ra
          </h2>
          <Separator className="outcomes-separator" />

          <div className="outcomes-container">
            <div className="outcomes-intro">
              <h3 className="outcomes-intro-title">
                Sau khi hoàn thành chương trình học, sinh viên ngành Khoa học dữ
                liệu có thể
              </h3>
              <img
                className="outcomes-image"
                alt="Data Science Students"
                src="public/image-2.png"
              />
            </div>

            <div className="outcomes-list">
              {outcomes.map((outcome, index) => (
                <div key={index} className="outcome-item">
                  <h3 className="outcome-title">
                    {outcome.title}
                  </h3>
                  <p className="outcome-description">
                    {outcome.description}
                  </p>
                  {index < outcomes.length - 1 && (
                    <Separator className="outcome-separator" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Structure */}
        <section className="structure-section">
          <div className="structure-header">
            <h2 className="structure-title">
              Cấu trúc chương trình học
            </h2>
            <div className="structure-credits">
              <p className="structure-credits-text">
                Tổng số tín chỉ: 120 tín chỉ
              </p>
            </div>
          </div>

          <div className="structure-content">
            <div className="structure-items">
              {programStructure.map((item, index) => (
                <div
                  key={index}
                  className="structure-item"
                > 
                  <p className="structure-item-text">
                    {item.title}
                    {item.credits && `: ${item.credits}`}
                  </p>
                </div>
              ))}
            </div>
            <div className="structure-image-container">
              <img
                className="structure-image"
                alt="Program Structure"
                src="public/image-1.png"
              />
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="career-section">
          <h2 className="career-title">
            Cơ hội việc làm
          </h2>

          <div className="career-intro">
            Sau khi tốt nghiệp chuyên ngành Khoa học dữ liệu, sinh viên của
            ngành có có thể đạt các vị trí phù hợp:
          </div>

          <div className="career-separator"></div>

          <div className="career-opportunities">
            {careerOpportunities.map((opportunity, index) => (
              <div key={index} className="career-opportunity">
                <CheckIcon className="career-check-icon" />
                <p className="career-opportunity-text">
                  {opportunity}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-header">
              <img
                className="footer-logo"
                alt="University Logo"
                src="public/image-3-1.png"
              />

              <div className="footer-info">
                <h3 className="footer-title">
                  TRƯỜNG ĐẠI HỌC GIAO THÔNG VẬN TẢI THÀNH PHỐ HỒ CHÍ MINH
                </h3>

                <div className="footer-contact">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="footer-contact-item">
                      <p className="footer-contact-label">
                        {info.title}
                      </p>
                      <p className="footer-contact-value">
                        {info.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="footer-locations">
              {campusLocations.map((location, index) => (
                <p
                  key={index}
                  className="footer-location"
                >
                  {location}
                </p>
              ))}
            </div>

            <div className="footer-social">
              <div className="footer-social-spacer"></div>
              <div className="footer-social-icons">
                <img
                  className="footer-social-icon"
                  alt="Facebook"
                  src="public/facebook.svg"
                />
                <img
                  className="footer-social-icon"
                  alt="Youtube"
                  src="public/youtube.svg"
                />
              </div>
            </div>

            <Separator className="footer-separator" />

            <div className="footer-copyright">
              <p className="footer-copyright-text">
                © Bản quyền 2014. Trường Đại học Giao thông vận tải TP. HCM.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
