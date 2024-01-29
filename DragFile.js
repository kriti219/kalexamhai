import { useRef, useState } from "react"


const DragFile=() => {
    const[files , setFiles] = useState(null);

    const inputRef = useRef();

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setFiles(event.dataTransfer.files);
    };

    const handleUpload = () =>{};

    if(files) return(
        <div className="uploads">
            <ul>
                {Array.from(files).map((file,idx) => <li key={idx}>{file.name}</li>)}
            </ul>
            <div className="actions">
                <button onClick = {()=>setFiles(null)}>Cancel</button>
                <button onClick={handleUpload}>Upload</button>
            </div>
        </div>
    )

    return (
    <>
        {!files && (
            <div className="dropzone"
            onDragOver={handleDragOver}
            onDrop={handleDrop}>
                <h1>Drag and Drop Files to Upload</h1>
                <h1>Or</h1>
                <input type="file" 
                multiple 
                onChange={(event)=>setFiles(event.target.files)}
                hidden
                ref={inputRef}
                />
                <button onClick={() => inputRef.current.click()}>Select Files</button>
            </div>
        )}
    </>
    );
};

export default DragFile;