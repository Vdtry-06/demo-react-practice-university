import { Link } from "react-router-dom"
import "../styles/Home.css"

const Home = () => {
  return (
    <main className="main-content container">
      {/* Category Circles */}
      <section className="category-section">
        <h1 className="category-section-title">Danh Mục Nổi Bật</h1>
        <div className="category-grid">
          {[
            { title: "ÁO NỮ", image: "https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { title: "VÁY", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { title: "ÁO NAM", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { title: "SƠ MI", image: "https://images.unsplash.com/photo-1598961942613-ba897716405b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { title: "QUẦN", image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { title: "ÁO KHOÁC", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { title: "GIÀY DÉP", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { title: "PHỤ KIỆN", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
          ].map((category, index) => (
            <CategoryCircle key={index} title={category.title} image={category.image} />
          ))}
        </div>
      </section>

      {/* Women's Collection */}
      <section className="collection-section">
        <div className="section-header">
          <h2 className="section-title">Bộ Sưu Tập Nữ</h2>
          <div className="section-subtitle">Khám phá phong cách mới nhất</div>
        </div>

        <div className="products-grid">
          {[
            {
              id: "1",
              title: "Đầm Lụa Nữ Đứng Ả Cổ Sơ Mi Dài Tay Xếp Ly",
              price: "469.000đ",
              originalPrice: "599.000đ",
              discount: "20%",
              isNew: true,
              image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
            {
              id: "2",
              title: "Váy Đũi Nữ Tay Dài Cổ Tàu Xòe Chân Váy Có Khăn Eo",
              price: "449.000đ",
              originalPrice: "599.000đ",
              discount: "25%",
              isNew: true,
              image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
            {
              id: "3",
              title: "Áo Len Gilet Nữ Cổ Tim Dệt Thủng",
              price: "349.000đ",
              originalPrice: "499.000đ",
              discount: "30%",
              image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
          ].map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
          <div className="product-banner">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Enchanting Dress 2024"
              className="banner-image"
            />
            <div className="banner-overlay">
              <h3 className="banner-title">BST Xuân 2025</h3>
              <p className="banner-text">Phong cách thanh lịch, hiện đại</p>
            </div>
          </div>
        </div>

        <div className="view-all-button">
          <Link to="/collections/women" className="btn-view-all">
            Xem Tất Cả
          </Link>
        </div>
      </section>
    </main>
  )
}

const CategoryCircle = ({ title, image }) => {
  return (
    <Link to="#" className="category-item">
      <div className="category-circle">
        <img src={image || "/placeholder.svg"} alt={title} className="category-image" />
      </div>
      <span className="category-title">{title}</span>
    </Link>
  )
}

const ProductCard = ({ id, title, price, originalPrice, discount, isNew = false, image }) => {
  return (
    <Link to={`/product/${id}`} className="product-card">
      <div className="product-image-container">
        <img src={image || "/placeholder.svg"} alt={title} className="product-image" />
        {isNew && <div className="product-badge">Mới</div>}
        {discount && <div className="product-discount">-{discount}</div>}
      </div>
      <div className="product-info">
        <h3 className="product-title line-clamp-2">{title}</h3>
        <div className="product-price">
          <span className="price-current">{price}</span>
          <span className="price-original">{originalPrice}</span>
        </div>
      </div>
    </Link>
  )
}

export default Home