import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
export default function Gallery() {
  const [cats, setCats] = useState([]);
  // const loadePhotos = useLoaderData();
  const [photos, setPhotos] = useState([]);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCats(data));
  }, []);
  const handleView = (name) => {
    setFilter(name);
  };
  useEffect(() => {
    fetch("./photos.json")
      .then((res) => res.json())
      .then((data) => {
        if (filter === "all") {
          setPhotos(data);
        } else {
          const filteredPhotos = data.filter((photo) => photo.name === filter);
          setPhotos(filteredPhotos);
        }
      });
  }, [filter]);

  return (
    <div className="container mx-auto px-2 lg:px-0">
      <div className="">
        <div className="overflow-x-auto snap-x flex  flex-nowrap py-5 space-x-8">
          {cats.map((cat) => (
            <button
              onClick={() => handleView(cat.name)}
              key={cat.id}
              className="flex-none py-2 px-3 text-[#ff0052] rounded-md"
            >
              {cat.category}
            </button>
          ))}
        </div>
        <div className="my-5">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry columnsCount={3} gutter="10px">
              {photos.map((image, i) => (
                <>
                  <img
                    key={i}
                    src={image.src}
                    style={{ width: "100%", display: "block" }}
                  />
                </>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
}
