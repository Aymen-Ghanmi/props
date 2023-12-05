import "./App.css";
import Newfile from "./Components/Newfile";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "40px",
      }}
      className="App"
    >
      <Newfile
        bname="Parfum de la Medina"
        btype="100ml"
        bprice={45}
        uuurl="https://ecovillage.com.tn/web/image/product.product/5232/image_1024/%5BPF0021%5D%20Diffuseur%20de%20parfum%20c%C3%A9ramique%20parfum%20de%20la%20medina%20100ml?unique=7aeed72"
        bstyle={{ color: "green" }}
      />

                       <Newfile
        bname="Vendeur de Jasmin"
        btype="100ml"
        bprice={60}
                  uuurl="https://ecovillage.com.tn/web/image/product.product/5234/image_1024/%5BPF0023%5D%20Diffuseur%20de%20parfum%20c%C3%A9ramique%20senteur%20oud%20100ml?unique=6acdfc3"
        bstyle={{ color: "      #FF7F50 " }}
      />

      <Newfile
                 bname="Parfum senteur oud"
        btype="150ml"
        bprice={50}
        uuurl="https://ecovillage.com.tn/web/image/product.product/6752/image_1024/%5BPF0640%5D%20Diffuseur%20de%20parfum%20c%C3%A9ramique%20vendeur%20de%20jasmin%20100ml?unique=f65e60b"
        bstyle={{ color: "blue" }}
      />
    </div>
  );
}

export default App;
