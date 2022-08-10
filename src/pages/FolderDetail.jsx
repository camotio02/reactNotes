import React, { useEffect } from "react";
import "./FolderDetail.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SearchIcon from "@mui/icons-material/Search";

import AppsIcon from "@mui/icons-material/Apps";
import GradingIcon from "@mui/icons-material/Grading";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LogoGradesIcon } from "../conponents/logo/logo";
import { useGlobal } from "../contexts/global";
import Api from "../Api";
import { Notes } from "../conponents/Notes";

export const FolderDetail = () => {
  const { id } = useParams();
  const [notasData, setNotasData] = useState([]);

  const { isFirstAccess, firstAccess } = useGlobal();
  const navigate = useNavigate();
  const HandleIndex = () => {
    navigate("/homeScreen");
  };
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    async function fetchData() {
      const logListNotas = await Api.listNotesFromFolder(id);
      setNotasData(logListNotas);
    }
    fetchData();
  }, []);
  const HandleWriterPage = () => {
    navigate("/writerGrade");
  };

  return (
    <>
      {isFirstAccess ? (
        <div className={"wrapper-logoGrades"} onClick={firstAccess}>
          <LogoGradesIcon />
        </div>
      ) : (
        <div className="wrapper">
          <div className="mini-wrapper">
            <div className="wrapper-logo-top">
              <div className="wrapper-logotop-widtgh">
                <div onClick={HandleIndex} className="wrapper-icon-back">
                  <ArrowBackIosIcon />
                </div>
                <div onClick={toggleClass} className="wrapper-edit-grades">
                  Editar
                </div>
              </div>
            </div>
            <div className="wrapper-h1-inputVSicon">
              <h1 className="wrapper-h1">iCloud</h1>
              <div className="wrapper-inputIcon-container">
                <div className="wrapper-inputIcon">
                  <p>
                    <SearchIcon />
                  </p>
                  <input
                    className="wrapper-input"
                    type="search"
                    placeholder="Buscar"
                  />
                </div>
              </div>
            </div>
            <div className="wrapper-gradess-container">
              {notasData?.map((item) => (
                <Notes key={item.title} {...item} />
              ))}
            </div>
            <div className="rotape-wrapper-container">
              <div className="rotape-wrapper">
                <div className="wrapper-rotape ">
                  <AppsIcon className="wrapper-AppIcon" />
                </div>
                <div className="wrapper-rotape">100 Notas</div>
                <div className="wrapper-rotape" onClick={HandleWriterPage}>
                  <GradingIcon className="wrapper-AppIcon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
