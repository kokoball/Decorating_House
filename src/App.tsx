import { PictureViewer } from '@components/domain';
import { ProductProvider } from '@contexts/ProductContext';

function App() {
  return (
    <>
      <ProductProvider>
        <PictureViewer />
      </ProductProvider>
    </>
  );
}

export default App;
