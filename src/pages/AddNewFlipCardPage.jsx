import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddNewFlipCardPage() {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/technologies`)
      .then((response) => {
        setTechnologies(response.data);
      });
  }, []);

  const navigate = useNavigate();

  const [technologyId, setTechnologyId] = useState("");

  const [title, setTitle] = useState("");
  const [resume, setResume] = useState("");
  const [officialDoc, setOfficialDoc] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleTitle = (event) => setTitle(event.target.value);
  const handleResume = (event) => setResume(event.target.value);
  const handleOfficialDoc = (event) => setOfficialDoc(event.target.value);
  const handleDescription = (event) => setDescription(event.target.value);
  const handleImageUrl = (event) => setImageUrl(event.target.value);
  const handleSelectTechnology = (event) => setTechnologyId(event.target.value);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newFlipCard = {
      title: title,
      resume: resume,
      description: description,
      officialDoc,
      officialDoc,
      technologyId: technologyId,
      imgUrl: imageUrl,
      flipCount: 0,
    };

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/flipCards`, newFlipCard)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form-container">
      <form id="add-flipCard-form" onSubmit={handleFormSubmit}>
        <h1>Agrega un FlipCard</h1>

        <div className="form-main-info">
          <label>
            Titulo:
            <input
              type="text"
              placeholder="nombre del flipCard"
              value={title}
              onChange={handleTitle}
            />
          </label>
          <label>
            Resumen:
            <input
              type="text"
              placeholder="preview del flipCard"
              value={resume}
              onChange={handleResume}
            />
          </label>
          <label>
            Documentación Oficial:
            <input
              type="text"
              placeholder="enlace"
              value={officialDoc}
              onChange={handleOfficialDoc}
            />
          </label>
          <select
            id="select-tech-add-form"
            name="technology"
            onChange={handleSelectTechnology}
            value={technologyId}
          >
            <option>Select a Technology</option>
            {technologies.map((eachTech) => {
              return (
                <option key={eachTech.id} value={eachTech.id}>
                  {eachTech.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="description-info">
          <label>
            Imagen:
            <input
              className="image-input-add"
              type="text"
              placeholder="URL"
              value={imageUrl}
              onChange={handleImageUrl}
            />
          </label>
          <label>
            Descripción:
            <input
              id="description-input-add"
              type="text"
              value={description}
              onChange={handleDescription}
            />
          </label>
        </div>

        <button className="back-home-btn" id="add-new-card-btn">
          Agregar Nuevo FlipCard!
        </button>
      </form>
    </div>
  );
}

export default AddNewFlipCardPage;
