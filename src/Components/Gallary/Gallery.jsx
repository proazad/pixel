import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { NavLink, useLoaderData } from "react-router-dom";
import cats from "../../../public/category.json";
export default function Gallery() {
//   const [photos, setPhotos] = useState([]);
  const photos = useLoaderData();
  return (
    <div className="container mx-auto px-2 lg:px-0">
      <div className="">
        <div className="overflow-x-auto snap-x flex  flex-nowrap py-5 space-x-8">
          {cats.map((cat) => (
            <NavLink
              to={cat.url}
              key={cat.id}
              className="flex-none py-2 px-3 text-[#ff0052] rounded-md"
            >
              {cat.category}
            </NavLink>
          ))}
        </div>
        <div className="my-5">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry columnsCount={3} gutter="10px">
              {photos.map((image, i) => (
                <img
                  key={i}
                  src={image.src}
                  style={{ width: "100%", display: "block" }}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
}
