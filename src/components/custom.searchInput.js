import SearchSharpIcon from "@mui/icons-material/SearchSharp";

export const SearchInput = (props) => {
  // console.log("props", props);
  return (
    <div
      style={{
        border: "1px solid black",
        width: "230px",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        borderRadius: "10px",
        backgroundColor: "white",
        height: "30px",
        padding: "1px",
        outline: "none",
        marginLeft: "550px",
      }}
    >
      <SearchSharpIcon sx={{ color: "#1976d2" }} />
      <input
        style={{ border: "none", outline: "none" }}
        placeholder="search here...!"
        onChange={props.onChange}
        value={props.value}
      />
      <button
        onClick={props.onClick}
        style={{ border: "none", marginLeft: "5px", backgroundColor: "white" }}
      >
        X
      </button>
    </div>
  );
};
