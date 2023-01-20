import {useState} from "react"
import '../src/style.css'


export default function App () {
    const [nameBadge, setNameBadge] = useState({
        firstName:"",
        lastName:"",
        birthPlace:"",
        email:"",
        phone:"",
        favoriteFood:"",
        aboutMe:""
    }
)
    function handelChange (event) {
        const {name,value,} = event.target
        setNameBadge(prevBadge => {
            return {
                ...prevBadge,
                [name]: value
            }
        })
    }
    const [badgeArr, setBadgeArr] = useState([])

    function newArr (event) {
        const badge = {...nameBadge}
        event.preventDefault()
        setBadgeArr(prevBadge => (
            [...prevBadge,badge ]
        )
        )

    }
    // Need to put teh badgeArr in place of namaBadge
    const badgeList = badgeArr.map(badge => {
        console.log(badge, "testing")
        return (
            <li>
                <p>Name:{nameBadge.firstName} {nameBadge.lastName}</p>
                <p>Place of Birth:{nameBadge.birthPlace}</p>
                <p>Email: {nameBadge.email}</p>
                <p>Phone: {nameBadge.phone}</p>
                <p>Favorite Food: {nameBadge.favoriteFood}</p>
                <p>About Me {nameBadge.aboutMe}</p>
            </li>
            
        )
    })


    return (
        <form 
            className="form"
            onSubmit={newArr}>
            <div className="container">
            <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handelChange}
            value={nameBadge.firstName}
            minLength="3"
            required
            />
            <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handelChange}
            value={nameBadge.lastName}
            minLength="3"
            required
            />
            <input
            type=""
            placeholder="Place of Birth"
            name="birthPlace"
            onChange={handelChange}
            value={nameBadge.birthPlace}
            minLength="3"
            required
            />
            <input
            type="email"
            placeholder="email"
            name="email"
            onChange={handelChange}
            value={nameBadge.email}
            minLength="3"
            />
            <input
            type="phone"
            placeholder="Phone"
            name="phone"
            onChange={handelChange}
            value={nameBadge.phone}
            minLength="3"
            required
            />
            <input
            type="text"
            placeholder="Favorite Food"
            name="favoriteFood"
            onChange={handelChange}
            value={nameBadge.favoriteFood}
            minLength="3"
            required
            />
            <textarea
            className="aboutMe"
            name="aboutMe"
            value={nameBadge.aboutMe}
            placeholder="About Me"
            onChange={handelChange}
            minLength="3"
            required
            />
            <button
                className="submit">
                Submit
            </button>
            {badgeList}
            
    
            </div>
        </form>
        
        
    )
    
}


