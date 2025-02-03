import { useState } from "react"
const initialValues = {
    name: "",
    text: "",
    vote: 0,
}

function ReviewForm({ submitReview }) {
    const votes = Array.from(Array(6).keys())

    const [formData, setFormData] = useState(initialValues)

    const setFieldValue = (event) => {
        const value = event.target.value;
        const fieldName = event.target.name;
        const newFormData = { ...formData };
        newFormData[fieldName] = value;
        setFormData(newFormData);
    };

    return (
        <form onSubmit={(event) => { event.preventDefault(), submitReview(formData) }}>
            <h2 className='text-center'>Aggiungi una recensione</h2>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Nome utente</label>
                <input name="name" type="text" className="form-control" id="username" onChange={setFieldValue} value={formData.name} />
            </div>
            <div className="mb-3">
                <label htmlFor="vote">Seleziona il voto </label>
                <select className="form-select" name="vote" id="vote" onChange={setFieldValue} value={formData.vote}>
                    {votes.map((vote) => <option key={vote} value={vote}>{vote}</option>)}
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="text">Testo della recensione</label>
                <textarea className="form-control" name="text" id="text" onChange={setFieldValue} value={formData.text}></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
export default ReviewForm