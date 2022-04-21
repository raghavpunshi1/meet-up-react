import {useNavigate} from 'react-router-dom';

import NewMeetUpForm from '../components/meetups/NewMeetUpForm'

function NewMeetUpPage() {
    const navigate=useNavigate();


    function addMeetUpHandler(meetUpData) {
        fetch('https://meet-up-700c5-default-rtdb.firebaseio.com/meetups.json',{
            method: 'POST',
            body: JSON.stringify(meetUpData),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(()=>{
            navigate('/',{replace:true});
        });

    }

    return (
        <section>
            <NewMeetUpForm onAddMeetUp={addMeetUpHandler} />
        </section>
    );
}
export default NewMeetUpPage;