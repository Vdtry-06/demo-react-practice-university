"use client"

import { useState } from "react"
import { Heart, Share2, Minus, Plus, Truck, ArrowLeft, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import "../styles/ProductDetail.css"

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("pink")
  const [selectedSize, setSelectedSize] = useState("S")
  const [currentImageIndex, setCurrentImageIndex] = useState(0) // Thêm state để theo dõi chỉ số ảnh hiện tại

  const images = [
    "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2m6pauonmkm3d@resize_w900_nl.webp",
    "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m44h5k4qudov92@resize_w900_nl.webp",
    "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m44h5v3kskv4a7@resize_w900_nl.webp",
    "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2if1gd3q1f8c8@resize_w900_nl.webp",
  ]

  const increaseQuantity = () => setQuantity((prev) => prev + 1)
  const decreaseQuantity = () => quantity > 1 && setQuantity((prev) => prev - 1)

  // Hàm chuyển ảnh trước
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  // Hàm chuyển ảnh tiếp theo
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  // Khi nhấn thumbnail, cập nhật currentImageIndex
  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="product-detail container">
      <div className="product-layout">
        {/* Product Images */}
        <div className="product-images">
          <div className="product-thumbnails">
            <div className="thumbnail-list">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail-item ${currentImageIndex === index ? "selected" : ""}`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img src={image} alt={`Thumbnail ${index}`} className="thumbnail-image" />
                </div>
              ))}
            </div>
          </div>

          <div className="product-main-image">
            <img src={images[currentImageIndex]} alt="Main Product" className="main-image" />
            <button className="image-nav-button image-nav-prev" onClick={handlePrevImage}>
              <ArrowLeft size={16} />
            </button>
            <button className="image-nav-button image-nav-next" onClick={handleNextImage}>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info">
          <h1 className="product-title">Áo Len Gilet Nữ Cổ Tim Dệt Thủng</h1>
          <div className="product-meta">
            <span className="status-label">Tình trạng: <span className="status-value">Còn hàng</span></span>
            <span className="product-code">Mã: ND-7834</span>
          </div>

          <div className="product-price-container">
            <span className="product-current-price">486.000đ</span>
            <span className="product-original-price">610.000đ</span>
          </div>

          <div className="product-description">
            Áo len gilet nữ cổ tim dệt thủng với thiết kế tinh tế, chất liệu len mềm mại, thoáng khí, phù hợp cho mùa lạnh.
          </div>

          {/* Color Selection */}
          <div className="product-options">
            <div className="option-label">
              Màu sắc: {selectedColor === "pink" ? "Hồng Đào" : selectedColor === "white" ? "Trắng" : selectedColor === "gray" ? "Xám" : "Đen"}
            </div>
            <div className="color-options">
              <div
                className={`color-option color-pink ${selectedColor === "pink" ? "selected" : ""}`}
                onClick={() => setSelectedColor("pink")}
              ></div>
              <div
                className={`color-option color-white ${selectedColor === "white" ? "selected" : ""}`}
                onClick={() => setSelectedColor("white")}
              ></div>
              <div
                className={`color-option color-gray ${selectedColor === "gray" ? "selected" : ""}`}
                onClick={() => setSelectedColor("gray")}
              ></div>
              <div
                className={`color-option color-black ${selectedColor === "black" ? "selected" : ""}`}
                onClick={() => setSelectedColor("black")}
              ></div>
            </div>
          </div>

          {/* Size Selection */}
          <div className="product-options">
            <div className="option-label">Kích cỡ: {selectedSize}</div>
            <div className="size-options">
              {["S", "M", "L"].map((size) => (
                <div
                  key={size}
                  className={`size-option ${selectedSize === size ? "selected" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="quantity-container">
            <div className="quantity-controls">
              <button className="quantity-button" onClick={decreaseQuantity}><Minus size={14} /></button>
              <input type="text" value={quantity} readOnly className="quantity-input" />
              <button className="quantity-button" onClick={increaseQuantity}><Plus size={14} /></button>
              <button className="share-button"><Share2 size={14} /> Chia sẻ</button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="btn-add-to-cart"><Heart size={16} /> Thêm vào giỏ</button>
            <button className="btn-buy-now">Mua ngay</button>
          </div>

          {/* Additional Info */}
          <div className="product-additional-info">
            <div className="product-features">
              <div className="feature-item"><Truck size={14} /> Giao hàng toàn quốc</div>
              <div className="feature-item"><span className="feature-icon">$</span> Miễn phí giao hàng</div>
              <div className="feature-item"><span className="feature-icon">↺</span> Đổi trả 7 ngày</div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="related-products">
        <h2 className="related-title">Sản Phẩm Liên Quan</h2>
        <div className="related-grid">
          {[
            { id: "4", title: "Túi Xách Nữ Cling Số", price: "499.000đ", image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { id: "5", title: "Áo Khoác Da Lộn Nam", price: "1.860.000đ", originalPrice: "2.480.000đ", discount: "25%", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { id: "6", title: "Áo Polo Nam Phối Màu", price: "410.000đ", originalPrice: "550.000đ", discount: "25%", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { id: "7", title: "Áo Polo Nam Basic", price: "499.000đ", originalPrice: "650.000đ", discount: "20%", image: "https://images.unsplash.com/photo-1598961942613-ba897716405b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
          ].map((product) => (
            <RelatedProduct key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}

const RelatedProduct = ({ id, title, price, originalPrice, discount, image }) => {
  return (
    <Link to={`/product/${id}`} className="related-product-card">
      <img src={image} alt={title} className="related-product-image" />
      <h3 className="related-product-title">{title}</h3>
      <div className="related-product-price">
        <span className="price-current">{price}</span>
        {originalPrice && <span className="price-original">{originalPrice}</span>}
        {discount && <span className="price-discount">-{discount}</span>}
      </div>
    </Link>
  )
}

export default ProductDetail