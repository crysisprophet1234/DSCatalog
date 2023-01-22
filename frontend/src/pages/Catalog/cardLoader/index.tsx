import ContentLoader from 'react-content-loader'

const ImageGrid = () => (
  <ContentLoader
    width={1500}
    height={950}
    viewBox="0 0 1500 950"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"

    style={{marginTop: '0px'}}

  >

    <rect x="12" y="0" rx="2" ry="2" width="306" height="296" />
    <rect x="358" y="0" rx="2" ry="2" width="306" height="296" />
    <rect x="704" y="0" rx="2" ry="2" width="306" height="296" />
    <rect x="1050" y="0" rx="2" ry="2" width="306" height="296" />

    <rect x="12" y="336" rx="2" ry="2" width="306" height="296" />
    <rect x="358" y="336" rx="2" ry="2" width="306" height="296" />
    <rect x="704" y="336" rx="2" ry="2" width="306" height="296" />
    <rect x="1050" y="336" rx="2" ry="2" width="306" height="296" />

    <rect x="12" y="672" rx="2" ry="2" width="306" height="296" />
    <rect x="358" y="672" rx="2" ry="2" width="306" height="296" />
    <rect x="704" y="672" rx="2" ry="2" width="306" height="296" />
    <rect x="1050" y="672" rx="2" ry="2" width="306" height="296" />

  </ContentLoader>
)

export default ImageGrid