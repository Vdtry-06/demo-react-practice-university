import { Link } from "react-router-dom"
import { Heart, ShoppingBag, User, Search } from "lucide-react"
import "../../styles/Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-left">
          <Link to="/" className="logo">
            <span className="logo-black">ND</span>
            <span className="logo-orange">Style</span>
          </Link>
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Tìm kiếm sản phẩm..." 
              className="search-input" 
            />
            <button className="search-button">
              <Search size={20} />
            </button>
          </div>
        </div>
        <div className="header-right">
          <Link to="/wishlist" className="header-icon-link">
            <Heart size={22} className="header-icon" />
            <span className="icon-text">Yêu thích</span>
          </Link>
          <Link to="/signup" className="header-icon-link">
            <User size={22} className="header-icon" />
            <span className="icon-text">Tài khoản</span>
          </Link>
          <Link to="/cart" className="header-icon-link">
            <div className="cart-icon-container">
              <ShoppingBag size={22} className="header-icon" />
              <span className="cart-count">3</span>
            </div>
            <span className="icon-text">Giỏ hàng</span>
          </Link>
        </div>
      </div>

      <nav className="container nav-container">
        <ul className="nav-list">
          {[
            { to: "/", text: "Trang chủ" },
            { to: "/nu", text: "Nữ ▾" },
            { to: "/nam", text: "Nam ▾" },
            { to: "/tre-em", text: "Trẻ Em" },
            { to: "/lien-he", text: "Liên hệ" },
            { to: "/huong-dan-hang", text: "Cửa hàng" },
            { to: "/kien-tra-don-hang", text: "Kiểm tra đơn" },
            { to: "/chinh-sach-uu-dai", text: "Ưu đãi ▾" },
          ].map((item, index) => (
            <li key={index} className="nav-item">
              <Link to={item.to} className="nav-link">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header