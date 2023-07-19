
import { faShip } from "@fortawesome/free-solid-svg-icons";
import Input from "../components/Upload/input";
import Header from "../Layout/Header";

function Upload() {


  return (
    <>
        <Header icon={faShip}/>
        <Input/>
    </>
  );
}

export default Upload;
