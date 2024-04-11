import { useState } from "react";
import "./ImageHandler.css";
import axios from "axios";

const Imagehandler = () => {
  const [image, setImage] = useState(null);
  const [name, setname] = useState("");
  const [population, setpopulation] = useState("");
  const [capital, setcapital] = useState("");
  const [gdp, setgdp] = useState("");
  const [cmname, setcmname] = useState("");
  const [rulingparty, setrulingparty] = useState("");
  const [gdppercapita, setgdppercapita] = useState("");

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("name", name);
    formData.append("population", population);
    formData.append("capital", capital);
    formData.append("gdp", gdp);
    formData.append("cmname", cmname);
    formData.append("rulingparty", rulingparty);
    formData.append("gdppercapita", gdppercapita);
    for (var pair of formData.entries()) {
      console.log(pair[0] + " - " + pair[1]);
    }
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    axios
      .post("https://api.urtechguru.online/states", formData, config)
      .then((res) => {
        if (res.status === 200) {
          document.getElementById("tag").innerHTML = "Image Upload Successful";
        } else {
          console.log(res.status);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mainContainer">
      <div className="banner">
        <div className="bannerText">
          <p className="bannerHeaderText">CMS</p>
          <br />
          <p className="bannerSupport">
            (The One stop soutions for your content needs on Images and photos
            for codemap static GK app)
          </p>
        </div>
      </div>
      <div className="containerCMS">
        <h1 id="tag"></h1>

        <div className="formContainer" id="formContainer">
          <div className="formDiv" id="formDiv">
            <div className="uploadIcon">
              <img
                src="https://i.postimg.cc/pL0FK1Yz/upload.png"
                className="imgBanner"
              />
            </div>

            <div className="formHolder">
              <form
                method="post"
                action="/"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="name"
                  id="state"
                  placeholder="Enter State name"
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                ></input>
                <br></br>
                <br></br>

                <input
                  type="text"
                  name="population"
                  id="population"
                  placeholder="Enter population ..."
                  onChange={(e) => {
                    setpopulation(e.target.value);
                  }}
                ></input>
                <br></br>
                <br></br>

                <input
                  type="text"
                  name="capital"
                  id="capital"
                  placeholder="Enter capital city..."
                  onChange={(e) => {
                    setcapital(e.target.value);
                  }}
                ></input>
                <br></br>
                <br></br>
                <input
                  type="text"
                  name="gdp"
                  id="gdp"
                  placeholder="Enter gdp value"
                  onChange={(e) => {
                    setgdp(e.target.value);
                  }}
                ></input>
                <br></br>
                <br></br>
                <input
                  type="text"
                  name="cm"
                  id="cm"
                  placeholder="Enter cm name"
                  onChange={(e) => {
                    setcmname(e.target.value);
                  }}
                ></input>
                <br></br>
                <br></br>

                <input
                  type="text"
                  name="rulingparty"
                  id="rulingparty"
                  placeholder="Enter ruling party..."
                  onChange={(e) => {
                    setrulingparty(e.target.value);
                  }}
                ></input>
                <br></br>
                <br></br>

                <input
                  type="text"
                  name="name"
                  id="gdp"
                  placeholder="Enter gdp per capita"
                  onChange={(e) => {
                    setgdppercapita(e.target.value);
                  }}
                ></input>
                <br></br>
                <br></br>
                <label className="label">Select state map:</label>
                <br />
                <br />
                <input
                  type="file"
                  id="files"
                  name="files"
                  onChange={handleChange}
                />

                <br />
                <br />
                <div className="btnHolder">
                  <input type="submit" className="btn1" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagehandler;
