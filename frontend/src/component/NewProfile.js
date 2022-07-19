import React from 'react';
import apiList from "../lib/apiList";
import { SetPopupContext } from "../App";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "./newProfile.css";
import  {Button} from "@material-ui/core";
import { server } from "../lib/apiList";

const NewProfile = (props) => {
    const setPopup = useContext(SetPopupContext);
  
    const [profileDetails, setProfileDetails] = useState({
      name: "",
      education: [],
      skills: [],
      resume: "",
      profile: "",
    });
  
    const [education, setEducation] = useState([
      {
        institutionName: "",
        startYear: "",
        endYear: "",
      },
    ]);
  
    useEffect(() => {
      getData();
    }, []);
  
    const  getData = () => {
      axios
        .get(apiList.user, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          setProfileDetails(response.data);
          if (response.data.education.length > 0) {
            setEducation(
              response.data.education.map((edu) => ({
                institutionName: edu.institutionName ? edu.institutionName : "",
                startYear: edu.startYear ? edu.startYear : "",
                endYear: edu.endYear ? edu.endYear : "",
              }))
            );
          }
        })
        .catch((err) => {
          console.log(err.response.data);
          setPopup({
            open: true,
            severity: "error",
            message: "Error",
          });
        });
    };

    console.log(profileDetails);
    const name = profileDetails.name;
    let edu = "", sty = "", eny = "";
    let sk1 = "", sk2 = "", sk3 = "", sk4 = " ";
    if (profileDetails.education.length > 0) {
      edu = profileDetails.education[0].institutionName;
      sty = profileDetails.education[0].startYear;
      eny = profileDetails.education[0].endYear;
    }
    if (profileDetails.skills.length > 0) {
      sk1 = profileDetails.skills[0];
    }
    if (profileDetails.skills.length > 1) {
      sk1 = profileDetails.skills[0];
      sk2 = profileDetails.skills[1];
    }
    if (profileDetails.skills.length > 2) {
      sk1 = profileDetails.skills[0];
      sk2 = profileDetails.skills[1];
      sk3 = profileDetails.skills[2];
    }
    if (profileDetails.skills.length > 3) {
      sk1 = profileDetails.skills[0];
      sk2 = profileDetails.skills[1];
      sk3 = profileDetails.skills[2];
      sk4 = profileDetails.skills[3];
    }
    
    const getResume = () => {
      window.location = profileDetails.resume;
    };
  
    return (
      <>
        <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>

<div class="wrapper">
    <div class="left">
        <img src="https://i.imgur.com/cMy8V5j.png" alt="user" width="100"/>
        <h4>{name}</h4>
         <p> Developer</p>
    </div>
    <div class="right">
        <div class="info">
            <h3>Information</h3>
            <div class="info_data">
                 <div class="data">
                    <h4>Institution</h4>
                    <p>{edu}</p>
                 </div>
                 <div class="data">
                   <h4>From</h4>
                    <p>{sty + "-"} {eny}</p>
              </div>
            </div>
        </div>
      
      <div class="projects">
            <h3>Skills</h3>
            <div class="projects_data">
                 <div class="data">
                    <p>{sk1 + ","}{sk2}</p>
                 </div>
            </div>
        </div>
       <div style = {{margin: "0 0 10px 0"}}>
            <Button
              variant="contained"
              style = { {
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "uppercase"}}
                  color="primary"
                  onClick={() => getResume()}
            >
              Resume
           </Button>      
       </div>
      
        <div class="social_media">
            <ul>
              <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          </ul>
      </div>
    </div>
</div>
      </>
    );
  };

export default NewProfile;