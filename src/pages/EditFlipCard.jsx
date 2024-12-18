import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function EditFlipCard() {

    const dynamicParams = useParams();
    // console.log(dynamicParams)

    const [technologies, setTechnologies] = useState([]);

    const navigate = useNavigate();

    const [technologyId, setTechnologyId] = useState('');

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
    
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/technologies`)
        .then((response) => {
            // console.log(response);
            setTechnologies(response.data)
        })

        axios.get(`${import.meta.env.VITE_SERVER_URL}/flipCards/${dynamicParams.flipCardId}`)
        .then((response) => {
            setTitle(response.data.title)
            setResume(response.data.resume)
            setDescription(response.data.description)
            setOfficialDoc(response.data.officialDoc)
            setTechnologyId(response.data.technologyId)
            setImageUrl(response.data.imgUrl)
        })
    },[])

    if(technologies.length === 0) {
        return <p>Loading...</p>
    }


    const handleFormSubmit = (event) => {
        event.preventDefault();

        const editedFlipCard = {
            title: title,
            resume: resume,
            description: description,
            officialDoc, officialDoc,
            technologyId: technologyId,
            imgUrl: imageUrl,
        }


        axios.put(`${import.meta.env.VITE_SERVER_URL}/flipCards/${dynamicParams.flipCardId}`, editedFlipCard)
        .then(() => {
            navigate("/")
        })
        .catch((error) => {
            console.log(error);
        })

    }


    return(
    <div className="form-container">
      <form id="edit-flipCard-form" onSubmit={handleFormSubmit}>
        <h1>Edit your FlipCard</h1>

        <div className="form-main-info">
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
            <select name="technology" onChange={handleSelectTechnology} value={technologyId}>
                <option>Select a Technology</option>
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
                <input className="image-input-add" type="text" placeholder="URL" value={imageUrl} onChange={handleImageUrl}/>
            </label>
            <label>
                Descripción:
                <input id="description-input-add" type="text" value={description} onChange={handleDescription}/>
            </label>
        </div>

        <button className="back-home-btn" id="add-new-card-btn">Edit FlipCard!</button>
      </form>
    </div>
    )
}

export default EditFlipCard;