import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function AddNewFlipCardPage() {

    const [technologies, setTechnologies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5005/technologies")
        .then((response) => {
            // console.log(response);
            setTechnologies(response.data)
        })
    }, [])


    const navigate = useNavigate();

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

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // console.log("testing", title, resume, officialDoc, description, imageUrl)

        const newFlipCard = {
            title: title,
            resume: resume,
            description: description,
            officialDoc, officialDoc,
            //technologyId => trabajar la idea. Quizás hacer un select y según la respuesta (condicional) se añade el ID correspondiente
            imgUrl: imageUrl,
            flipCount: 0
        }

        axios.post("http://localhost:5005/flipCards", newFlipCard)
        .then(() => {
            console.log("flip card añadido con exito")
            navigate("/")
        })
        .catch((error) => {
            console.log(error);
        })

    }

  return (
    <div className="form-container">
      <form id="add-flipCard-form" onSubmit={handleFormSubmit}>
        <h1>Agrega un FlipCard</h1>

        <div className="add-main-info">
            <label>
                Titulo:
                <input type="text" placeholder="nombre del flipCard" value={title} onChange={handleTitle}/>
            </label>
            <label>
                Resumen:
                <input type="text" placeholder="preview del flipCard" value={resume} onChange={handleResume}/>
            </label>
            <label>
                Documentación Oficial:
                <input type="text" placeholder="enlace" value={officialDoc} onChange={handleOfficialDoc}/>
            </label>
            <select name="technology" /*onChange={handleSelectTechnology}*/>
                {technologies.map((eachTech) => {
                    return(
                    <option key={eachTech.id} value={eachTech.id}>{eachTech.name}</option>
                    )
                })}
            </select>
        </div>


        <div className="description-info">
            <label>
                Imagen:
                <input id="image-input-add" type="text" placeholder="URL" value={imageUrl} onChange={handleImageUrl}/>
            </label>
            <label>
                Descripción:
                <input id="description-input-add" type="text" value={description} onChange={handleDescription}/>
            </label>
        </div>

        <button className="back-home-btn" id="add-new-card-btn">Agregar Nuevo FlipCard!</button>
      </form>
    </div>
  );
}

export default AddNewFlipCardPage;
