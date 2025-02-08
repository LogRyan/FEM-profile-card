import { useEffect, useState } from "react";
import './profileCard.css';
import image1 from '../images/image-victor.jpg';

function ProfileCard() {

    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
            const profile = [
            {
                id: 1,
                image: image1,
                name: {
                    fname: 'Victor',
                    lname: 'Crest'
                },
                age: 26,
                location: 
                    {
                        country: 'England',
                        city: 'London',
                    },
                followers: '80K',
                likes: '803K',
                photos: '1.4K'
            },
            {
                id: 2,
                image: image1,
                name: {
                    fname: 'Victor',
                    lname: 'Crest'
                },
                age: 26,
                location: 
                    {
                        country: 'England',
                        city: 'London',
                    },
                followers: '80K',
                likes: '803K',
                photos: '1.4K'
            },
            {
                id: 3,
                image: image1,
                name: {
                    fname: 'Victor',
                    lname: 'Crest'
                },
                age: 26,
                location: 
                    {
                        country: 'England',
                        city: 'London',
                    },
                followers: '80K',
                likes: '803K',
                photos: '1.4K'
            },
            {
                id: 4,
                image: image1,
                name: {
                    fname: 'Victor',
                    lname: 'Crest'
                },
                age: 26,
                location: 
                    {
                        country: 'England',
                        city: 'London',
                    },
                followers: '80K',
                likes: '803K',
                photos: '1.4K'
            },
        ];

        setProfiles(profile);

    }, []);

    return(
        <main className="d-flex flex-wrap justify-content-center kumbh-sans">
            {profiles.map((profile, index) => {
                return (
                    <article id="card" className="d-flex flex-column justify-content-end" key={profile.id}>

                        <div className="d-flex justify-content-center">

                            <img className="img-fluid" id="userImg" src={profile.image} alt={profile.name.fname}/>

                        </div>

                        <div className="d-flex flex-column align-items-center">

                            <div>

                                <h2 id="userName" className="kumbh-sans-heavy">{profile.name.fname} {profile.name.lname}, <span id="userAge" className="kumbh-sans">{profile.age}</span></h2>

                            </div>

                            <span id="location">{profile.location.city}, {profile.location.country}</span>

                        </div>

                        <div className="d-flex justify-content-around">

                            <div className=" d-flex flex-column align-items-center">

                                <span id='followerCount' className="kumbh-sans-heavy">{profile.followers}</span>
                                <p>Followers</p>

                            </div>

                            <div className=" d-flex flex-column align-items-center">

                                <span id='likeCount' className="kumbh-sans-heavy">{profile.likes}</span>
                                <p>Likes</p>

                            </div>

                            <div className=" d-flex flex-column align-items-center">

                                <span id='photoCount' className="kumbh-sans-heavy">{profile.photos}</span>
                                <p>Photos</p>

                            </div>

                        </div>

                    </article>
                );
            })}
        </main>
    );
}

export default ProfileCard;