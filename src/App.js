import "./App.css";
import { useEffect, useState } from "react";
import { Box, color, height } from "@mui/system";
import TextField from "@mui/material/TextField";
import { Button, createMuiTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";
var FileSaver = require("file-saver");
var QRCode = require("qrcode");

const App = () => {
  const redTheme = createMuiTheme({ palette: { primary: red } });
  const blueTheme = createMuiTheme({ palette: { primary: blue } });

  var [textfield, settextfield] = useState("this is made by shibam");
  var [url, seturl] = useState(
    "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/de/91/d6/de91d68b-a3d7-cf3d-72a4-881671c17069/source/512x512bb.jpg"
  );
  var [colour, setColour] = useState("#04a9ff");

  useEffect(() => {
    // console.log("HI")
    // fetch("https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=Baaaaal")
    // .then((response)=>{
    //   console.log(response.body)
    // })
  });

  // function generette(e){
  //   e.preventDefault();
  //   console.log("generette")
  //   console.log(textfield)
  //   seturl(`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${textfield}`)
  // }

  function qrget(e) {
    e.preventDefault();

    var opts = {
      quality: 0.9,
      margin: 0.8,
      scale: 30,
      color: {
        dark: colour,
        light: "#f6f6f6",
      },
    };

    QRCode.toDataURL(textfield, opts, function (err, url) {
      console.log(url);
      seturl(url);
    });
  }

  // const downloadBase64Data = (base64String, fileName) => {
  //     let file = convertBase64ToFile(base64String, fileName);
  //     saveAs(file, fileName);
  // }

  return (
    <div className="App">
      <Box
        className="form-div"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Text to convert in Qr"
          variant="outlined"
          onChange={(e) => {
            settextfield(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Colour code you want default blue"
          variant="outlined"
          onChange={(e) => {
            setColour(e.target.value);
          }}
        />

        {/* <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" /> */}
      </Box>

      <div
        style={{
          backgroundColor: colour,
          height: 20,
          width: 70,
          marginLeft: "50vw",
          marginBottom: "1vh",
        }}
      >
        {colour}
      </div>

      <div className="Image-Div">
        <img src={url} className="image"></img>
      </div>

      <Button
        className="convert-btn"
        style={{
          borderRadius: 35,
          backgroundColor: "#21b6ae",
          padding: "8px 36px",
          fontSize: "15px",
        }}
        variant="contained"
        onClick={(e) => {
          qrget(e);
        }}
        type="submit"
      >
        Generette
      </Button>
      {url ==
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/de/91/d6/de91d68b-a3d7-cf3d-72a4-881671c17069/source/512x512bb.jpg" ? (
        <div></div>
      ) : (
        <a download="qrcode.jpg" href={url}>
          <Button
            className="download-btn"
            style={{
              borderRadius: 35,
              backgroundColor: "#95d03a",
              padding: "8px 36px",
              margin: "0px 10px",
              fontSize: "15px",
            }}
            variant="contained"
            // onClick={(e)=>{
            //   qrget(e)
            // }}
            type="submit"
          >
            Download
          </Button>
        </a>
      )}
    </div>
  );
};

export default App;
