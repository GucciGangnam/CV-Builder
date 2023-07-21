//import styles
import './EditorScreen.css';

//import useState
import { useState } from 'react';






export const EditorScreen = () => {



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
                            placeholder='Full Name'
                            required
                        />
                    <input className='ProfessionInput' 
                            type="text"
                            placeholder='Your profession'
                            required
                        />
                    <h2>Profile</h2>
                    <textarea className='ProfileInput'
                            type="text"
                            placeholder='hello'
                            rows="5"
                            required
                        />
                </div>

                <div className='LeftColumn'>
                    <h3>Contact</h3>
                    <input className='ContactInput'
                            type="text"
                            placeholder='Phone Number'
                            required
                        />
                    <input className='ContactInput'
                            type="text"
                            placeholder='Email'
                            required
                        />
                    <input className='ContactInput'
                            type="text"
                            placeholder='Address'
                            required
                        />

                    <h3>Skills</h3>
                    <input className='SkillsInput'
                            type="text"
                            placeholder='Skill 1'
                            required
                        />
                    <input className='SkillsInput'
                            type="text"
                            placeholder='Skill 2'
                            required
                        />
                    <input className='SkillsInput'
                            type="text"
                            placeholder='Skill 3'
                            required
                        />
                    <input className='SkillsInput'
                            type="text"
                            placeholder='Skill 4'
                            required
                        />
                        

                    <h3>Education</h3>
                    <input className='EducationInput'
                            type="text"
                            placeholder='University Name'
                            required
                        />
                    <input className='EducationInput'
                            type="text"
                            placeholder='Degree'
                            required
                        />
                    <input className='EducationInput'
                            type="text"
                            placeholder='Year'
                            required
                        />
                </div>

                <div className='BodyColumn'>
                <h3>Experience</h3>
                <input className='ExperienceInput'
                            type="text"
                            placeholder='Most Recdent role'
                            required
                        />
                    <input className='ExperienceInput'
                            type="text"
                            placeholder='Company'
                            required
                        />
                    <input className='ExperienceInput'
                            type="text"
                            placeholder='A brief description about your role'
                            required
                        />
                <input className='ExperienceInput'
                            type="text"
                            placeholder='Most Recdent role'
                            required
                        />
                    <input className='ExperienceInput'
                            type="text"
                            placeholder='Company'
                            required
                        />
                    <input className='ExperienceInput'
                            type="text"
                            placeholder='A brief description about your role'
                            required
                        />
                <input className='ExperienceInput'
                            type="text"
                            placeholder='Most Recdent role'
                            required
                        />
                    <input className='ExperienceInput'
                            type="text"
                            placeholder='Company'
                            required
                        />
                    <input className='ExperienceInput'
                            type="text"
                            placeholder='A brief description about your role'
                            required
                        />
                </div>

            </div>

            {/* Preview page */}

            <div className="PreviewScreen">

                <div className="ProfilePicture">
                </div>

            
                <div className="TopColumn">
                    <h1>FirstName</h1>
                    <p>Your Profession </p>
                    <h2>Profile</h2>
                    <p>hello</p>
                </div>

                <div className='LeftColumn'>
                    <h3>Contact</h3>
                    <p>Phone Number</p>
                    <p>E-mail address</p>
                    <p>Address</p>

                    <h3>Skills</h3>
                    <p>Skill 1</p>
                    <p>Skill 2</p>
                    <p>Skill 3</p>
                    <p>Skill 4</p>
                    
                        

                    <h3>Education</h3>
                    <p>University Name</p>
                    <p>Degree</p>
                    <p>Year</p>
                </div>

                <div className='BodyColumn'>
                <h3>Experience</h3>
                <p>Most Recent role</p>
                <p>Company</p>
                <p>A brief description about your role</p>
                <p>Most Recent role</p>
                <p>Company</p>
                <p>A brief description about your role</p>
                
                
                </div>


            </div>




        </div>
        );
}; 