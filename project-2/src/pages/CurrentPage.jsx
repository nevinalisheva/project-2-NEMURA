import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";
import "./current.css";
import Results from "./results/CastGrid.jsx";
import SelectSeasons from "../Components/SelectSeasons.jsx";
import '@splidejs/splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import AddToFavourite from "../Components/favourites/AddToFavourite.jsx";
import { MyFavourites } from "./MyFavourites.jsx";
import ScrollButton from "../Components/scrollButton";
import { Hero, Wraper, Content, Container } from './CurrentStyles';

const CurrentPage = () => {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [cast, setCast] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(true);

  // loading function

  

  useEffect(() => {
    // setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const [showImage, setShowImage] = useState([]);

  const fetchDetails = async () => {
    const data = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
    const dataDetail = await data.json();
    setDetails(dataDetail);
    // console.log(dataDetail, 'datadetail');

    const ID = dataDetail.id;
    // console.log(ID, "ID");
  

    const dataCast = await fetch(
      `https://api.tvmaze.com/shows/${ID}?embed=cast`
    );
    const castInfo = await dataCast.json();
    setCast(castInfo._embedded.cast);
    // console.log(castInfo)

    const dataSeasons = await fetch(
      `https://api.tvmaze.com/shows/${params.id}/seasons`
    );
    const seasonDetail = await dataSeasons.json();
    setSeasons(seasonDetail);

    setIsloading(false);
    // setLoading(false);
  };


  const fetchImages = async () => {
    const data = await fetch(
      `https://api.tvmaze.com/shows/${params.id}/images`
    );
    const dataDetail = await data.json();
    setShowImage(dataDetail);
  };
  // console.log(details);


  useEffect(() => {
    fetchDetails();
    fetchImages();
    // fetchSeansons();
    // console.log(seasons, "seasons");
  }, [params.id]);
  // console.log(details, "details");
  // console.log(params);
  // console.log(showImage);
  // console.log(seasons, "seasons");

  const background = showImage.filter((image) => {
    return image.type === "background";
  });
  const poster = showImage.filter((image) => {
    return image.type === "poster";
  });
  // console.log(background);

  const Hero = styled.div`
    background-image: url(${poster[0]?.resolutions.original.url
      ? poster[0]?.resolutions.original.url
      : showImage[0]?.resolutions.original.url});
    background-size: cover;
    object-fit: cover;
    text-align: center;
    background-repeat: no-repeat;
    background-position: center;
    height: 700px;
    flex: 1;
    // border: 2px solid yellow;
    border-radius: 10px;
    box-shadow: 5px 5px 15px 5px #1d1818;
    // min-width: 100%;
    // overflow: hidden;
  `;
  const Wraper = styled.section`
    display: grid;
    // margin-top: 400px;
    // background-color: green;
    // width: 100vw;
    padding: 20px;
    margin-bottom: 50px;
    justify-content: center;
    grid-template-columns: 35% 50%;
    gap: 2rem;
    align-items: center;
    // grid-area: photo;
  `;

  const Content = styled.div`
    flex: 2;
    margin-left: 20px;
    padding: 20px;
    border: none;
    background-color: #2c2b3c;
    // width: 200px;
    border-radius: 10px;
    opacity: 0.8;
    color: white;
    box-shadow: 5px 5px 15px 5px #1d1818;
    min-height: 700px;
    // width: 300px !important;
    overflow: hidden;
    text-overflow: ellipsis;
  `;

  const Container = styled.section`
    // background-color: #000;
    // margin-top: 65px;
    background-image: url(${background[0]?.resolutions.original.url
      ? background[0]?.resolutions.original.url
      : showImage[1]?.resolutions.original.url});
    background-size: cover;
    object-fit: fit;
    height: 500px;

    // background-opacity: 0.5;

    padding: 100px;
    box-shadow: 5px 5px 15px 5px #1d1818;
  `;
  const Summary = details.summary;

  return (
    <div>
      {/* <div> */}
      {loading ? (
        // <div className="loader-container" />
        <div className="current-page-container">
          {/* loading effect component */}
          <ClipLoader
            color="white"
            loading={loading}
            // cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <div className="hero2"></div>
          <Container poster={poster} showImage={showImage} background={background}></Container>
          {/* <div id="section1">Hi</div> */}
          <Wraper poster={poster} showImage={showImage} background={background}>
            <Hero poster={poster} showImage={showImage} background={background}>
              {/* <img src={showImage[5]?.resolutions.original.url} alt="" /> */}
            </Hero>

            <Content poster={poster} showImage={showImage} background={background}>
              <h1>{details.name}</h1>
              <p>
                {details.premiered?.slice(0, 4)} - {details.ended?.slice(0, 4)}
              </p>
              <p>
                <strong>{details?.rating?.average ? "Rating: " : null}</strong>
                {details?.rating?.average ? details.rating.average : null} / 10
                ⭐️
              </p>
              <p>
                <strong>{details?.genres?.length ? "Genres: " : null}</strong>
                {details.genres ? details.genres.join(", ") : null}
              </p>
              <p dangerouslySetInnerHTML={{ __html: Summary }}></p>
              <p>
                <strong>Language: </strong>
                {details.language}
              </p>
              <p>
                <strong>{details.network ? "Network: " : null}</strong>
                <a href={details.network?.officialSite}>
                  {details.network?.name ? details.network.name : null}{" "}
                </a>{" "}
                , {details.network?.country?.code}
                {/* {details.network?.officialSite} */}
              </p>
              <a href={details?.officialSite ? details?.officialSite : null}>
                {details?.officialSite ? "Official site" : null}
              </a>
              {/* <div
                onClick={() => {
                  addToFavourits(params.id);
                }}
              >
                <AddToFavourite />
              </div> */}
            </Content>
          </Wraper>
          <Results cast={cast}/>
          
          <div className="headlines" id="headlines">
          <h1>Photos</h1>
          </div>
          <div className="splideN">
          
          <section className="splide" aria-label="Splide Basic HTML Example">
         
              <Splide aria-label="My Favorite Images"  options={ {rewind: true, width: 1000, gap: '0.1rem',   type: 'loop', drag: 'free', snap: true, perPage: 4, breakpoints: { 1100: {perPage: 3, gap: '.1rem'}, 750: {perPage: 2, gap: '.1rem'}, 480: {perPage:1, gap: '.1rem'}}} }>

          {showImage.map((img, index) => {
            return (
            <div key={index}>
              <SplideSlide>
                  <a href={img.resolutions?.original?.url}><img className= "images" src={img.resolutions?.original?.url}  alt="Image 1"/></a>
              </SplideSlide>
              </div>
            )
          })}
          
              </Splide>
          
            </section>
            </div>
        </>
      )}

      {/* </div> */}
      {/* <SelectSeasons seasons={seasons} id={params.id}/> */}
      <ScrollButton />
    </div>
  );
};

export default CurrentPage;

const InfoWraper = {
  marginTop: "10rem",
  marginBottom: "5rem",
  display: "flex",
};
