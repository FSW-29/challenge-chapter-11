import React, { useEffect, useState } from 'react';
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
} from "react-share";
// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
//import { useRouter } from "next/router";
import { gameDetail } from "../redux/actions/game.action";
import { useNavigate } from "react-router-dom";

export default function GameListByCategoryComponent(props) {
  /* eslint-disable react/prop-types */
  const {propsCategory, propsHandleGame} = props;
  // > router
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const shareUrl = "http://www.google.com"; // facebook gabisa kalo pake url ini

  const [chooseGame, setChooseGame] = useState();

  const dataGame = useSelector((state) => state.gameReducer);

  function handleDetail(e) {
    const arrGame = [];
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      dataGame.gameListData.forEach((element) => {
        if (element.id === parseInt(e)) {
          arrGame.push(element);
          localStorage.setItem(element.name, element.name);
        }
      });

      setChooseGame(arrGame);

      navigate("/GameDetail");
    }
  }

  useEffect(() => {
    const dataGameDetail = gameDetail(chooseGame);

    dispatch(dataGameDetail);
  }, [chooseGame, setChooseGame]);

  return (
    <>
      <h1 className="text-white mt-3 mb-3">{propsCategory}</h1> 
      <div className="row align-items-start text-center pb-3">
        {propsHandleGame ? (
          <>
            {propsHandleGame.map((el, idx) => (
              <div className="col-3" key={idx}>
                <button
                  className="rounded-3"
                  onClick={() => handleDetail(el.id)}
                  value={el.id}
                  style={{
                    background: `url(${el.image})`,
                    backgroundSize: "100% 200px",
                    backgroundRepeat: "none",
                    width: "100%",
                    height: "200px",
                    opacity: `${
                      localStorage.getItem(el.name) === el.name ? "40%" : "100%"
                    }`,
                  }}
                >
                  <h1
                    className="fw-bold"
                    style={{ color: "orange", backgroundColor: "black" }}
                  >
                    {localStorage.getItem(el.name) === el.name ? "PLAYED" : ""}
                  </h1>
                </button>
                <FacebookShareButton
                  url={shareUrl}
                  quote={el.name}
                  hashtag={"#" + el.name}
                >
                  <FacebookIcon size={40} round={true} />
                </FacebookShareButton>

                <WhatsappShareButton
                  url={shareUrl}
                  quote={el.name}
                  hashtag={"#" + el.name}
                >
                  <WhatsappIcon size={40} round={true} />
                </WhatsappShareButton>
              </div>
            ))}
          </>
        ) : (
          <h1>Loading....</h1>
        )}
      </div>
    </>
  );
}
