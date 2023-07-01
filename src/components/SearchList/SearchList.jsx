import "./SearchList.css";
export const SearchList = ({ searchItems}) => {

  return (
    <>
      <div className="search-list-container">
        {searchItems.map((data) => (
          <div key={data.id} className="search-list">
            <img
              src={data.image}
              alt="Img"
            />
            <p>{data.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};
