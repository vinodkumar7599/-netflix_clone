import "./imageHeaderSlide.css"
import { useState } from "react";
import { useEffect } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

// export default function Data() {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };
//   return (
//     <div>
//       <h1>react</h1>
//       <Carousel responsive={responsive}>
//         <div><h1>item 1</h1></div>
//         <div><h1>item 1</h1></div>
//         <div><h1>item 1</h1></div>
//         <div></div>
//       </Carousel>
//     </div>
//   );
// }

export function ImgHeadSlide() {
  const imageHeader = [
    "https://wallpaperaccess.com/full/2355620.jpg",
    "https://www.belloflostsouls.net/wp-content/uploads/2021/08/MCUHeader.jpg",
    "https://w0.peakpx.com/wallpaper/625/268/HD-wallpaper-x-men-days-of-future-past-banner-x-men-movies-banner.jpg",
    "http://www.scififantasynetwork.com/wp-content/uploads/2015/07/fantastic-four-film-header.jpg",
    "https://4kwallpapers.com/images/wallpapers/fantastic-beasts-the-secrets-of-dumbledore-2022-movies-jude-3440x1440-7765.jpg",
    "https://images.squarespace-cdn.com/content/v1/58e1117febbd1a7ec641bbf3/1625527201498-FONLP53T65OIK9MQ6KI8/2018_header_WarForThePlanetOfTheApes.png",
    
  ];

  const [imageslider, setImageSlider] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setImageSlider(imageslider < imageHeader.length - 1 ? imageslider + 1 : 0);
      console.log(imageslider);
    }, 3000);
    return () => clearInterval(interval);
  }, [imageslider]);
  return (
      <div className="header-contaner">
        <img
          className="head-scroll-image"
          src={imageHeader[imageslider]}
          alt="img" />
      <button className="head-scroll-back-button"
        onClick={() => {
          setImageSlider((imageslider > 0 ? imageslider - 1 : imageHeader.length - 1));
        }}>
        <NavigateBeforeIcon />
      </button>
      <button className="head-scroll-next-button"
        onClick={() => {
          setImageSlider(imageslider < imageHeader.length - 1 ? imageslider + 1 : 0);
        }}>
        <NavigateNextIcon />
      </button>
    </div>
  );
}

// ----: image slider by click or more then one div

// export function ImgHeadSlide() {
//   const imageHeader = [
//     "https://www.itl.cat/pngfile/big/257-2578107_download-mobile-wallpaper-games-assassin-s-creed-for.jpg",
//     "https://wallpaper.dog/large/7419.jpg",
//     "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-2481/portrait/002481cover31066131.jpg",
//     "https://wallpapercave.com/wp/wp4110201.jpg",
//     "https://www.submarinechannel.com/wp-content/uploads/2015/08/best-superhero-movies-the-avengers-2012-Thor-Captain-America-Hulk-Iron-Man.jpg",
//     "https://as01.epimg.net/meristation_en/imagenes/2022/11/15/news/1668472871_910421_1668472919_noticia_normal.jpg",
//     "https://m.media-amazon.com/images/I/81Mahls3HnL._SX522_.jpg"
//   ]

//   const [imageslider, setImageSlider] = useState(0);
// return (
// <div>
// <div className="header-contaner">
//   <img
//     className="head-scroll-image"
//     src={imageHeader[imageslider]}
//     alt="img"
//   />
//    <img
//     className="head-scroll-image"
//     src={imageHeader[imageslider+1]}
//     alt="img"
//   />
//    <img
//     className="head-scroll-image"
//     src={imageHeader[imageslider+2]}
//     alt="img"
//   />
//   {console.log(imageHeader[imageslider],imageHeader[imageslider+1],imageHeader[imageslider+2])}
// </div>
//   <button className="head-scroll-back-button"
//     onClick={() => {
//         setImageSlider((imageslider === 0 ? 0 : imageslider-2))
//     }}>
//     back
//   </button>
//   <button className="head-scroll-next-button"
//     onClick={() => {
//       setImageSlider(imageslider === imageHeader.length-3 ? imageHeader.length-3 : imageslider + 2 );
//     }}>
//     next
//   </button>
// </div>

// );
// }