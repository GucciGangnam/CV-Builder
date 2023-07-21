//import styles
import './EditorScreen.css';

//import useState
import { useState } from 'react';






export const EditorScreen = () => {

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

const [university, setUniversity] = useState('University Name');
const [degree, setDegree] = useState('Degree');
const [year, setYear] = useState('Year');

const [role1, setRole1] = useState('Most Recent Role');
const [company1, setCompany1] = useState('Company');
const [description1, setDescription1] = useState('A brief description about your role');

const [role2, setRole2] = useState('Most Recent Role');
const [company2, setCompany2] = useState('Company');
const [description2, setDescription2] = useState('A brief description about your role');


    return ( 
        <div className="EditorScreenBody">

            {/* Editor page */}

            <div className="EditorScreen">

                <div className="ProfilePicture">
                    <button>Upload Photo</button>
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
                            required
                        />
                    <input className='ContactInput'
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />

                    <h3>Skills</h3>
                    <input className='SkillsInput'
                            type="text"
                            value={skill1}
                            onChange={(e) => setSkill1(e.target.value)}
                            required
                        />
                    <input className='SkillsInput'
                            type="text"
                            value={skill2}
                            onChange={(e) => setSkill2(e.target.value)}
                            required
                        />
                    <input className='SkillsInput'
                            type="text"
                            value={skill3}
                            onChange={(e) => setSkill3(e.target.value)}
                            required
                        />
                    <input className='SkillsInput'
                            type="text"
                            value={skill4}
                            onChange={(e) => setSkill4(e.target.value)}
                            required
                        />
                        

                    <h3>Education</h3>
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

                <div className='BodyColumn'>
                <h3>Experience</h3>
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
                    <input className='ExperienceInput'
                            type="text"
                            value={description1}
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
                    <input className='ExperienceInput'
                            type="text"
                            value={description2}
                            onChange={(e) => setDescription2(e.target.value)}
                            required
                        />
                </div>

            </div>

            {/* Preview page */}

            <div className="PreviewScreen">

                <div className="ProfilePicture">
                </div>

            
                <div className="TopColumn">
                    <h1>{name}</h1>
                    <p>{profession} </p>
                    <h2>Profile</h2>
                    <p>{profile}</p>
                </div>

                <div className='LeftColumn'>
                    <h3>Contact</h3>
                    <p>{number}</p>
                    <p>{email}</p>
                    <p>{address}</p>

                    <h3>Skills</h3>
                    <p>{skill1}</p>
                    <p>{skill2}</p>
                    <p>{skill3}</p>
                    <p>{skill4}</p>
                    
                        

                    <h3>Education</h3>
                    <p>{university}</p>
                    <p>{degree}</p>
                    <p>{year}</p>
                </div>

                <div className='BodyColumn'>
                <h3>Experience</h3>
                <p>{role1}</p>
                <p>{company1}</p>
                <p>{description1}</p>
                <p>{role2}</p>
                <p>{company2}</p>
                <p>{description2}</p>
                
                
                </div>


            </div>




        </div>
        );
}; 