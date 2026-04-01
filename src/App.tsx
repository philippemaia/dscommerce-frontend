import './App.css'
import HeaderClient from './components/HeaderClient/index';
import ButtonPrimary from './components/ButtonPrimary/index';
import ButtonInverse from './components/ButtonInverse/index';
import ProductDetailsCard from './components/ProductDetailsCard/index';

export default function App() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard />
          <div class="dsc-btn-page-container">
              <ButtonPrimary />
              <ButtonInverse />
          </div>
        </section>
      </main>
    </>
  );
}