import ContentLoader from 'react-content-loader'

const width = () => {

    let winWidth = window.innerWidth;

    let padding = winWidth < 576 ? 50 : 80;

    return winWidth >= 1200 ?  ((winWidth / 100) * 45)  : ((winWidth / 100) * 100) - padding;

}

const height = () => {

    let winHeight = window.innerHeight;

    return window.innerWidth >= 1200 ? winHeight / 100 * 53 : winHeight / 100 * 35;

}

const ProductDetailsLoader = () => (

    <ContentLoader
    
        viewBox={`0 0 ${width()} ${height() + 160}`}
        height={height() + 160}
        width={width()}>

        <rect x="0" y={window.innerWidth >= 1200 ? 0 : 20} rx="10" ry="10" width={width()} height={height() + 140} />

    </ContentLoader>
)

export default ProductDetailsLoader;