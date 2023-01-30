import ContentLoader from 'react-content-loader'
import './CardLoader.css'

function width() {

  let size = window.innerWidth;

  if (size >= 1400) {
    return '306';
  }

  if (size >= 1200) {
    return '261';
  }

  if (size >= 992) {
    return '295';
  }

  if (size >= 768) {
    return '336';
  }

  if (size >= 576) {
    return '246'
  }

  if (size < 576) {
    return size - 24;

  }

  return 0;

}

function widthMulti() {

  let size = window.innerWidth;

  if (size >= 1200) {
    return ((+width() + 30) * 4);
  }

  if (size >= 992) {
    return ((+width() + 30) * 3)
  }

  if (size >= 576) {
    return ((+width() + 30) * 2)
  }

  if (size < 576) {
    return width();

  }

}


const ImageGrid = () => (

  <div className="card-loader">
    <ContentLoader
      width={widthMulti()}
      height={950}
      viewBox={`0 0 ${widthMulti()} 950`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      speed={0.5}
      style={{ marginTop: '0px' }}

    >

      <rect x="0" y="0" rx="2" ry="2" width={width()} height="296" />
      <rect x={(+width() + 30) * 1} y="0" rx="2" ry="2" width={width()} height="296" />
      <rect x={(+width() + 30) * 2} y="0" rx="2" ry="2" width={width()} height="296" />
      <rect x={(+width() + 30) * 3} y="0" rx="2" ry="2" width={width()} height="296" />

      <rect x="0" y="336" rx="2" ry="2" width={width()} height="296" />
      <rect x={(+width() + 30) * 1} y="336" rx="2" ry="2" width={width()} height="296" />
      <rect x={(+width() + 30) * 2} y="336" rx="2" ry="2" width={width()} height="296" />
      <rect x={(+width() + 30) * 3} y="336" rx="2" ry="2" width={width()} height="296" />

      <rect x="0" y="672" rx="2" ry="2" width={width()} height="296" />
      <rect x={(+width() + 30) * 1} y="672" rx="2" ry="2" width={width()} height="296" />
      <rect x={(+width() + 30) * 2} y="672" rx="2" ry="2" width={width()} height="296" />
      <rect x={(+width() + 30) * 3} y="672" rx="2" ry="2" width={width()} height="296" />

    </ContentLoader>
  </div>
)

export default ImageGrid