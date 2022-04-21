import { useState, useEffect } from 'react';

import MeetUpList from '../components/meetups/MeetUpList';

function AllMeetUps() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetUps, setLoadedMeetUps] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://meet-up-700c5-default-rtdb.firebaseio.com/meetups.json')
            .then(response => {
                return response.json();
            }).then(data => {
                const meetups=[];
                
                for(const key in data){
                    const meetup={
                        id:key,
                        ...data[key]
                    };
                    meetups.push(meetup);
                }
                setIsLoading(false);
                setLoadedMeetUps(meetups);
            });
    }, []);

    if (isLoading) {
        return (
            <section>
                <h1>Loading...</h1>
            </section>
        );
    }

    return (
        <div>
            <h1>All MeetUps</h1>
            <MeetUpList meetups={loadedMeetUps} />
        </div>
    );
}
export default AllMeetUps;