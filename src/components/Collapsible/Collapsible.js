import React, {useState, useRef, useEffect} from 'react';
import { Loader } from '../';
import { CollapsibleWrapper, ItemWrapper, Title, Panel } from './Collapsible.styles';

const Item = ({item}) => {
    const [state, setState] = useState(false);
    const panelBody = useRef(null);
    const {name, username, email, phone, location, picture} = item;

    const currentHeight = state ? panelBody.current.clientHeight : 0;

    return (
        <ItemWrapper className={state ? 'isExpanded' : null}>
            <Title onClick={() => setState(!state)}>{name}</Title>
            <Panel style={{height: `${currentHeight}px` }}>
                <div className="body-container" ref={panelBody}>
                    <div className="user-media">
                        <img className="user-img" src={picture} alt={username} />
                    </div>
                    <div className="user-data">
                        <p>{email}<br />{phone}<br />{location}</p>
                    </div>
                    <div className="clearfix"></div> 
                </div>
            </Panel>
        </ItemWrapper>
    )
}

export const Collapsible = () => {

    const[isLoading, setLoading] = useState(true);
    const[users, setUsers] = useState([]);
    
    useEffect(() => {

        setLoading(true);

        fetch('https://randomuser.me/api/?results=20')
        .then(response => response.json())
        .then(data => data.results.map(user => (
            {
                name: `${user.name.first} ${user.name.last}`,
                username: `${user.login.username}`,
                email: `${user.email}`,
                phone: `${user.phone}`,
                location: `${user.location.state}, ${user.location.city}`,
                picture: `${user.picture.medium}`
            }
        )))
        .then(users => {
            setUsers(users);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        });
  
    }, []);

    return (
        <CollapsibleWrapper>
            {
                isLoading ? <Loader /> : users.map(item => <Item key={item.username} item={item} />)
            }
        </CollapsibleWrapper>
    )
}

export default Collapsible;