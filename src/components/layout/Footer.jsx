import { Link } from "react-router-dom"
import "../../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-title">ND Style</div>
            <p className="footer-social-text">KẾT NỐI</p>
            <div className="footer-social-links">
              <Link to="#" className="social-link">
                f
              </Link>
              <Link to="#" className="social-link">
                t
              </Link>
              <Link to="#" className="social-link">
                y
              </Link>
              <Link to="#" className="social-link">
                i
              </Link>
            </div>
          </div>

          <div>
            <h3 className="footer-section-title">CÔNG TY ND THỜI TRANG</h3>
            <ul className="footer-list">
              <li>Số ĐKKD: 0101234568 cấp ngày 10/05/2023 tại Sở Kế hoạch Đầu tư TP Hà Nội</li>
              <li>Địa chỉ: 123 Đại Cồ Việc, Ba Đình, Hà Nội</li>
              <li>Email: support@ndstyle.vn</li>
              <li>Hotline: 1900 6750</li>
            </ul>
          </div>

          <div>
            <h3 className="footer-section-title">VỀ CHÚNG TÔI</h3>
            <ul className="footer-list">
              <li>
                <Link to="#">Giới thiệu</Link>
              </li>
              <li>
                <Link to="#">Liên hệ</Link>
              </li>
              <li>
                <Link to="#">Tin tức</Link>
              </li>
              <li>
                <Link to="#">Hệ thống cửa hàng</Link>
              </li>
              <li>
                <Link to="#">Sản phẩm</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-section-title">DỊCH VỤ KHÁCH HÀNG</h3>
            <ul className="footer-list">
              <li>
                <Link to="#">Kiểm tra đơn hàng</Link>
              </li>
              <li>
                <Link to="#">Chính sách đổi trả</Link>
              </li>
              <li>
                <Link to="#">Chính sách bảo mật</Link>
              </li>
              <li>
                <Link to="#">Hỏi đáp thành viên</Link>
              </li>
              <li>
                <Link to="#">Đăng ký tài khoản</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-copyright">© 2025 ND Style. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

