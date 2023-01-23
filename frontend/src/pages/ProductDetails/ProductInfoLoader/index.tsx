import ContentLoader from 'react-content-loader'

const width = () => {

    let winWidth = window.innerWidth;

    let padding = winWidth < 576 ? 50 : 80;

    return winWidth >= 1200 ?  winWidth / 100 * 45 : ((winWidth / 100) * 100) - padding;

}

const height = () => {

    let winHeight = window.innerHeight;

    return window.innerWidth >= 1200 ? winHeight / 100 * 60 : winHeight / 100 * 35;

}

const ProductInfoLoader = () => (

    <ContentLoader

        viewBox={`0 0 ${width()} ${height() + 140}`}
        height={height() + 140}
        width={width()}>

        <rect x="3" y="3" rx="10" ry="10" width={width()} height={height()} />
        <rect x="3" y={(height() + 20) * 1} rx="0" ry="0" width="500" height="50" />
        <rect x="3" y={(height() + 90) * 1} rx="0" ry="0" width="175" height="60" />

    </ContentLoader>
)

export default ProductInfoLoader;