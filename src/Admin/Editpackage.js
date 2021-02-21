import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import {Row, Col, Form } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../Styles/AddPackage.css";
import firebase from "firebase";
import {Redirect} from "react-router-dom";
import $ from "jquery";

function EditPackage(match) {

    const [name, setName] = useState("");
    const [duration, setDuration] = useState("");
    const [desc, setDesc] = useState("");
    const [packageImage, setPackageImage] = useState(null);
    const types = ['image/png', 'image/jpeg', 'image/jpg'];
    const [costing, setCosting] = useState([{title:"",cost:""}]);
    const [inclusions, setInclusions] = useState([""]);
    const [exclusions, setExclusions] = useState([""]);
    const [terms, setTerms] = useState([""]);
    const [notes, setNotes] = useState([""]);
    const [itinerary, setItinerary] = useState([{title: "", subtitle: "", desc: "", meals: ""}]);
    const [trending, setTrending] = useState(false);
    const [updateState, setUpdateState] = useState(false);
    
    useEffect(() => {
        $(document).ready(function () {
          $(this).scrollTop(0);
        });
      }, []);

    
    function fetchPackageData(){
        console.log(match.match.params.id);
        db.collection('packages').doc(match.match.params.id).get().then(snapshot =>{
            console.log(snapshot.data());
            const packagedata = snapshot.data();
            setName(packagedata.name);
            setDuration(packagedata.duration);
            setDesc(packagedata.tripDesc);
            setCosting(packagedata.costing);
            setInclusions(packagedata.inclusions);
            setExclusions(packagedata.exclusions);
            setTerms(packagedata.terms);
            setNotes(packagedata.notes);
            setItinerary(packagedata.daywiseItinerary);
        })
        
    }
    useEffect(()=>{
        fetchPackageData();
    },[])
    
    
    function handleChange(event) {
        const {name, value} = event.target;
        if(name == "package-name") {
            setName(value);
        } else if(name == "package-duration") {
            setDuration(value);
        } else if(name == "package-desc") {
            setDesc(value);
        }   else if(name == "trending") {
            console.log(event.target);
            if(value=="true") {
                setTrending(true);
            }
        }
    }
    // Add image
    function handleImageChange(event){
        let selectedFile = event.target.files[0];
        if(selectedFile && types.includes(selectedFile.type)) {
            setPackageImage(selectedFile);
        } else {
            setPackageImage(null);
        }
    }

    // Inclusions dynamic part
    
    function addInclusion() {
        setInclusions((prev) => {
            return [...prev, ""];
        })
    }

    function removeInclusion(index) {
        const values = [...inclusions];
        console.log("Removing : " + index);
        values.splice(index, 1);
        setInclusions(values);
    }

    function handleInclusionChange(index, event) {
        const values = [...inclusions];
        values[index] = event.target.value;
        setInclusions(values);
    }

    // Costing dynamic part
    function addCosting() {
        setCosting((prev) => {
            return [...prev, {title:"",cost:""}];
        })
    }

    function removeCosting(index) {
        const values = [...costing];
        console.log("Removing : " + index);
        values.splice(index, 1);
        setCosting(values);
    }

    function handleCostingChange(index, event) {
        const values = [...costing];
        const{name,value}=event.target;
        if(name=="title"){
        values[index].title = event.target.value;}
        else if(name=="cost"){
            values[index].cost=event.target.value;
        }
        setCosting(values);
    }

    // Exclusion dynamic part
    function addExclusion() {
        setExclusions((prev) => {
            return [...prev, ""];
        })
    }

    function removeExclusion(index) {
        const values = [...exclusions];
        console.log("Removing : " + index);
        values.splice(index, 1);
        setExclusions(values);
    }

    function handleExlusionsChange(index, event) {
        const values = [...exclusions];
        values[index] = event.target.value;
        setExclusions(values);
    }

    // Terms dynamic part
    function addTerms() {
        setTerms((prev) => {
            return [...prev, ""];
        })
    }

    function removeTerms(index) {
        const values = [...terms];
        console.log("Removing : " + index);
        values.splice(index, 1);
        setTerms(values);
    }

    function handleTermsChange(index, event) {
        const values = [...terms];
        values[index] = event.target.value;
        setTerms(values);
    }

    // Notes dynamic part
    function addNotes() {
        setNotes((prev) => {
            return [...prev, ""];
        })
    }

    function removeNotes(index) {
        const values = [...notes];
        console.log("Removing : " + index);
        values.splice(index, 1);
        setNotes(values);
    }

    function handleNotesChange(index, event) {
        const values = [...notes];
        values[index] = event.target.value;
        setNotes(values);
    }
    
    // Itinerary dynamic part
    function addItinerary() {
        setItinerary((prev) => {
            return [...prev, {title: "", subtitle: "", desc: "", meals: ""}];
        })
    }

    function removeItinerary(index) {
        const values = [...itinerary];
        console.log("Removing : " + index);
        values.splice(index, 1);
        setItinerary(values);
    }

    function handleItineraryChange(index, event) {
        const values = [...itinerary];
        const {name, value} = event.target;
        if(name=="title") {
            values[index].title = value;
        } else if ((name=="subtitle")) {
            values[index].subtitle = value;
        } else if ((name=="desc")) {
            values[index].desc = value;
        } else if ((name=="meals")) {
            values[index].meals = value;
        }
        
        setItinerary(values);

        console.log(itinerary);
    }
    const db = firebase.firestore();
    const storage = firebase.storage();
    function editpackage(event){
        event.preventDefault();
        const uploadTask = storage.ref("packages/"+packageImage.name).put(packageImage);
        uploadTask.on("state_changed", snapshot => {
            const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
            console.log(progress);
        }, err => {
            console.log(err.message);
        }, () => {
            storage.ref("packages").child(packageImage.name).getDownloadURL().then(url => {
                db.collection("packages").doc(match.match.params.id).set({
                    name: name,
                    duration: duration,
                    terms: terms,
                    notes: notes,
                    inclusions: inclusions,
                    exclusions: exclusions,
                    costing: costing,
                    daywiseItinerary: itinerary,
                    imageUrl: url,
                    tripDesc: desc,
                    trending: trending,                    
                }).then(()=> {
                    setName('');
                    setDuration('');
                    setTerms(['']);
                    setNotes(['']);
                    setInclusions(['']);
                    setExclusions(['']);
                    setCosting(['']);
                    setItinerary([{title: "", subtitle: "", desc: "", meals: ""}]);
                    setDesc('');
                    setPackageImage(null);
                    setTrending(false);
                    setUpdateState(true);
                });
            });
        });
    }
    function deletepackage(){
        db.collection("packages").doc(match.match.params.id).delete().then(()=> {
            setName('');
                    setDuration('');
                    setTerms(['']);
                    setNotes(['']);
                    setInclusions(['']);
                    setExclusions(['']);
                    setCosting(['']);
                    setItinerary([{title: "", subtitle: "", desc: "", meals: ""}]);
                    setDesc('');
                    setPackageImage(null);
                    setUpdateState(true);
        });
    }
    
    
    return <div>
    {updateState ? <Redirect to = '/admin/dashboard/alldestination'></Redirect> : null }
    <Header />
        <div className="add-package-form">
            <div className="add-package-form-section">
                <h2 className="add-package-form-section-title">Basic Details</h2>
                <hr />
                <Form className="form-add-package">
                    <Form.Group className="add-package-form-group" controlId="package-name">
                        <Form.Label className="add-package-form-label">Package Name</Form.Label>
                        <Form.Control onChange={handleChange} className="add-package-form-input" type="text" name="package-name" value={name}/>
                    </Form.Group>
                    <Form.Group className="add-package-form-group" controlId="package-duration">
                        <Form.Label className="add-package-form-label">Package Duration</Form.Label>
                        <Form.Control onChange={handleChange} className="add-package-form-input" type="text" name="package-duration" value={duration}/>
                    </Form.Group>
                    <Form.Group className="add-package-form-group" controlId="package-desc">
                        <Form.Label className="add-package-form-label">Package Description</Form.Label>
                        <Form.Control onChange={handleChange} className="add-package-form-input" as="textarea" rows={5} name="package-desc" value={desc} />
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column lg={8} md={8} sm={4}>
                            Package Type
                        </Form.Label>
                        <Col lg={8} md={8} sm={8}>
                            <Form.Check onChange={handleChange} type="radio" label="Trending" value={true} name="trending" d="formHorizontalRadios1" />
                            <Form.Check onChange={handleChange} type="radio" label="Non-trending" value={false} name="trending" d="formHorizontalRadios1" />
                        </Col>
                    </Form.Group>
                        <Form.Label controlId="pkgImage">Add Image</Form.Label>
                        <Form.File onChange={handleImageChange} id="pkgImage"/>                  
                </Form>
            </div>
                <div className="add-package-form-section">
                    <h2 className="add-package-form-section-title">Costing Details</h2>
                    <hr />
                    <Form className="form-add-package">
                        {costing.map((cost, index) => {
                            return <Form.Group className="add-package-form-group" controlId="package-cost">
                                        <Form.Label className="add-package-form-label">Costing {index+1}</Form.Label>
                                        <Form.Control onChange={(e) => {handleCostingChange(index, e)}} placeholder="Title" className="add-package-form-input" type="text" name="package-title" value={cost.title} />
                                        <br></br>
                                        <Form.Control onChange={(e) => {handleCostingChange(index, e)}} className="add-package-form-input" type="text" name="package-cost" value={cost.cost} />
                                        <Button onClick={addCosting} className="inline-button"> + </Button>
                                        <Button onClick={() => removeCosting(index)} className="inline-button"> - </Button>
                                    </Form.Group>
                        })}         
                    </Form>
                </div>
                <div className="add-package-form-section">
                    <h2 className="add-package-form-section-title">Daywise Itinerary</h2>
                    <hr />
                    <Form className="form-add-package">
                        {itinerary.map((iti, index) => {
                            return <Form.Group className="add-package-form-group" controlId="package-itinerary">
                                        <Form.Label className="add-package-form-label">Itinerary {index+1}</Form.Label>
                                        <Form.Control onChange={(e) => {handleItineraryChange(index, e)}} placeholder={"Day Number"} className="add-package-form-input itinerary-input" type="text" name="title" value={iti.title} />
                                        <Form.Control onChange={(e) => {handleItineraryChange(index, e)}} placeholder={"Subtitle"} className="add-package-form-input itinerary-input" type="text" name="subtitle" value={iti.subtitle} />
                                        <Form.Control onChange={(e) => {handleItineraryChange(index, e)}} placeholder={"Description"} className="add-package-form-input itinerary-input" as="textarea" rows={4} name="desc" value={iti.desc} />
                                        <Form.Control onChange={(e) => {handleItineraryChange(index, e)}} placeholder={"Meals included"} className="add-package-form-input itinerary-input" type="text" name="meals" value={iti.meals} />
                                        <Button onClick={addItinerary} className="inline-button"> + </Button>
                                        <Button onClick={() => removeItinerary(index)} className="inline-button"> - </Button>
                                    </Form.Group>
                        })}         
                    </Form>
                </div>
                <div className="add-package-form-section">
                    <h2 className="add-package-form-section-title">Inclusions</h2>
                    <hr />
                    <Form className="form-add-package">
                        {inclusions.map((inclusion, index) => {
                            return <Form.Group className="add-package-form-group" controlId="package-inclusion">
                                        <Form.Label className="add-package-form-label">Inclusion {index+1}</Form.Label>
                                        <Form.Control onChange={(e) => {handleInclusionChange(index, e)}} className="add-package-form-input" type="text" name="package-inclusion" value={inclusion} />
                                        <Button onClick={addInclusion} className="inline-button"> + </Button>
                                        <Button onClick={() => removeInclusion(index)} className="inline-button"> - </Button>
                                    </Form.Group>
                        })}         
                    </Form>
                </div>
                <div className="add-package-form-section">
                    <h2 className="add-package-form-section-title">Exclusions</h2>
                    <hr />
                    <Form className="form-add-package">
                        {exclusions.map((exclusion, index) => {
                            return <Form.Group className="add-package-form-group" controlId="package-exclusion">
                                        <Form.Label className="add-package-form-label">Exclusion {index+1}</Form.Label>
                                        <Form.Control onChange={(e) => {handleExlusionsChange(index, e)}} className="add-package-form-input" type="text" name="package-exclusion" value={exclusion} />
                                        <Button onClick={addExclusion} className="inline-button"> + </Button>
                                        <Button onClick={() => removeExclusion(index)} className="inline-button"> - </Button>
                                    </Form.Group>
                        })}         
                    </Form>
                </div>
                <div className="add-package-form-section">
                    <h2 className="add-package-form-section-title">Terms & Conditions</h2>
                    <hr />
                    <Form className="form-add-package">
                        {terms.map((term, index) => {
                            return <Form.Group className="add-package-form-group" controlId="package-terms">
                                        <Form.Label className="add-package-form-label">Term {index+1}</Form.Label>
                                        <Form.Control onChange={(e) => {handleTermsChange(index, e)}} className="add-package-form-input" type="text" name="package-terms" value={term} />
                                        <Button onClick={addTerms} className="inline-button"> + </Button>
                                        <Button onClick={() => removeTerms(index)} className="inline-button"> - </Button>
                                    </Form.Group>
                        })}         
                    </Form>
                </div>
                <div className="add-package-form-section">
                    <h2 className="add-package-form-section-title">Notes</h2>
                    <hr />
                    <Form className="form-add-package">
                        {notes.map((note, index) => {
                            return <Form.Group className="add-package-form-group" controlId="package-notes">
                                        <Form.Label className="add-package-form-label">Note {index+1}</Form.Label>
                                        <Form.Control onChange={(e) => {handleNotesChange(index, e)}} className="add-package-form-input" type="text" name="package-notes" value={note} />
                                        <Button onClick={addNotes} className="inline-button"> + </Button>
                                        <Button onClick={() => removeNotes(index)} className="inline-button"> - </Button>
                                    </Form.Group>
                        })}         
                    </Form>
                </div>
                <div className="add-package-form-section">
                    <Form className="form-add-package">
                        <Form.Group>
                            <Button className="add-package-button" onClick={editpackage} variant="primary">Update Package</Button>                            
                        </Form.Group>
                        <Form.Group>
                            <Button className="add-package-button" onClick={deletepackage} variant="primary">Delete Package</Button>    
                        </Form.Group>
                               
                    </Form>
                </div>
            </div>
        <Footer />
    </div>
}

export default EditPackage;