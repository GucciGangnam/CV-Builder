//import styles
import './EditorScreen.css';

//import useState
import { useState } from 'react';

//import compontents







export const EditorScreen = () => {

const [Picture, setPicture] = useState('');

const [name, setName] = useState('Your Full Name');
const [profession, setProfession] = useState('Profession');
const [profile, setProfile] = useState('Write about yourself');

const [number, setNumber] = useState('Phone Number');
const [email, setEmail] = useState('Email');
const [address, setAddress] = useState('Address');

const [skill1, setSkill1] = useState('Skill 1');
const [skill2, setSkill2] = useState('Skill 2');
const [skill3, setSkill3] = useState('Skill 3');
const [skill4, setSkill4] = useState('Skill 4');
const [skill5, setSkill5] = useState('Skill 5');

const [university, setUniversity] = useState('University Name');
const [degree, setDegree] = useState('Degree');
const [year, setYear] = useState('Year');

const [university2, setUniversity2] = useState('University Name');
const [degree2, setDegree2] = useState('Degree');
const [year2, setYear2] = useState('Year');

const [role1, setRole1] = useState('Most Recent Role');
const [company1, setCompany1] = useState('Company');
const [description1, setDescription1] = useState('A brief description about your role');

const [role2, setRole2] = useState('Most Recent Role');
const [company2, setCompany2] = useState('Company');
const [description2, setDescription2] = useState('A brief description about your role');

// button handlers 

// const addSkillHandler = () => {

// };



    return ( 
        <div className="EditorScreenBody">

            {/* Editor page */}

            <div className="EditorScreen">

                <div className="ProfilePicture">
                    <input type='file' 
                    className='ProfilePictureInput'
                    onChange={(e) => setPicture(URL.createObjectURL(e.target.files[0]))}
                    >
                    </input>
                </div>

            
                <div className="TopColumn">
                    <input className='NameInput'
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    <input className='ProfessionInput' 
                            type="text"
                            value={profession}
                            onChange={(e) => setProfession(e.target.value)}
                            required
                        />
                    <h2>Profile</h2>
                    <textarea className='ProfileInput'
                            type="text"
                            value={profile}
                            rows="5"
                            maxLength={300}
                            onChange={(e) => setProfile(e.target.value)}
                            required
                        />
                </div>

                <div className='LeftColumn'>
                    <h3>Contact</h3>
                    <input className='ContactInput'
                            type="text"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            required
                        />
                    <input className='ContactInput'
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            maxLength={25}
                            required
                        />
                    <input className='ContactInput'
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />

                    <div className='SkillsDiv'>
                    <h3><button className='minusBtn'>-</button>Skills<button className='PlusBtn'>+</button></h3>
                    <input className='SkillsInput'
                            type="text"
                            value={skill1}
                            onChange={(e) => setSkill1(e.target.value)}
                            required
                        />
                    </div>
                    
                        

                    <h3><button className='minusBtn'>-</button>Education<button className='PlusBtn'>+</button></h3>
                    <div className='EducationInputDiv'>
                        <div className='EducationInputDivSet'>
                            <input className='EducationInput'
                                    type="text"
                                    value={university}
                                    onChange={(e) => setUniversity(e.target.value)}
                                    required
                                />
                            <input className='EducationInput'
                                    type="text"
                                    value={degree}
                                    onChange={(e) => setDegree(e.target.value)}
                                    required
                                />
                            <input className='EducationInput'
                                    type="text"
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    required
                                />
                            </div>
                    </div>
                        
                </div>

                <div className='BodyColumn'>
                <h3><button className='minusBtn'>-</button>Experience<button className='PlusBtn'>+</button></h3>
                <input className='ExperienceInput'
                            type="text"
                            value={role1}
                            onChange={(e) => setRole1(e.target.value)}
                            required
                        />
                    <input className='ExperienceInput'
                            type="text"
                            value={company1}
                            onChange={(e) => setCompany1(e.target.value)}
                            required
                        />
                    <textarea className='ExperienceInput'
                            type="text"
                            rows="5"
                            value={description1}
                            maxLength={300}
                            onChange={(e) => setDescription1(e.target.value)}
                            required
                        />
                <input className='ExperienceInput'
                            type="text"
                            value={role2}
                            onChange={(e) => setRole2(e.target.value)}
                            required
                        />
                    <input className='ExperienceInput'
                            type="text"
                            value={company2}
                            onChange={(e) => setCompany2(e.target.value)}
                            required
                        />
                    <textarea className='ExperienceInput'
                            type="text"
                            rows="5"
                            value={description2}
                            maxLength={300}
                            onChange={(e) => setDescription2(e.target.value)}
                            required
                        />
                </div>

            </div>

            {/* Preview page */}

            <div className="PreviewScreen">

                <div className="ProfilePicture">
                    <img src={Picture} alt="Profile Avatar" className='ProfilePicturePreview'></img>
                </div>

            
                <div className="TopColumn">
                    <h1 className='NamePreview'>{name}</h1>
                    <p className='ProfessionLabel'>{profession} </p>
                    <h2 className='ProfileTitle'>Profile</h2>
                    <p className='ProfileBody'>{profile}</p>
                </div>

                <div className='LeftColumn'>
                    <h3>Contact</h3>
                    <p>☎ {number}</p>
                    <p>✉ {email}</p>
                    <p>⌂ {address}</p>

                    <div className='SkillsDivPre'>
                        <h3>Skills</h3>
                        <p>• {skill1}</p>
                    </div>
                    
                        
                    <div className='EducationInputDivPre'>
                        <h3>Education</h3>
                        <p><strong>{university}</strong></p>
                        <p>{degree}</p>
                        <p>{year}</p>
                    </div>
                </div>

                <div className='BodyColumn'>
                    <h3>Experience</h3>
                    <p><strong>{role1}</strong></p>
                    <p>{company1}</p>
                    <p>{description1}</p>
                    <p></p>
                    <p></p>
                    <p><strong>{role2}</strong></p>
                    <p>{company2}</p>
                    <p>{description2}</p>

                    <div className='PreviewFooter'>
                    </div>

                </div>


            </div>




        </div>
        );
}; 


